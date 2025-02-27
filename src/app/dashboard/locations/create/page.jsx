"use client";

import PageBreadCrumbs from "../../../../components/page-breadcrumb/page-breadcrumb.component";
import { Create, useForm } from "@refinedev/antd";
import { useSelect } from "@refinedev/core";
import { Form, Input, Select } from "antd";

export default function CategoryCreate() {
  const { formProps, saveButtonProps } = useForm({});
  const { options } = useSelect({
    resource: "countries",
    optionLabel: "name",
    optionValue: "id",
  });

  return (
    <>
      <PageBreadCrumbs items={["Locations", "Lists", "Create"]} />
      <Create saveButtonProps={saveButtonProps}>
        <Form {...formProps} layout="vertical">
          {/* Name Field */}
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter the Name" }]}
          >
            <Input placeholder="Enter Name" />
          </Form.Item>
          <Form.Item
            label="country"
            name="countryId"
            rules={[{ required: true, message: "Please select a country" }]}
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
