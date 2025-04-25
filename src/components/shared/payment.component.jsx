"use client";

import { Card, Image, Typography } from "antd";
import {
  CheckCircleOutlined,
  SafetyCertificateOutlined,
  UndoOutlined,
} from "@ant-design/icons";
import { MdOutlineAccountBalance } from "react-icons/md";

const { Title, Text } = Typography;

export const TrustBadge = () => {
  return (
    <section className="bg-gray-50 py-10 px-4 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <Title level={3} className="text-center mb-8">
          Shop with Confidence
        </Title>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Secure Checkout */}
          <Card
            variant="borderless"
            className="flex items-center gap-4 p-4 shadow-md"
          >
            <SafetyCertificateOutlined className="text-green-600 text-2xl" />
            <div>
              <Text strong>Secure Checkout</Text>
              <p className="text-gray-500 text-sm">
                SSL encryption & fraud protection
              </p>
            </div>
          </Card>

          {/* Refund Policy */}
          <Card
            variant="borderless"
            className="flex items-center gap-4 p-4 shadow-md"
          >
            <UndoOutlined className="text-blue-600 text-2xl" />
            <div>
              <Text strong>Refund Guarantee</Text>
              <p className="text-gray-500 text-sm">
                Easy return & refund policy
              </p>
            </div>
          </Card>

          {/* Verified Payments */}
          <Card
            variant="borderless"
            className="flex items-center gap-4 p-4 shadow-md"
          >
            <CheckCircleOutlined className="text-purple-600 text-2xl" />
            <div>
              <Text strong>Trusted Payment Options</Text>
              <p className="text-gray-500 text-sm">Multiple secure methods</p>
            </div>
          </Card>
        </div>

        {/* Payment Logos */}
        <div className="mt-8 text-center">
          <Title level={5} className="mb-4">
            We Accept
          </Title>
          <div className="flex justify-center items-center flex-wrap gap-6 text-3xl text-gray-700">
            <Image
              src="/icons/mtn-momo.png"
              height={50}
              width={50}
              preview={false}
            />
            <Image
              src="/icons/orange-money.svg"
              height={50}
              width={50}
              preview={false}
            />
            <Image
              src="/icons/visa-logo.png"
              height={50}
              width={100}
              preview={false}
            />
            <Image
              src="/icons/paypal-mark-color_new.svg"
              height={50}
              width={50}
              preview={false}
            />
            <MdOutlineAccountBalance className="hover:text-amber-950 text-5xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
