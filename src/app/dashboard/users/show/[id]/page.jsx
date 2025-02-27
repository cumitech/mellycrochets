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
          <Descriptions.Item label="Email">{record?.email}</Descriptions.Item>
          <Descriptions.Item label="Username">
            {record?.username}
          </Descriptions.Item>
          <Descriptions.Item label="Phone">{record?.phone}</Descriptions.Item>
          <Descriptions.Item label="Role">
            {record?.role?.name}
          </Descriptions.Item>
          <Descriptions.Item label="Verified">
            {record?.verified ? "Yes" : "No"}
          </Descriptions.Item>
          <Descriptions.Item label="Image">
            <img src={record?.image} alt="User" width={100} />
          </Descriptions.Item>
        </Descriptions>
      </Show>
    </>
  );
}
