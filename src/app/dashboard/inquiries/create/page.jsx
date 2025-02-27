"use client";

import PageBreadCrumbs from "../../../../components/page-breadcrumb/page-breadcrumb.component";
import { Create, useForm } from "@refinedev/antd";
import { useSelect } from "@refinedev/core";
import { Form, Input, Radio, Select } from "antd";

export default function CategoryCreate() {
  const { formProps, saveButtonProps } = useForm({});

  const { options: carOptions } = useSelect({
    resource: "cars",
    optionLabel: "carNum",
    optionValue: "id",
  });

  return (
    <>
      <PageBreadCrumbs items={["Roles", "Lists", "Create"]} />
      <Create saveButtonProps={saveButtonProps}>
        <Form {...formProps} layout="vertical">
          {/* Name Field */}
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true }]}
          >
            <Input placeholder="Enter Username" />
          </Form.Item>

          <Form.Item
            label="Telephone"
            name="telephone"
            rules={[{ required: true }]}
          >
            <Input placeholder="Enter Telephone" />
          </Form.Item>

          <Form.Item label="Car" name="carId" rules={[{ required: true }]}>
            <Select
              options={carOptions.map((opt) => {
                return {
                  label: opt.label,
                  value: opt.value,
                };
              })}
              showSearch
              allowClear
              placeholder="Select Car"
            />
          </Form.Item>

          <Form.Item
            label="Message"
            name="message"
            rules={[{ required: true }]}
          >
            <Input.TextArea rows={4} placeholder="Enter message" />
          </Form.Item>

          <Form.Item
            label="Inquiry Type"
            name="inquiry_type"
            rules={[{ required: true }]}
          >
            <Radio.Group>
              <Radio value="rent">Rent</Radio>
              <Radio value="buy">Buy</Radio>
            </Radio.Group>
          </Form.Item>
        </Form>
      </Create>
    </>
  );
}
