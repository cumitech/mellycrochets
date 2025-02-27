"use client";

import PageBreadCrumbs from "../../../../../components/page-breadcrumb/page-breadcrumb.component";
import { Show, TextField } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Descriptions, Typography } from "antd";

const { Title } = Typography;

export default function CarTransmissionShow() {
  const { query } = useShow({});
  const { data, isLoading } = query;

  const record = data?.data;

  return (
    <>
      <PageBreadCrumbs items={["Car Transmissions", "Lists", "Create"]} />
      <Show isLoading={isLoading}>
        <Descriptions bordered={false}>
          <Descriptions.Item label="ID">{record?.id}</Descriptions.Item>
          <Descriptions.Item label="Name">{record?.name}</Descriptions.Item>
        </Descriptions>
      </Show>
    </>
  );
}
