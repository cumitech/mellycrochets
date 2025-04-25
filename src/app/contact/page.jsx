import ContactSection from "../../components/contact/contact.component";
import "../../assets/css/globals.css";
import { keywords } from "../../constants/constant";
import { getTranslations } from "next-intl/server";

const url = process.env.NEXTAUTH_URL || "https://mellycrochets.shop";
export const metadata = {
  title: "Contact Us | MellyCrochets",
  description:
    "Get in touch with MellyCrochets for inquiries about our handcrafted crochet fashion.",
  keywords: [
    "crochet contact",
    "handmade fashion inquiries",
    "crochet designer contact",
    "custom crochet orders",
    ...keywords,
  ].join(", "),
  openGraph: {
    title: "Contact Us | MellyCrochets",
    description:
      "Reach out to MellyCrochets for custom orders and inquiries about our handcrafted pieces.",
    images: [`${url}/uploads/crochets/crochet-dress-main.jpg`],
    url: `${url}/contact`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | MellyCrochets",
    description: "Get in touch for custom crochet orders and inquiries.",
    images: [`${url}/uploads/crochets/crochet-dress-main.jpg`],
  },
};

export default async function Contact() {
  const t = await getTranslations("contact");

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full bg-gray-100 py-20 px-6 flex flex-col items-center text-center">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-200 opacity-80"></div>

        {/* Fade-in Slide-up Animation */}
        <div className="relative z-10 text-center max-w-3xl p-6 md:p-12 lg:p-16 animate-fade-in-up">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            {t("heroTitle")}
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mb-6">
            {t("heroDescription")}
          </p>
        </div>
      </div>

      {/* Contact Details */}
      <ContactSection />
    </div>
  );
}
