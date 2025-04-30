"use client";
import { useCreate, useGetIdentity } from "@refinedev/core";
import { Button, message, Result, Typography } from "antd";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ORDER_STATUS } from "../../constants/constant";
import axios from "axios";
import { OrderService } from "../../service/order.service";

export default function IndexPage() {
  const { mutate: createPayment } = useCreate();
  const searchParams = useSearchParams();
  const { data: user } = useGetIdentity({});
  const [telephone, setTelephone] = useState("");

  const orderId = searchParams.get("orderId");
  const transactionId = searchParams.get("transactionId");
  const requestId = searchParams.get("requestId");
  const success = searchParams.get("success") === "true";

  const hasProcessed = useRef(false);

  useEffect(() => {
    const processPayment = async () => {
      if (hasProcessed.current) return;
      hasProcessed.current = true;

      if (orderId && transactionId && requestId) {
        try {
          const paymentStatus = await axios.get(
            `/api/momo/status/${requestId}`
          );

          const orderItem = await axios.get(`/api/orders/${orderId}`);

          if (paymentStatus.status !== 200 || orderItem.status !== 200) {
            message.error("Payment not successful");
            return;
          }
          const paymentData = paymentStatus.data;
          const orderData = orderItem.data;
          const { payer } = paymentData.data;

          setTelephone(payer.accountId);

          const response = await OrderService.update({
            ...orderData,
            status: ORDER_STATUS.PAID,
            telephone: payer.accountId,
          });
          if (response.success) {
            const paymentObj = paymentData.data;
            createPayment({
              resource: "payments",
              values: {
                orderId,
                userId: user ? user.id : null,
                transactionId,
                requestId,
                status: paymentObj.status,
                username: user ? user.name : orderData.username,
                email: user ? user.email : orderData.email,
                telephone: paymentObj.payer.accountId,
                currency: paymentObj.currencyCode,
                price: paymentObj.amount,
                countryCode: paymentObj.payer.countryCode,
                paymentMethod: paymentObj.payer.paymentMethod,
                transactionTime: paymentObj.transactionTime,
                mchTransactionRef: paymentObj.mchTransactionRef,
                description: paymentObj.description,
              },
            });
          }
        } catch (error) {
          console.error("Payment handling error: ", error);
        }
      }
    };

    processPayment();
  }, [orderId, transactionId, requestId, success]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4 py-8">
      <Result
        status={success ? "success" : "error"}
        title={
          success ? (
            <Typography.Title level={2}>
              Thank You for Your Purchase!
            </Typography.Title>
          ) : (
            <Typography.Title level={2}>Payment Failed</Typography.Title>
          )
        }
        subTitle={
          success
            ? "We've received your order and are processing it. A confirmation email has been sent to you."
            : "We failed to receive your payments, please verify your payment status."
        }
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
          <Link href={`/orders?telephone=${telephone}`} key="orders">
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
