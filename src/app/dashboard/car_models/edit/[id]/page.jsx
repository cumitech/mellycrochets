"use client";

import PageBreadCrumbs from "../../../../../components/page-breadcrumb/page-breadcrumb.component";
import { Edit, useForm } from "@refinedev/antd";
import { useSelect } from "@refinedev/core";
import { Form, Input, Select } from "antd";

export default function CarModelEdit() {
  const { formProps, saveButtonProps } = useForm({});
  const { options } = useSelect({
    resource: "car_makes", // Assuming the backend exposes a "car-makes" API
    optionLabel: "name", // Adjust based on your API response
    optionValue: "id",
    debounce: 200,
  });
  return (
    <>
      <PageBreadCrumbs items={["Car Models", "Lists", "Create"]} />
      <Edit saveButtonProps={saveButtonProps}>
        <Form {...formProps} layout="vertical">
          <Form.Item
            label="Model Name"
            name="modelName"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Car Make"
            name="carMakeId"
            rules={[{ required: true }]}
          >
            <Select
              options={options.map((opt) => {
                return {
                  label: opt.label,
                  value: opt.value,
                };
              })}
              placeholder="Select Car Make"
              showSearch
              allowClear
            />
          </Form.Item>
        </Form>
      </Edit>
    </>
  );
}
