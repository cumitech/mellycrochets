"use client";

import PageBreadCrumbs from "../../../../../components/page-breadcrumb/page-breadcrumb.component";
import { Show } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Descriptions } from "antd";

export default function CarEngineShow() {
  const { query } = useShow({});
  const { data, isLoading } = query;

  const record = data?.data;

  return (
    <>
      <PageBreadCrumbs items={["Engines", "Lists", "Create"]} />
      <Show isLoading={isLoading}>
        <Descriptions bordered={false} column={2}>
          <Descriptions.Item label="ID">{record?.id}</Descriptions.Item>
          <Descriptions.Item label="Name">{record?.name}</Descriptions.Item>
          <Descriptions.Item label="Horse Power">
            {record?.horsepower}
          </Descriptions.Item>
          <Descriptions.Item label="Fuel Type">
            {record?.fuelTypeId}
          </Descriptions.Item>
        </Descriptions>
      </Show>
    </>
  );
}
