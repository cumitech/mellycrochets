"use client";

import PageBreadCrumbs from "../../../../components/page-breadcrumb/page-breadcrumb.component";
import { Create, useForm } from "@refinedev/antd";
import { useSelect } from "@refinedev/core";
import { Form, Input, Select } from "antd";

export default function CarModelCreate() {
  const { formProps, saveButtonProps } = useForm({});
  const { options } = useSelect({
    resource: "car_makes",
    optionLabel: "name",
    optionValue: "id",
    debounce: 200,
  });

  return (
    <>
      <PageBreadCrumbs items={["Car Models", "Lists", "Create"]} />
      <Create saveButtonProps={saveButtonProps}>
        <Form {...formProps} layout="vertical">
          {/* Model Name Field */}
          <Form.Item
            label="Model Name"
            name="modelName"
            rules={[{ required: true, message: "Please enter the Model Name" }]}
          >
            <Input placeholder="Enter Model Name" />
          </Form.Item>

          {/* Car Make (Foreign Key) */}
          <Form.Item
            label="Car Make"
            name="carMakeId"
            rules={[{ required: true, message: "Please select a Car Make" }]}
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
              placeholder="Select Car Make"
            />
          </Form.Item>
        </Form>
      </Create>
    </>
  );
}
