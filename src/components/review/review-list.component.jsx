import React from "react";
import { useList } from "@refinedev/core";
import { Card, Rate, Skeleton, Avatar, Typography, Empty } from "antd";
import { useTranslations } from "next-intl";

export const ReviewList = ({ crochetId }) => {
  const t = useTranslations("customer_detail")
  const { data, isLoading } = useList({
    resource: "reviews",
  });

  if (isLoading) {
    return <Skeleton active />;
  }
  const reviews = data?.data;
  const crochetReviews = reviews.filter((d) => d.crochetId === crochetId);
  return (
    <div className="mt-10">
      <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>
      {crochetReviews && crochetReviews.length > 0 ? (
        crochetReviews.map((review) => (
          <Card
            key={review.id}
            style={{ marginBottom: 10 }}
            className="mb-4 shadow-sm"
          >
            <div className="flex items-center mb-2">
              <Avatar
                src={review.user.image}
                size={"large"}
                style={{ width: 60, height: 60 }}
              >
                {review.user.username[0]}
              </Avatar>
              <div className="ml-3">
                <Typography.Title level={5} className="text-sm font-medium">
                  {review.user.username}
                </Typography.Title>
                <Rate disabled defaultValue={review.rating} />
              </div>
            </div>
            <p className="ml-5 text-gray-700">{review.comment}</p>
          </Card>
        ))
      ) : (
        <Empty
          description={<Typography.Title>{t("noDataMsg")}</Typography.Title>}
        />
      )}
    </div>
  );
};
