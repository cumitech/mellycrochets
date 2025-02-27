"use client";

import PageBreadCrumbs from "../../../../components/page-breadcrumb/page-breadcrumb.component";
import { Create, useForm } from "@refinedev/antd";
import { useSelect } from "@refinedev/core";
import { Col, Form, Input, InputNumber, Row, Select, Space } from "antd";

export default function CarCreate() {
  const { formProps, saveButtonProps } = useForm({});
  const { options: carModelOptions } = useSelect({
    resource: "car_models",
    optionLabel: "modelName",
    optionValue: "id",
    debounce: 200,
  });
  const { options: carTransmissionOptions } = useSelect({
    resource: "car_transmissions",
    optionLabel: "name",
    optionValue: "id",
    debounce: 200,
  });
  const { options: carEngineOptions } = useSelect({
    resource: "car_engines",
    optionLabel: "name",
    optionValue: "id",
    debounce: 200,
  });
  const { options: locationOptions } = useSelect({
    resource: "locations",
    optionLabel: "name",
    optionValue: "id",
    debounce: 200,
  });
  return (
    <>
      <PageBreadCrumbs items={["Cars", "Lists", "Create"]} />
      <Create saveButtonProps={saveButtonProps}>
        <Form {...formProps} layout="vertical">
          {/* Name Field */}
          <Row style={{ width: "100%" }} gutter={[10, 5]}>
            <Col span={24} md={12}>
              <Form.Item
                label="Car Number"
                name="carNum"
                rules={[{ required: true }]}
              >
                <Input placeholder="Enter car number" />
              </Form.Item>
            </Col>

            <Col span={24} md={12}>
              <Form.Item
                label="Car Model"
                name="carModelId"
                rules={[{ required: true }]}
              >
                <Select
                  options={carModelOptions.map((opt) => {
                    return {
                      label: opt.label,
                      value: opt.value,
                    };
                  })}
                  showSearch
                  allowClear
                  placeholder="Select a car model"
                />
              </Form.Item>
            </Col>
          </Row>

          <Row style={{ width: "100%" }} gutter={[10, 5]}>
            <Col span={24} md={12}>
              <Form.Item label="Year" name="year" rules={[{ required: true }]}>
                <InputNumber
                  style={{ width: "100%" }}
                  min={1900}
                  max={new Date().getFullYear()}
                />
              </Form.Item>
            </Col>

            <Col span={24} md={12}>
              <Form.Item
                label="Color"
                name="color"
                rules={[{ required: true }]}
              >
                <Input placeholder="Enter color" />
              </Form.Item>
            </Col>
          </Row>

          <Row style={{ width: "100%" }} gutter={[10, 5]}>
            <Col span={24} md={12}>
              <Space>
                <Form.Item
                  label="N. of Seats"
                  name="numOfSeats"
                  rules={[{ required: true }]}
                >
                  <InputNumber style={{ width: "100%" }} min={1} />
                </Form.Item>
                <Form.Item
                  label="Daily Rate ($)"
                  name="dailyRate"
                  rules={[{ required: true }]}
                >
                  <InputNumber style={{ width: "100%" }} min={0} />
                </Form.Item>

                <Form.Item
                  label="S.Price ($)"
                  name="salesPrice"
                  rules={[{ required: true }]}
                >
                  <InputNumber style={{ width: "100%" }} min={0} />
                </Form.Item>
              </Space>
            </Col>
            <Col span={24} md={12}>
              <Form.Item
                label="Availability Status"
                name="availabilityStatus"
                rules={[{ required: true }]}
              >
                <Select
                  options={[
                    { value: "available" },
                    { value: "rented" },
                    { value: "sold" },
                  ]}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row style={{ width: "100%" }} gutter={[10, 5]}>
            <Col span={24} md={8}>
              <Form.Item
                label="Transmission"
                name="transmissionId"
                rules={[{ required: true }]}
              >
                <Select
                  options={carTransmissionOptions.map((opt) => {
                    return {
                      label: opt.label,
                      value: opt.value,
                    };
                  })}
                  showSearch
                  allowClear
                  placeholder="Select transmission type"
                />
              </Form.Item>
            </Col>

            <Col span={24} md={8}>
              <Form.Item
                label="Engine"
                name="engineId"
                rules={[{ required: true }]}
              >
                <Select
                  options={carEngineOptions.map((opt) => {
                    return {
                      label: opt.label,
                      value: opt.value,
                    };
                  })}
                  showSearch
                  allowClear
                  placeholder="Select engine type"
                />
              </Form.Item>
            </Col>

            <Col span={24} md={8}>
              <Form.Item
                label="Location"
                name="locationId"
                rules={[{ required: true }]}
              >
                <Select
                  options={locationOptions.map((opt) => {
                    return {
                      label: opt.label,
                      value: opt.value,
                    };
                  })}
                  showSearch
                  allowClear
                  placeholder="Select location"
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true }]}
          >
            <Input.TextArea rows={4} placeholder="Enter car description" />
          </Form.Item>
          <Form.Item
            label="Image URL"
            name="image"
            rules={[{ required: true }]}
          >
            <Input placeholder="Enter image URL" />
          </Form.Item>
        </Form>
      </Create>
    </>
  );
}
