"use client";

import PageBreadCrumbs from "../../../../../components/page-breadcrumb/page-breadcrumb.component";
import { Edit, useForm } from "@refinedev/antd";
import { useSelect } from "@refinedev/core";
import { Form, Input, Select } from "antd";

export default function CountryEdit() {
  const { formProps, saveButtonProps } = useForm({});
  const { query: mediaData, selectProps: mediaSelectProps } = useSelect({
    resource: "media",
    optionLabel: "title", // Adjust based on your API response
    optionValue: "imageUrl",
  });

  return (
    <>
      <PageBreadCrumbs items={["Countries", "Lists", "Create"]} />
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
            name={"imageUrl"}
            label="Image"
            required={true}
            rules={[
              { required: true, message: "This field is a required field" },
            ]}
            style={{ marginBottom: 10 }}
          >
            <Select
              {...mediaSelectProps}
              showSearch
              options={
                media
                  ? media.data.map((d) => {
                      return {
                        label: d.title,
                        value: d.imageUrl,
                        emoji: (
                          <Image
                            src={`${API_URL_UPLOADS_MEDIA}/${d.imageUrl}`}
                            alt={d?.title}
                            height={50}
                            width={60}
                          />
                        ),
                        desc: (
                          <Typography.Title level={5}>
                            {d.title}
                          </Typography.Title>
                        ),
                      };
                    })
                  : []
              }
              optionRender={(option) => (
                <Space>
                  <span role="img" aria-label={option.data.label}>
                    {option.data.emoji}
                  </span>
                  {option.data.desc}
                </Space>
              )}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              placeholder="Select image"
              size="large"
            />
          </Form.Item>
        </Form>
      </Edit>
    </>
  );
}
