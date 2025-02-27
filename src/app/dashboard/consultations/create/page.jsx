"use client";

import PageBreadCrumbs from "../../../../components/page-breadcrumb/page-breadcrumb.component";
import { Create, useForm } from "@refinedev/antd";
import { Form, Input, Select } from "antd";

export default function ConsultationCreate() {
  const { formProps, saveButtonProps } = useForm({});
  return (
    <>
      <PageBreadCrumbs items={["Roles", "Lists", "Create"]} />
      <Create saveButtonProps={saveButtonProps}>
        <Form {...formProps} layout="vertical">
          {/* Name Field */}
          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true }]}
          >
            <Input placeholder="Enter Username" />
          </Form.Item>
          <Form.Item
            name="telephone"
            label="Telephone"
            rules={[{ required: true }]}
          >
            <Input placeholder="Enter Telephone" />
          </Form.Item>
          <Form.Item
            name="serviceType"
            label="Service Type"
            rules={[{ required: true }]}
          >
            <Select
              options={[
                { label: "Buy", value: "buy" },
                { label: "Rent", value: "rent" },
                { label: "Insurance", value: "insurance" },
                { label: "General", value: "general" },
              ]}
            />
          </Form.Item>
          <Form.Item
            name="message"
            label="Message"
            rules={[{ required: true }]}
          >
            <Input.TextArea rows={4} placeholder="Enter message" />
          </Form.Item>
          <Form.Item name="status" label="Status" rules={[{ required: true }]}>
            <Select
              options={[
                { label: "Pending", value: "pending" },
                { label: "Approved", value: "approved" },
                { label: "Completed", value: "completed" },
                { label: "Canceled", value: "canceled" },
              ]}
              placeholder="Select status"
            />
          </Form.Item>
        </Form>
      </Create>
    </>
  );
}
