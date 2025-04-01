import React, { useState } from "react";
import { Menu } from "antd";
import Link from "next/link";

const CrochetMenu = ({ crochetTypes }) => {
  const [current, setCurrent] = useState("mail");

  const onClick = (e) => {
    setCurrent(e.key);
  };

  const items = [
    {
      label: "Crochet Designs",
      key: "crochet",
      className: "hello",
      children:
        crochetTypes?.map((crochetType) => ({
          label: (
            <Link href={`/crochet_designs/${crochetType.slug}`}>
              {crochetType.name}
            </Link>
          ),
          key: crochetType.slug,
        })) || [],
    },
  ];

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      style={{ background: "transparent", backgroundColor: "transparent", border: 0 }}
      className="nav-link font-playfair pl-0"
    />
  );
};

export default CrochetMenu;
