"use client";

import PageBreadCrumbs from "../../../../components/page-breadcrumb/page-breadcrumb.component";
import { Create, useForm } from "@refinedev/antd";
import { useSelect } from "@refinedev/core";
import { Form, Input, Select } from "antd";

export default function CarEngineCreate() {
  const { formProps, saveButtonProps } = useForm({});

  const { options } = useSelect({
    resource: "fuel_types", // Assuming the backend exposes a "car-makes" API
    optionLabel: "name", // Adjust based on your API response
    optionValue: "id",
  });

  return (
    <>
      <PageBreadCrumbs items={["Engines", "Lists", "Create"]} />
      <Create saveButtonProps={saveButtonProps}>
        <Form {...formProps} layout="vertical">
          {/* Name Field */}
          <Form.Item label="Name" name="name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Horsepower" name="horsepower">
            <Input />
          </Form.Item>
          <Form.Item
            label="Fuel Type"
            name="fuelTypeId"
            rules={[{ required: true }]}
          >
            <Select
              options={options.map((opt) => {
                return {
                  label: opt.label,
                  value: opt.value,
                };
              })}
              showSearch
              allowClear
              placeholder="Select Fuel Type"
            />
          </Form.Item>
        </Form>
      </Create>
    </>
  );
}
