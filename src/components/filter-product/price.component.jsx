import React, { useState } from "react";
import { Slider, InputNumber, Row, Col } from "antd";

const PriceRangeFilter = ({ min = 0, max = 1000, setPrice }) => {
  const [range, setRange] = useState([min, max]);

  const handleChange = (value) => {
    setRange(value);
    setPrice(value); // Call the parent function if provided
  };

  return (
    <Row gutter={[16, 16]} align={"middle"}>
      <Col span={8}>
        <InputNumber
          size="large"
          min={min}
          max={max}
          value={range[0]}
          onChange={(value) => handleChange([value, range[1]])}
          style={{ width: 70, borderRadius: 5 }}
        />
      </Col>
      <Col span={8}>
        <Slider
          range
          min={min}
          max={max}
          value={range}
          onChange={handleChange}
          style={{ width: 60 }}
        />
      </Col>
      <Col span={8}>
        <InputNumber
          size="large"
          min={min}
          max={max}
          value={range[1]}
          onChange={(value) => handleChange([range[0], value])}
          style={{ width: 70, borderRadius: 5 }}
        />
      </Col>
    </Row>
  );
};
export default PriceRangeFilter;
