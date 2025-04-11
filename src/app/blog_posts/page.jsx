"use client";

import { Empty } from "antd";
import BlogHero from "../../components/shared/post-hero.component";
import { motion } from "framer-motion";
import AppPost from "../../components/posts/post.component";
import { postAPI } from "../../store/api/post_api";
import SpinnerList from "../../components/crochet-card.skeleton";

export default function IndexPage() {
  const {
    data: posts,
    isLoading,
    isFetching,
  } = postAPI.useFetchAllPostsQuery(1);

  if (isLoading || isFetching) {
    return (
      <motion.div
        className="box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <SpinnerList />
      </motion.div>
    );
  }

  return (
    <>
      <BlogHero />

      <section
        id="blog-posts"
        className="pt-16 pb-30 px-10 mb-15 md:px-20 text-center"
      >
        {(isLoading || isFetching) && (
          <motion.div
            className="box"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <SpinnerList />
          </motion.div>
        )}
        {posts && posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {posts.map((post, index) => (
              <AppPost post={post} key={index} />
            ))}
          </div>
        ) : (
          <div className="empty-wrap">
            <Empty />
          </div>
        )}
      </section>
    </>
  );
}
