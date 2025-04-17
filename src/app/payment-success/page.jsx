"use client";
import { useCreate, useGetIdentity, useUpdate } from "@refinedev/core";
import { Button, Result, Typography } from "antd";
import Link from "next/link";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ORDER_STATUS } from "../../constants/constant";
import ThankYouPage from "../../skeleton/thank-you.skeleton";
import axios from "axios";

export default function IndexPage() {
  const { mutate: updateOrder } = useUpdate();
  const { mutate: createPayment } = useCreate();
  const searchParams = useSearchParams();
  const { data: user, isLoading: identityLoading } = useGetIdentity({});

  const orderId = searchParams.get("orderId");
  const transactionId = searchParams.get("transactionId");
  const requestId = searchParams.get("requestId");

  useEffect(() => {
    const processPayment = async () => {
      if (orderId && transactionId && requestId && user) {
        try {
          const paymentStatus = await axios.get(
            `/api/momo/status/${requestId}`
          );

          const orderItem = await axios.get(`/api/orders/${orderId}`);

          if (paymentStatus.status !== 200 || orderItem.status !== 200) {
            console.error("Payment not successful");
            return;
          }
          const paymentData = paymentStatus.data;
          const orderData = orderItem.data;

          updateOrder(
            {
              resource: "orders",
              id: orderId,
              values: { ...orderData, status: ORDER_STATUS.PROCESSING },
            },
            {
              onSuccess: () => {
                const paymentObj = paymentData.data;
                createPayment(
                  {
                    resource: "payments",
                    values: {
                      orderId,
                      userId: user.id,
                      transactionId,
                      requestId,
                      status: paymentObj.status,
                      username: user.name,
                      email: user.email,
                      telephone: paymentObj.payer.accountId,
                      currency: paymentObj.currencyCode,
                      price: paymentObj.amount,
                      countryCode: paymentObj.payer.countryCode,
                      paymentMethod: paymentObj.payer.paymentMethod,
                      transactionTime: paymentObj.transactionTime,
                      mchTransactionRef: paymentObj.mchTransactionRef,
                      description: paymentObj.description,
                    },
                  },
                  {
                    onSuccess: (data) => {
                      console.log("Payment created successfully: ", data);
                    },
                    onError: (error) => {
                      console.log("error: ", error);
                    },
                  }
                );
              },
              onError: (error) => {
                console.log("error: ", error);
              },
            }
          );
        } catch (error) {
          console.error("Payment handling error: ", error);
        }
      }
    };

    processPayment();
  }, [orderId, transactionId, requestId, user]);

  if (identityLoading) {
    return <ThankYouPage />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4 py-8">
      <Result
        status="success"
        title={
          <Typography.Title level={2}>
            Thank You for Your Purchase!
          </Typography.Title>
        }
        subTitle="We've received your order and are processing it. A confirmation email has been sent to you."
        extra={[
          <Link href="/" key="home">
            <Button
              type="primary"
              size="large"
              className="rounded-full px-6"
              style={{
                borderRadius: 50,
              }}
            >
              Back to Home
            </Button>
          </Link>,
          <Link href="/orders" key="orders">
            <Button
              size="large"
              className="rounded-full px-6"
              style={{
                borderRadius: 50,
              }}
            >
              View My Orders
            </Button>
          </Link>,
        ]}
      />
    </div>
  );
}
