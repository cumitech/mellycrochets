import React, { useState } from "react";
import { useCreate, useGetIdentity } from "@refinedev/core";
import { Rate, Input, Button, message } from "antd";
import { useTranslations } from "next-intl";

export const ReviewCreate = ({ crochetId }) => {
  const { mutate, isLoading } = useCreate();
  const { data: user } = useGetIdentity({});
  const [rating, setRating] = useState(3);
  const [comment, setComment] = useState("");
  const t = useTranslations("customer_detail");

  const handleSubmit = () => {
    if (!rating || !comment.trim()) {
      return message.warning(t("warningMsg"));
    }

    mutate({
      resource: "reviews",
      values: {
        userId: user.id, // Replace with logged-in user ID
        crochetId,
        rating,
        comment,
      },
    });
  };

  return (
    <div className="mt-8 p-4 rounded-lg shadow-sm bg-white">
      <h3 className="text-lg font-semibold mb-3">{t("reviewTitle")}</h3>
      <Rate value={rating} onChange={setRating} />
      <Input.TextArea
        rows={4}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Share your thoughts..."
        className="my-3"
        style={{ borderRadius: 20 }}
      />
      <Button
        style={{ borderRadius: 20, marginTop: 10 }}
        size="large"
        type="primary"
        loading={isLoading}
        onClick={handleSubmit}
      >
        {t("btnMsg")}
      </Button>
    </div>
  );
};
