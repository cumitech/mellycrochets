import { Collapse, Card } from "antd";
import React from "react";

// const text = `
//   A dog is a type of domesticated animal.
//   Known for its loyalty and faithfulness,
//   it can be found as a welcome guest in many households across the world.
// `;
// const items = [
//   {
//     key: "1",
//     label: "This is panel header 1",
//     children: <p>{text}</p>,
//   },
//   {
//     key: "2",
//     label: "This is panel header 2",
//     children: <p>{text}</p>,
//   },
//   {
//     key: "3",
//     label: "This is panel header 3",
//     children: <p>{text}</p>,
//   },
// ];
// const AfterCare = () => {
//   return (
//     <>
//       <Collapse accordion items={items} />
//     </>
//   );
// };

// export default AfterCare;
import {
  PlayCircleOutlined,
  CaretRightOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const tips = [
  "How to play an order",
  "How to take care for your crochets",
  "How to take care for your crochets",
  "How to take care for your crochets",
  "How to take care for your crochets",
  "How to take care for your crochets",
];

const CrochetCareTips = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card className="rounded-2xl shadow-md">
        <div className="flex items-center justify-between border-b pb-3 mb-4">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <SearchOutlined />
            General care for your crochets
          </div>
          <span className="bg-pink-100 text-pink-700 text-xs font-semibold px-2 py-0.5 rounded-md">
            Care
          </span>
        </div>

        <div className="mb-4">
          <div className="bg-gray-200 rounded-lg h-40 flex items-center justify-center">
            <PlayCircleOutlined
              style={{ fontSize: "48px", color: "#ff4d4f" }}
            />
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
            eleifend lectus. Sed quis nisi lectus. Quisque vel leo diam. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
        </div>

        {tips.map((tip, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-t py-2 text-sm hover:bg-gray-50 transition-all"
          >
            <div className="flex items-center gap-2">
              <SearchOutlined className="text-gray-500" />
              <span>{tip}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-pink-100 text-pink-700 text-xs font-semibold px-2 py-0.5 rounded-md">
                Care
              </span>
              <CaretRightOutlined className="text-gray-400" />
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default CrochetCareTips;
