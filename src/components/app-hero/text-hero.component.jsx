// import { Button } from "antd";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center h-[70vh] md:h-screen bg-white z-0">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center p-6 md:p-12 lg:p-16"
      >
        <h1 className="text-5xl font-extrabold md:text-7xl text-[#101828]">
          Beyond <span className="text-[#82181a]">Needles</span> and Threads
        </h1>
        <p className="mt-4 text-lg md:text-2xl max-w-2xl mx-auto text-[#101828]">
          Crafting elegance, one stitch at a time. Explore our collection of
          handmade crochets.
        </p>
        {/* <div className="mt-6 flex justify-center gap-4">
          <Button
            type="primary"
            size="large"
            style={{
              borderRadius: 30,
              padding: "20px 15px",
              //   backgroundColor: "#101828",
              //   borderColor: "#101828",
            }}
          >
            Explore Crochets Now
          </Button>
        </div> */}
      </motion.div>
    </section>
  );
}
