import { Button } from "antd";
import { motion } from "framer-motion";

const CrochetTypeHero = ({ title, description }) => {
  return (
    <div className="relative w-full bg-gray-100 py-20 px-6 flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center p-6 md:p-12 lg:p-16"
      >
        <h1 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4">
          {title}
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mb-6">{description}</p>
      </motion.div>
    </div>
  );
};

export default CrochetTypeHero;
