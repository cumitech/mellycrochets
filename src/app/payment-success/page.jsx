"use client";

import { useCreate, useGetIdentity } from "@refinedev/core";
import { Button, message, Result, Typography } from "antd";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ORDER_STATUS } from "../../constants/constant";
import axios from "axios";
import { OrderService } from "../../service/order.service";
import { usePaymentMethod } from "../../hooks/payment-method";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function PaymentStatusPage() {
  const { mutate: createPayment } = useCreate();
  const { data: user } = useGetIdentity();
  const { paymentMethod } = usePaymentMethod();
  const searchParams = useSearchParams();
  const [telephone, setTelephone] = useState("");

  const orderId = searchParams.get("orderId");
  const transactionId = searchParams.get("transactionId");
  const requestId = searchParams.get("requestId");
  const success = searchParams.get("success") === "true";

  const hasProcessed = useRef(false);
  const t = useTranslations("payment_success");

  useEffect(() => {
    const fetchAndProcessPayment = async () => {
      if (hasProcessed.current || !orderId || !transactionId || !requestId)
        return;
      hasProcessed.current = true;
      debugger;
      try {
        const [paymentRes, orderRes] = await Promise.all([
          axios.get(`/api/momo/status/${requestId}`),
          axios.get(`/api/orders/${orderId}`),
        ]);

        const payment = paymentRes.data?.data;
        const order = orderRes.data;
        const payer = payment?.payer;

        const isSuccessful =
          paymentRes.status === 200 &&
          payment?.status === "SUCCESSFUL" &&
          orderRes.status === 200;

        const updatedStatus = isSuccessful
          ? ORDER_STATUS.PAID
          : ORDER_STATUS.CANCELLED;
        const accountId = payer?.accountId ?? "";

        setTelephone(accountId);

        await OrderService.update({
          ...order,
          status: updatedStatus,
          telephone: accountId,
        });

        if (!isSuccessful) {
          message.error("Payment not successful");
          return;
        }

        // Record the payment
        createPayment({
          resource: "payments",
          values: {
            orderId,
            userId: user?.id ?? null,
            transactionId,
            requestId,
            status: payment.status,
            // username: user?.name ?? order.username,
            username: payer.name,
            email: user?.email ?? order.email,
            telephone: accountId,
            currency: payment.currencyCode,
            price: payment.amount,
            countryCode: payer?.countryCode,
            paymentMethod: payer?.paymentMethod,
            transactionTime: payment.transactionTime,
            mchTransactionRef: payment.mchTransactionRef,
            description: payment.description,
          },
        });
      } catch (error) {
        console.error("Payment handling error:", error);
      }
    };

    fetchAndProcessPayment();
  }, [orderId, transactionId, requestId]);

  const renderTitle = success ? t("titleSuccess") : t("titleFailed");
  const renderSubTitle = success ? t("subTitleSuccess") : t("subTitleFailed");

  // Construct the message
  const messageText = encodeURIComponent(
    `${t("messageTitle")}\n` +
      `${t("transactionTitle")}\n` +
      `${t("paymentMethod")} ${paymentMethod}\n` +
      `${t("orderId")} ${orderId}\n` +
      `${t("transactionId")} ${transactionId}\n` +
      `${t("requestId")}: ${requestId}`
  );

  const whatsappUrl = `https://wa.me/237681077051?text=${messageText}`;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4 py-8">
      <Result
        status={success ? "success" : "error"}
        title={<Typography.Title level={2}>{renderTitle}</Typography.Title>}
        subTitle={renderSubTitle}
        extra={[
          <Button
            href="/"
            key={"home"}
            type="primary"
            size="large"
            className="rounded-full px-6"
          >
            Back to Home
          </Button>,
          success ? (
            <Button
              key="orders"
              href={`/orders?telephone=${telephone}`}
              size="large"
              className="rounded-full px-6"
            >
              View My Orders
            </Button>
          ) : (
            <Button
              key="whatsapp"
              href={whatsappUrl}
              target="_blank"
              type="primary"
              size="large"
              style={{
                background: "#25D366",
                color: "white",
              }}
            >
              <span>{t("contact")}</span>
              <FaWhatsapp size={25} style={{ marginLeft: 5 }} />
            </Button>
          ),
        ]}
      />
    </div>
  );
}
