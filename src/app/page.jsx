// app/page.js
import { getTranslations } from "next-intl/server";
import HeroSection from "../components/app-hero/text-hero.component";
import GallerySection from "../components/pages/home/gallery.component";
import CrochetListWrapper from "../components/pages/home/list-wrapper.component";
import ViewMoreButton from "../components/pages/home/view-more-button.component";
import SignupPrompt from "../components/signup/signup.component";
import { keywords } from "../constants/constant";

const url = process.env.NEXTAUTH_URL || "https://mellycrochets.shop";
export const metadata = {
  metadataBase: new URL(`${url}`),
  title: {
    default: "Handcrafted Crochet Fashion | MellyCrochets",
    template: "%s | MellyCrochets",
  },
  description:
    "Explore a collection of handcrafted crochet outfits at MellyCrochets. Trendy, stylish, and comfortable crochet wear for every occasion.",
  keywords: [
    "crochet fashion",
    "handcrafted crochet",
    "MellyCrochets",
    "trendy crochet outfits",
    "custom crochet clothing",
    ...keywords,
  ].join(", "),
  manifest: `${url}/site.webmanifest`,
  appleWebApp: {
    title: "MellyCrochets",
    statusBarStyle: "default",
    capable: true,
    startupImage: "/apple-touch-icon.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "MellyCrochets",
    description:
      "Explore a collection of handcrafted crochet outfits at MellyCrochets. Trendy, stylish, and comfortable crochet wear for every occasion.",
    images: [`${url}/uploads/crochets/crochet-dress-main.jpg`],
    creator: "@mellycrochets",
  },
  // alternates: {
  //   canonical: `${url}`,
  // },
  openGraph: {
    title: "MellyCrochets",
    description:
      "Explore a collection of handcrafted crochet outfits at MellyCrochets. Trendy, stylish, and comfortable crochet wear for every occasion.",
    images: [`${url}/uploads/crochets/crochet-dress-main.jpg`],
    siteName: "MellyCrochets",
    locale: "en_US",
    url: url,
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default async function IndexPage() {
  const t = await getTranslations("social");

  return (
    <>
      <HeroSection
        heroInit={t("heroInit")}
        heroMiddle={t("heroMiddle")}
        heroLast={t("heroLast")}
        description={t("heroDescription")}
      />

      {/* Listings Section */}
      <section className="w-full px-10 md:pt-10" data-aos="fade-up">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-3/4">
            <h2 className="text-2xl text-gray-950 font-extrabold font-playfair">
              {t("listing")}
            </h2>
            <p className="text-gray-800">{t("message")}</p>
          </div>
          <div className="lg:w-1/4 text-left lg:text-right mt-3 lg:mt-0">
            <ViewMoreButton text={t("view-more")} href="/shop" />
          </div>
        </div>
      </section>

      {/* Crochet List */}
      <section className="w-full px-10 pb-20" data-aos="fade-up">
        <CrochetListWrapper />
      </section>

      <GallerySection
        title={t("crochetaftercare")}
        subSummary={t("subSummary")}
        buttonText={t("btn")}
        summary={t("summary")}
      />

      <SignupPrompt />
    </>
  );
}
