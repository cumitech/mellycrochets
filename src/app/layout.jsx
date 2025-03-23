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
import EmailSubscriptionPopup from "../components/signup/signup.component";

export const metadata = {
  title: "MellyCrochets",
  description: "Crochet sales",
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
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
              <Affix offsetTop={0}>
                <AppNavigation />
              </Affix>
              {children}
              {/* Footer */}
              <Footer />
              <EmailSubscriptionPopup />
              <PrivacyConsent />
            </RefineContext>
          </NextIntlClientProvider>
        </Suspense>
      </body>
    </html>
  );
}
