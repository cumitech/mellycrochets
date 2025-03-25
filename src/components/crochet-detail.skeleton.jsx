import React from "react";
import { Card, Col, Row, Skeleton, Space } from "antd";

const CrochetDetailSkeleton = () => {
  return (
    <Row
      gutter={24}
      className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg my-8"
    >
      {/* Left Side - Large Image Skeleton */}
      <Col xs={24} md={10}>
        <Card variant="borderless" style={{ width: "100%", marginBottom: 20 }}>
          <Skeleton.Image
            style={{ width: 300, height: 300 }}
            active
          />
          <Space wrap style={{ marginTop: 10 }}>
            {[1, 2, 3].map((_, index) => (
              <Skeleton.Image key={index} style={{ width: "100%" }} active />
            ))}
          </Space>
        </Card>
      </Col>

      {/* Right Side - Product Details */}
      <Col xs={24} md={14}>
        <Card variant="borderless" style={{ width: "100%", padding: 20 }}>
          <Skeleton paragraph={{ rows: 1 }} title={{ width: "60%" }} active />
          <Skeleton paragraph={{ rows: 1 }} title={{ width: "30%" }} active />

          {/* Available Sizes */}
          <Space size="small" style={{ marginTop: 20 }}>
            {[1, 2, 3].map((_, index) => (
              <Skeleton.Button
                key={index}
                active
                style={{ width: 40, height: 30 }}
              />
            ))}
          </Space>

          {/* Choose Your Size */}
          <Space size="small" style={{ marginTop: 20 }}>
            {[1, 2, 3, 4, 5].map((_, index) => (
              <Skeleton.Button
                key={index}
                active
                style={{ width: 50, height: 30 }}
              />
            ))}
          </Space>

          {/* Choose Your Colors */}
          <Space wrap style={{ marginTop: 20 }}>
            {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
              <Skeleton.Button
                key={index}
                active
                style={{ width: 70, height: 30 }}
              />
            ))}
          </Space>

          {/* Order Buttons */}
          <Row style={{ marginTop: 30 }} gutter={16}>
            <Col>
              <Skeleton.Button active style={{ width: 140, height: 40 }} />
            </Col>
            <Col>
              <Skeleton.Button
                active
                style={{ width: 140, height: 40, border: "1px solid red" }}
              />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default CrochetDetailSkeleton;
