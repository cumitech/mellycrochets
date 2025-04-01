"use client";

import { crochetAPI } from "../../store/api/crochet_api";
import CrochetList from "../../components/crochet/crochet-list.component";
import { motion } from "framer-motion";
import SpinnerList from "../../components/crochet-card.skeleton";
import ShopHero from "../../components/shared/shop-hero.component";

export default function IndexPage() {
  const {
    data: crochets,
    isLoading,
    isFetching,
  } = crochetAPI.useFetchAllCrochetsQuery(1);

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
      <div className="">
        <ShopHero />
        <div className="w-full px-10 pb-10" data-aos="fade-up">
          {/* listings */}
          <CrochetList crochets={crochets} />
        </div>
      </div>
    </>
  );
}
