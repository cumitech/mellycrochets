"use client";

import PageBreadCrumbs from "../../../../../components/page-breadcrumb/page-breadcrumb.component";
import { Show } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Descriptions, Image } from "antd";

export default function UserShow() {
  const { query } = useShow({});
  const { data, isLoading } = query;

  const record = data?.data;

  return (
    <>
      <PageBreadCrumbs items={["Users", "Lists", "Show"]} />
      <Show isLoading={isLoading}>
        <Descriptions bordered={false}>
          <Descriptions.Item label="Email">{record?.email}</Descriptions.Item>
          <Descriptions.Item label="Username">
            {record?.username}
          </Descriptions.Item>
          <Descriptions.Item label="Provider">{record?.provider}</Descriptions.Item>
          <Descriptions.Item label="Role">
            {record?.role}
          </Descriptions.Item>
          <Descriptions.Item label="Verified">
            {record?.verified ? "Yes" : "No"}
          </Descriptions.Item>
          <Descriptions.Item label="Image">
            <Image src={record?.image} alt="User" width={100} />
          </Descriptions.Item>
        </Descriptions>
      </Show>
    </>
  );
}
