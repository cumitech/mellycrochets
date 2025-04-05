"use client";

import { Typography, Card, Divider, Tag, Space } from "antd";
import { postAPI } from "../../../store/api/post_api";
import { categoryAPI } from "../../../store/api/category_api";
import { tagAPI } from "../../../store/api/tag_api";
import { API_URL_UPLOADS_POSTS } from "../../../constants/api-url";
import CrochetTypeHero from "../../../components/shared/crochet-type-hero.component";
import Link from "next/link";
import { CiFolderOn } from "react-icons/ci";
import PostComments from "../../../components/comment/comment.component";

const { Title, Paragraph } = Typography;
export default function IndexPage({ params }) {
  const {
    data: post,
    isLoading: isLoadingPost,
    isFetching: isFetchingPost,
  } = postAPI.useGetSinglePostBySlugQuery(params.slug);

  const {
    data: categories,
    isLoading: isLoadingCategory,
    isFetching: isFetchingCategory,
  } = categoryAPI.useFetchAllCategoriesQuery(1);

  const {
    data: tags,
    isLoading: isLoadingTag,
    isFetching: isFetchingTag,
  } = tagAPI.useFetchAllTagsQuery(1);

  const {
    data: latestPosts,
    isLoading: isLoadingLatestPost,
    isFetching: isFetchingLatestPost,
  } = postAPI.useFetchAllLatestPostsQuery(1);

  if (
    isLoadingPost ||
    isFetchingPost ||
    isLoadingCategory ||
    isFetchingCategory ||
    isLoadingTag ||
    isFetchingTag ||
    isLoadingLatestPost ||
    isFetchingLatestPost
  ) {
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
    <>
      <CrochetTypeHero
        title={"Post Details"}
        description={post.title}
        breadcrumbs={[
          { title: "Posts", href: "/blog_posts" },
          { title: "Details", href: "#" },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Post Content */}
        <div className="lg:col-span-2">
          <Card
            cover={
              <img
                src={`${API_URL_UPLOADS_POSTS}/${post.imageUrl}`}
                alt={post.title}
                className="rounded-t-xl object-cover w-full"
              />
            }
            className="rounded-xl"
            variant="borderless"
          >
            <Typography>
              <Title level={2}>{post.title}</Title>
              <Paragraph type="secondary">{post.summary}</Paragraph>
              <Divider />
              <div className="prose max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
              <Divider />
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag) => (
                  <Tag
                    key={tag.id}
                    color="#ffe3e2"
                    style={{ color: "#333", fontWeight: 500 }}
                  >
                    {tag.name.toUpperCase()}
                  </Tag>
                ))}
              </div>
            </Typography>
          </Card>
        </div>

        {/* Sidebar */}
        <Space direction="vertical" size={"small"} className="space-y-6">
          {/* Latest Posts */}
          <Card
            variant="borderless"
            size="small"
            title="Latest Posts"
            className="rounded-xl shadow-sm"
          >
            <ul className="space-y-2">
              {latestPosts.map((p) => (
                <li key={p.id}>
                  <Link href={`/posts/${p.slug}`}>{p.title.toUpperCase()}</Link>
                </li>
              ))}
            </ul>
          </Card>

          {/* Categories */}
          <Card
            variant="borderless"
            size="small"
            title="Categories"
            className="rounded-xl shadow-sm"
          >
            <ul className="space-y-1">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    style={{
                      marginBottom: 5,
                    }}
                    href={`/categories/${cat.slug}`}
                  >
                    <Space style={{ columnGap: 2 }}>
                      <CiFolderOn size={20} /> {cat.name.toUpperCase()}
                    </Space>
                  </Link>
                </li>
              ))}
            </ul>
          </Card>

          {/* Tags */}
          <Card
            variant="borderless"
            size="small"
            title="Tags"
            className="rounded-xl shadow-sm"
          >
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Link key={tag.id} href={`/tags/${tag.slug}`}>
                  <Tag
                    size="large"
                    color="#ffe3e2"
                    style={{ color: "#333", fontWeight: 500 }}
                  >
                    {tag.name.toUpperCase()}
                  </Tag>
                </Link>
              ))}
            </div>
          </Card>
        </Space>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <PostComments postId={post.id} />
      </div>
    </>
  );
}
