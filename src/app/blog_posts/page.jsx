"use client";

import { Button, Typography, Space } from "antd";
import { HeartOutlined } from "@ant-design/icons";

export default function IndexPage() {
  const text = encodeURIComponent(
    `Hello MellyCrochet, I am contacting from your website. I wish to inquire about your products`
  );
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-pink-100">
      <div className="px-5">
        <div className="text-center max-w-lg p-8 bg-white rounded-lg shadow-lg">
          <Typography.Title
            level={1}
            className="text-4xl font-bold text-pink-600 mb-4"
          >
            Coming Soon...
          </Typography.Title>
          <Typography.Paragraph className="text-lg text-gray-700 mb-6">
            We&apos;re working hard on something amazing! Stay tuned for the latest
            crochet trends, tutorials, and more.
          </Typography.Paragraph>
          <Space direction="vertical" className="space-y-4">
            <Button
              type="primary"
              size="large"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white"
              href={`https://wa.me/237681077051?text=${text}`}
            >
              Notify Me
            </Button>
            <Button
              type="default"
              size="large"
              className="w-full bg-transparent border border-pink-500 hover:bg-pink-50"
              icon={<HeartOutlined />}
              href={`https://wa.me/237681077051?text=${text}`}
            >
              Show Your Support
            </Button>
          </Space>
          <div className="mt-6">
            <Typography.Text className="text-sm text-gray-600">
              Crafted with <span className="text-red-500">❤️</span> by your
              crochet community.
            </Typography.Text>
          </div>
        </div>
      </div>
    </div>
  );
}
