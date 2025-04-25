import { cookies } from "next/headers";
import React, { Suspense } from "react";
import { RefineContext } from "../contexts/refine-context";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "../assets/css/globals.css";
import "../assets/css/main.css";
import { Affix, Spin } from "antd";
import AppNavigation from "../components/nav.component";
import Footer from "../components/footer/footer.component";
import { LoadingOutlined } from "@ant-design/icons";
import PrivacyConsent from "../components/privacy-policy/privacy-policy.component";
import "../lib/polyfils";
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
  keywords: keywords.join(", "),
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

export default async function RootLayout({ children }) {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  const defaultMode = theme?.value === "dark" ? "dark" : "light";

  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <meta name="theme-color" content="#ffffff" /> */}
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "MellyCrochets",
              image: `${url}/uploads/crochets/crochet-dress-main.jpg`,
              description: "Handcrafted crochet fashion and accessories",
              url: url,
              telephone: "+237681077051",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bamenda",
                addressRegion: "North West",
                postalCode: "237",
                streetAddress: "Mile 4 Nkwen",
                addressCountry: "Cameroon",
              },
              openingHours: "Mo,Tu,We,Th,Fr 09:00-17:00",
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body>
        <Suspense
          fallback={
            <Spin
              size="large"
              indicator={
                <LoadingOutlined
                  style={{
                    fontSize: 48,
                  }}
                  spin
                />
              }
              style={{
                minHeight: "65vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              fullscreen
            />
          }
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
            <RefineContext defaultMode={defaultMode}>
              <Affix offsetTop={0} className="sticky top-0 left-0 w-full z-100">
                <AppNavigation />
              </Affix>
              {children}
              <Footer />
              {/* <EmailSubscriptionPopup /> */}
              <PrivacyConsent />
            </RefineContext> 
          </NextIntlClientProvider>
        </Suspense>
      </body>
    </html>
  );
}
