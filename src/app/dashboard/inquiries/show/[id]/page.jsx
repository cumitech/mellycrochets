"use client";

import PageBreadCrumbs from "../../../../../components/page-breadcrumb/page-breadcrumb.component";
import { Show } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Descriptions } from "antd";

export default function CategoryShow() {
  const { query } = useShow({});
  const { data, isLoading } = query;

  const record = data?.data;

  return (
    <>
      <PageBreadCrumbs items={["Roles", "Lists", "Create"]} />
      <Show isLoading={isLoading}>
        <Descriptions bordered={false}>
          <Descriptions.Item label="ID">{record?.id}</Descriptions.Item>
          <Descriptions.Item label="Username">
            {record?.username}
          </Descriptions.Item>
          <Descriptions.Item label="Telephone">
            {record?.telephone}
          </Descriptions.Item>
          <Descriptions.Item label="Car ID">{record?.carId}</Descriptions.Item>
          <Descriptions.Item label="Message">
            {record?.message}
          </Descriptions.Item>
          <Descriptions.Item label="Inquiry Type">
            {record?.inquiryType}
          </Descriptions.Item>
        </Descriptions>
      </Show>
    </>
  );
}
