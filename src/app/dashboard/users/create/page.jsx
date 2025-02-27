"use client";

import PageBreadCrumbs from "../../../../components/page-breadcrumb/page-breadcrumb.component";
import { Create, useForm } from "@refinedev/antd";
import { Form, Input, Select } from "antd";

export default function CategoryCreate() {
  const { formProps, saveButtonProps } = useForm({});
  return (
    <>
      <PageBreadCrumbs items={["Roles", "Lists", "Create"]} />
      <Create saveButtonProps={saveButtonProps}>
        <Form {...formProps} layout="vertical">
          <Form.Item label="Email" name="email" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Phone" name="phone">
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item label="Role" name="role">
            <Select {...roleSelectProps} />
          </Form.Item>
        </Form>
      </Create>
    </>
  );
}
