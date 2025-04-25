// components/view-more-button.js
"use client";

import { FiArrowRight } from "react-icons/fi";
import { Button } from "antd";
import { motion } from "framer-motion";

export default function ViewMoreButton({ href, text}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Button
        type="primary"
        href={href || "/shop"}
        size="large"
        className="text-sm font-semibold transition-all duration-300"
        style={{
          borderRadius: 50,
          padding: "20px 25px",
          fontWeight: 500,
        }}
        icon={<FiArrowRight />}
        iconPosition="end"
      >
        {text}
      </Button>
    </motion.div>
  );
}
