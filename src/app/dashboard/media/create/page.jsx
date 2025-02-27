"use client";

import { useSelect } from "@refinedev/core";
import PageBreadCrumbs from "../../../../components/page-breadcrumb/page-breadcrumb.component";
import { API_URL } from "../../../../constants/api-url";
import { Create, getValueFromEvent, useForm } from "@refinedev/antd";
import { Form, Input, Select, Upload } from "antd";

export default function MediaCreate() {
  const { formProps, saveButtonProps } = useForm({});
  const { options } = useSelect({
    resource: "cars",
    optionLabel: "carNum",
    optionValue: "id",
    debounce: 200,
  });

  return (
    <>
      <PageBreadCrumbs items={["Medias", "Lists", "Create"]} />
      <Create saveButtonProps={saveButtonProps}>
        <Form {...formProps} layout="vertical">
          <Form.Item
            label={"Title"}
            name={["title"]}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item
            name="imageUrl"
            valuePropName="fileList"
            getValueFromEvent={getValueFromEvent}
            noStyle
          >
            <Upload.Dragger
              name="file"
              action={`${API_URL}/api/uploads`}
              listType="picture"
              maxCount={1}
              multiple={false}
            >
              <p className="ant-upload-text">Drag & drop a file in this area</p>
            </Upload.Dragger>
          </Form.Item>

          {/* car (Foreign Key) */}
          <Form.Item
            label="Car"
            name="carId"
            rules={[{ required: true, message: "Please select a car" }]}
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
              placeholder="Select car"
            />
          </Form.Item>
        </Form>
      </Create>
    </>
  );
}
