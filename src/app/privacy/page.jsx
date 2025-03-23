"use client";

import { Card } from "antd";
import Link from "next/link";

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#f3d5d5] text-gray-900 py-16 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="text-lg mt-4 max-w-2xl mx-auto">
            Your privacy is important to us. This Privacy Policy explains how we
            collect, use, and protect your information when you use our website.
          </p>
        </div>
      </section>

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
            <Link href="/" className="nav-link active underline">
              Back to Home
            </Link>
          </section>
        </Card>
      </div>
    </div>
  );
}
