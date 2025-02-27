"use client";

import PageBreadCrumbs from "../../../../../components/page-breadcrumb/page-breadcrumb.component";
import { Edit, useForm } from "@refinedev/antd";
import { useSelect } from "@refinedev/core";
import { Form, Input, Select } from "antd";

export default function CategoryEdit() {
  const { formProps, saveButtonProps } = useForm({});
  const { options } = useSelect({
    resource: "countries",
    optionLabel: "name",
    optionValue: "id",
  });

  return (
    <>
      <PageBreadCrumbs items={["Locations", "Lists", "Create"]} />
      <Edit saveButtonProps={saveButtonProps}>
        <Form {...formProps} layout="vertical">
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter the Name" }]}
          >
            <Input placeholder="Enter Name" />
          </Form.Item>
          <Form.Item
            label="Country"
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
      </Edit>
    </>
  );
}
