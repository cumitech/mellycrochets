"use client";

import { motion } from "framer-motion";
import SpinnerList from "../../../components/crochet-card.skeleton";
import { Row } from "antd";
import CrochetTypeHero from "../../../components/shared/crochet-type-hero.component";
import { tagAPI } from "../../../store/api/tag_api";
import PostList from "../../../components/posts/post-list.component";
export default function IndexPage({ params }) {
  const { slug } = params;

  const {
    data: tag,
    isLoading,
    isFetching, 
  } = tagAPI.useGetSingleTagBySlugQuery(slug);

  if (isLoading || isFetching) {
    return (
      <Row gutter={[24, 24]} data-aos="fade-up" data-aos-delay="300">
        <motion.div
          className="box"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <SpinnerList />
        </motion.div>
      </Row>
    );
  }

  return (
    <>
      <CrochetTypeHero
        title={tag.name}
        description={tag.description}
        breadcrumbs={[
          { title: "Posts", href: "/blog_posts" },
          { title: tag.name, href: "#" },
        ]}
      />
      <div className="w-full px-10 pb-10" data-aos="fade-up">
        {/* listings */}
        <PostList posts={tag?.posts} />
      </div>
    </>
  );
}
