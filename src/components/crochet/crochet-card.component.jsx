import { Card, Col, Image, Tag } from "antd";
import Link from "next/link";
import React from "react";
import { API_URL_UPLOADS_CROCHETS } from "../../constants/api-url";
import { useCurrency } from "../../hooks/currency.hook";

const { Meta } = Card;
const CrochetCard = ({ crochet }) => {
  const { getConvertedPrice } = useCurrency();

  const convertedPrice = getConvertedPrice(
    crochet.priceInCfa,
    crochet.priceInUsd
  );

  return (
    <>
      <Col xs={24} md={12} lg={8} key={crochet.id}>
        <Card
          hoverable
          cover={
            <div className="relative custom-image-group">
              {crochet.imageUrls?.map((item, i) => (
                <img
                  key={`preload-${i}`}
                  src={`${API_URL_UPLOADS_CROCHETS}/${item}`}
                  alt={crochet.description}
                  style={{ display: "none" }}
                />
              ))}
              <Image.PreviewGroup
                items={crochet.imageUrls?.map((item) => {
                  return `${API_URL_UPLOADS_CROCHETS}/${item || "nodata"}`;
                })}
              >
                <Image
                  className="custom-ant-image bg-[#f2c2c2] object-cover rounded-t-md"
                  src={`${API_URL_UPLOADS_CROCHETS}/${
                    crochet.imageUrls[0] || "nodata"
                  }`}
                  alt={crochet.description}
                  preview={true}
                  style={{ objectFit: "cover", height: 400 }}
                />
              </Image.PreviewGroup>

              <div className="absolute top-3 left-3 flex rounded-2xl gap-2">
                <Tag color="pink">MellyCrochets</Tag>
              </div>
            </div>
          }
          className="shadow-lg"
        >
          <Meta
            title={
              <div className="flex justify-between align-middle">
                <Link
                  href={`/crochets/${crochet.slug}`}
                  className="nav-link text-gray-800 hover:text-red-500"
                >
                  {crochet.name}
                </Link>
                <span
                  style={{ border: "2px solid #e3b1b1" }}
                  className="rounded-3xl px-3 py-1 border-[#e3b1b1] font-normal text-sm hover:bg-[#e3b1b1] hover:font-medium"
                >
                  {convertedPrice}
                </span>
              </div>
            }
          />
        </Card>
      </Col>
    </>
  );
};

export default CrochetCard;
