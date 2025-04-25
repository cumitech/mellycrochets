import { keywords } from "../../constants/constant";
import { Button, Card } from "antd";
const url = process.env.NEXTAUTH_URL || "https://mellycrochets.shop";
export const metadata = {
  title: "Privacy Policy | MellyCrochets Shop",
  description:
    "Learn how MellyCrochets collects, uses, and protects your personal information. Your privacy is important to us.",
  keywords: [
    "crochet shop privacy",
    "handmade crochet privacy policy",
    "MellyCrochets data protection",
    "crochet store privacy information",
    "personal data usage crochet shop",
    ...keywords,
  ].join(", "),
  alternates: {
    canonical: `${url}/privacy-policy`,
  },
  openGraph: {
    title: "Privacy Policy | MellyCrochets Shop",
    description:
      "Your privacy matters. Learn how we protect and use your information at MellyCrochets.",
    url: `${url}/privacy-policy`,
    type: "article",
    images: [
      {
        url: `${url}/uploads/crochets/cameroon.jpg`, // You might want to add a relevant image
        width: 1200,
        height: 630,
        alt: "MellyCrochets Privacy Policy Information",
      },
    ],
    siteName: "MellyCrochets",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | MellyCrochets Shop",
    description:
      "How we protect your data when you shop our handmade crochet creations.",
    images: [
      `${url}/uploads/crochets/crochet-dress-main.jpg`,
    ],
    creator: "@mellycrochets",
  },
  robots: {
    index: true,
    follow: true,
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
export default function IndexPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative w-full bg-gray-100 py-20 px-6 flex flex-col items-center text-center">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-200 opacity-80"></div>

        {/* Fade-in Slide-up Animation */}
        <div className="relative z-10 text-center max-w-3xl p-6 md:p-12 lg:p-16 animate-fade-in-up">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mb-6">
            Your privacy is important to us. This Privacy Policy explains how we
            collect, use, and protect your information when you use our website.
          </p>
        </div>
      </div>

      {/* Centered Card Container */}
      <div className="flex justify-center px-4 py-12">
        <Card className="w-full max-w-3xl shadow-lg rounded-2xl p-6 sm:p-10">
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              1. Information We Collect
            </h2>
            <p className="text-gray-700">
              We may collect basic information such as your name, email address,
              and purchase details.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-700">
              <li>Process and track your purchases</li>
              <li>Improve our services and user experience</li>
              <li>Send occasional promotional or product-related emails</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              3. Data Protection
            </h2>
            <p className="text-gray-700">
              We are committed to keeping your information safe and secure. Your
              personal data is stored securely and is only used for the purposes
              listed above.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              4. No Data Sharing
            </h2>
            <p className="text-gray-700">
              We do <strong>not sell, trade, or share</strong> your personal
              information with any third parties.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              5. Email Communication
            </h2>
            <p className="text-gray-700">
              By purchasing from us or subscribing to our updates, you agree to
              receive promotional emails. You can unsubscribe at any time by
              clicking the link in the email.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              6. Changes to This Policy
            </h2>
            <p className="text-gray-700">
              We may update this Privacy Policy occasionally. Any changes will
              be posted on this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              7. Contact Us
            </h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy, feel free to
              contact us via email or WhatsApp.
            </p>
            <Button
              href="/"
              type="primary"
              size="large"
              style={{ borderRadius: 30 }}
            >
              Back to Home
            </Button>
          </section>
        </Card>
      </div>
    </div>
  );
}
