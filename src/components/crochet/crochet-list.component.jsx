"use client";
import { Button, Col, Empty, Row } from "antd";
import React from "react";
import CrochetCard from "./crochet-card.component";
import { useFilter } from "../../hooks/filter.hook";

const CrochetList = ({ crochets }) => {
  const { filteredCrochets } = useFilter();
  const displayedCrochets =
    filteredCrochets && filteredCrochets.length > 0
      ? filteredCrochets
      : crochets;

  return (
    <>
      {displayedCrochets && displayedCrochets.length > 0 ? (
        <Row
          gutter={[24, 24]}
          data-aos="fade-up"
          className="mt-12"
          data-aos-delay="300"
          id="crochet-list"
        >
          {displayedCrochets?.map((crochet) => (
            <CrochetCard key={crochet.id} crochet={crochet} />
          ))}
        </Row>
      ) : (
        <Col span={24} style={{ padding: "4rem 0" }}>
          <div className="empty-wrap">
            <Empty description="No crochets found at the moment!">
              <Button
                type="primary"
                href="https://wa.me/237681077051"
                size="large"
                style={{ borderRadius: 50 }}
              >
                Contact MellyCrochets
              </Button>
            </Empty>
          </div>
        </Col>
      )}
    </>
  );
};

export default CrochetList;
