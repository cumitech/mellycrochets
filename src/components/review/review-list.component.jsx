import React from "react";
import { useList } from "@refinedev/core";
import { Card, Rate, Skeleton, Avatar, Typography } from "antd";

export const ReviewList = ({ crochetId }) => {
  const { data, isLoading } = useList({
    resource: "reviews",
    filters: [{ field: "crochetId", operator: "eq", value: crochetId }],
    sorters: [{ field: "createdAt", order: "desc" }],
  });

  return (
    <div className="mt-10">
      <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>
      {isLoading ? (
        <Skeleton active />
      ) : (
        data?.data.map((review) => (
          <Card key={review.id} style={{ marginBottom: 10}} className="mb-4 shadow-sm">
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
      )}
    </div>
  );
};
