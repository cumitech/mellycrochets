"use client";

import PageBreadCrumbs from "../../../../../components/page-breadcrumb/page-breadcrumb.component";
import { Show } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Descriptions, Tag } from "antd";

export default function ConsultationShow() {
  const { query } = useShow({});
  const { data, isLoading } = query;

  const record = data?.data;

  return (
    <>
      <PageBreadCrumbs items={["Roles", "Lists", "Create"]} />
      <Show isLoading={isLoading}>
        <Descriptions bordered={false} column={2}>
          <Descriptions.Item label="ID">{record?.id}</Descriptions.Item>
          <Descriptions.Item label="User ID">
            {record?.userId}
          </Descriptions.Item>
          <Descriptions.Item label="Service Type">
            {record?.serviceType}
          </Descriptions.Item>
          <Descriptions.Item label="Message">
            {record?.message}
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            <Tag color={record?.status === "pending" ? "orange" : "green"}>
              {record?.status.toUpperCase()}
            </Tag>
          </Descriptions.Item>
        </Descriptions>
      </Show>
    </>
  );
}
