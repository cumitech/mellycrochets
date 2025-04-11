// import { Button } from "antd";
import { motion } from "framer-motion";

const BlogHero = () => {
  return (
    <div className="relative w-full bg-gray-100 py-20 px-6 flex flex-col items-center text-center rounded-br-[40%] rounded-bl-[40%]">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-200 opacity-80 rounded-br-[40%] rounded-bl-[40%]"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-3xl p-6 md:p-12 lg:p-16"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          Welcome to the Cozy Crochet Blog
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mb-6">
          Dive into the world of crochet fashion, DIY patterns, and styling
          tips. Get inspired by handmade creations and the stories behind them.
        </p>
        {/* <Button
          type="primary"
          href="#blog-posts"
          size="large"
          style={{
            borderRadius: 50,
            padding: "0 50px",
          }}
        >
          Explore Blog
        </Button> */}
      </motion.div>
    </div>
  );
};

export default BlogHero;
