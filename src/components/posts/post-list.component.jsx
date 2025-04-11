"use client";
import { Col, Empty, Row } from "antd";
import React from "react";
import AppPost from "./post.component";

const PostList = ({ posts }) => {
  return (
    <>
      {posts && posts.length > 0 ? (
        <Row
          gutter={[24, 24]}
          data-aos="fade-up"
          className="mt-12"
          data-aos-delay="300"
          id="post-list"
        >
          {posts?.map((post) => (
            <AppPost key={post.id} post={post} />
          ))}
        </Row>
      ) : (
        <Col span={24} style={{ padding: "4rem 0" }}>
          <div className="empty-wrap">
            <Empty description="No posts found at the moment!" />
          </div>
        </Col>
      )}
    </>
  );
};

export default PostList;
