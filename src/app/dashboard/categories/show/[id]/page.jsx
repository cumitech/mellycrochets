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
      <PageBreadCrumbs items={["Categories", "Lists", "Show"]} />
      <Show isLoading={isLoading}>
        <Descriptions bordered={false}>
          <Descriptions.Item label="Name">{record?.name}</Descriptions.Item>
        </Descriptions>
      </Show>
    </>
  );
}
