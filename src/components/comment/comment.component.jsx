"use client";
import { Card, Input, Button, Tooltip, Typography, message } from "antd";
import { useEffect, useState } from "react";
import { commentAPI } from "../../store/api/comment_api";
import { useGetIdentity } from "@refinedev/core";
import { useCreate } from "@refinedev/core";
import { Comment } from "@ant-design/compatible";
import dayjs from "dayjs";
const { TextArea } = Input;
const { Paragraph, Text } = Typography;

const PostComments = ({ postId }) => {
  const [justPosted, setJustPosted] = useState(false);

  const { mutate } = useCreate({
    resource: "comments",
  });

  const {
    data: comments,
    isLoadingComment,
    isFetchingComment,
    refetch,
  } = commentAPI.useFetchAllCommentsQuery(1);

  const { data: user } = useGetIdentity({});

  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePost = async () => {
    if (!content.trim()) return;
    try {
      setLoading(true);
      mutate(
        {
          values: {
            userId: user.id,
            postId: postId,
            message: content,
            toggle: true,
          },
        },
        {
          onSuccess: () => {
            setContent("");
            setJustPosted(true);
            message.success("Your comment has been posted!");
            refetch();
          },
          onError: () => {
            message.error("Failed to post comment.");
          },
          onSettled: () => {
            setLoading(false);
          },
        }
      );
      setContent("");
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (justPosted && comments && comments.length > 0) {
      const lastComment = document.getElementById(
        `comment-${comments[comments.length - 1].id}`
      );
      lastComment?.scrollIntoView({ behavior: "smooth" });
      setJustPosted(false); // reset after scrolling
    }
  }, [comments, justPosted]);

  if (isLoadingComment || isFetchingComment) {
    return (
      <div
        style={{
          minHeight: "65vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p className="text-lg text-center">Details loading...</p>
      </div>
    );
  }

  return (
    <div className="mt-10">
      <Card title="Comments" className="rounded-xl shadow-sm">
        {/* Comment Form or Prompt */}
        {user ? (
          <div className="mb-6">
            <Paragraph strong className="mb-2">
              Comment as <Text type="success">{user.name}</Text>
            </Paragraph>
            <TextArea
              rows={4}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your comment here..."
            />
            <div className="text-right mt-2">
              <Button
                type="primary"
                loading={loading}
                onClick={handlePost}
                disabled={!content.trim()}
              >
                Post Comment
              </Button>
            </div>
          </div>
        ) : (
          <Paragraph className="text-center text-gray-500 italic">
            Please{" "}
            <a href="/login" className="text-blue-600 underline">
              sign in
            </a>{" "}
            to leave a comment.
          </Paragraph>
        )}

        {/* Comment List */}
        <div className="space-y-6 mt-6">
          {comments && comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment.id} id={`comment-${comment.id}`}>
                <Comment
                  author={<a>{comment.user.username}</a>}
                  avatar={
                    <img
                      src={comment.user.image}
                      alt={comment.user.username}
                      className="w-8 h-8 rounded-full"
                    />
                  }
                  content={<p>{comment.message}</p>}
                  datetime={
                    <Tooltip
                      title={dayjs(comment.createdAt).format(
                        "YYYY-MM-DD HH:mm"
                      )}
                    >
                      <span>
                        {dayjs(comment.createdAt).format("MMM D, YYYY hh:mm A")}
                      </span>
                    </Tooltip>
                  }
                />
              </div>
            ))
          ) : (
            <Paragraph type="secondary" className="text-center">
              No comments yet. Be the first to comment!
            </Paragraph>
          )}
        </div>
      </Card>
    </div>
  );
};

export default PostComments;
