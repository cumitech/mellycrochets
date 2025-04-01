"use client";

// import { gelocation } from "../lib/geolocation";
// import AppHero from "../components/app-hero/app-hero.component";
// import SocialIcons from "../components/shared/social-icons.component";
import { FiArrowRight } from "react-icons/fi";
import CrochetList from "../components/crochet/crochet-list.component";
// import FilterCrochets from "../components/filter-crochet.component";
import { Button, Row } from "antd";
// import CrochetCareTips from "../components/after-care/after-care.component";
import SignupPrompt from "../components/signup/signup.component";
import { useTranslations } from "next-intl";
import HeroSection from "../components/app-hero/text-hero.component";
import { crochetAPI } from "../store/api/crochet_api";
import SpinnerList from "../components/crochet-card.skeleton";
import { motion } from "framer-motion";

export default function IndexPage() {
  const t = useTranslations("social");
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
      <HeroSection />
      {/* <AppHero /> */}
      {/* <div className="social w-full">
        <SocialIcons />
      </div> */}

      {/* listings */}
      <div className="w-full px-10 md:pt-10" data-aos="fade-up">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-3/4">
            <h2 className="text-2xl text-gray-950 font-extrabold font-playfair">
              {t("listing")}
            </h2>
            <p className="text-gray-800">{t("message")}</p>
          </div>
          <div className="lg:w-1/4 text-left lg:text-right mt-3 lg:mt-0">
            <Button
              type="primary"
              href="/crochets"
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
              {t("view-more")}
            </Button>
          </div>
        </div>
      </div>

      {/* filter content */}
      {/* <FilterCrochets /> */}
      <div className="w-full px-10 pb-20" data-aos="fade-up">
        {/* listings */}
        <CrochetList crochets={crochets} />
      </div>

      <section className="bg-white py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="grid grid-cols-2 gap-2">
            <img
              src="/photos/image8.jpg"
              alt="Crochet 1"
              className="rounded-lg border-4 border-pink-200 w-full h-auto object-cover"
              style={{ width: 245, height: 220 }}
            />
            <img
              src="/photos/image7.jpg"
              alt="Crochet 2"
              className="rounded-lg border-2 border-black w-full h-auto object-cover"
              style={{ width: 245, height: 220 }}
            />
            <img
              src="/mellycrochets/dd/crochet-bags-main.jpg"
              alt="Crochet 3"
              className="rounded-lg border-2 border-black w-full h-auto object-cover"
              style={{ width: 245, height: 220 }}
            />
            <img
              src="/photos/image9.jpg"
              alt="Crochet 4"
              className="rounded-lg border-4 border-pink-200 w-full h-auto object-cover"
              style={{ width: 245, height: 220 }}
            />
          </div>

          <div className="text-center max-w-lg mt-20 md:mt-0">
            <h2
              className="text-2xl font-semibold text-gray-800 font-playfair"
              style={{ marginBottom: 30 }}
            >
              {t("crochetaftercare")}
            </h2>
            <p className="text-gray-700 mb-3">{t("summary")}</p>
            <p className="text-sm text-gray-600" style={{ marginBottom: 30 }}>
              {t("subSummary")}
            </p>

            <Button
              type="primary"
              href="https://www.instagram.com/mellycrochets_?igsh=cTkwZTc1eDcyaThw&utm_source=qr"
              className="transition-all duration-300"
              style={{
                borderRadius: 50,
                padding: "20px 15px",
                fontWeight: 500,
              }}
              size="large"
              icon={<FiArrowRight />}
              iconPosition="end"
            >
              {t("btn")}
            </Button>
          </div>
        </div>
      </section>

      {/* <CrochetCareTips /> */}

      <SignupPrompt />
    </>
  );
}
