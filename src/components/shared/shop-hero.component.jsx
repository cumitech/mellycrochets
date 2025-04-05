import { Button } from "antd";
import { motion } from "framer-motion";

const ShopHero = () => {
  return (
    <div className="relative w-full bg-gray-100 py-20 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center text-center p-6 md:p-12 lg:p-16"
      >
        <h1 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4">
          Discover Unique Handmade Crochet Pieces
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mb-6">
          Explore our beautifully crafted crochet wear, designed for style,
          comfort, and elegance.
        </p>
        <Button
          type="primary"
          href="#crochet-list"
          size="large"
          style={{ borderRadius: 50, padding: "0 50px" }}
        >
          Shop Now
        </Button>
      </motion.div>
    </div>
  );
};

export default ShopHero;
