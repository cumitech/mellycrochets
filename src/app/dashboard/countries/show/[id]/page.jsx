"use client";

import PageBreadCrumbs from "../../../../../components/page-breadcrumb/page-breadcrumb.component";
import { API_URL_UPLOADS_MEDIA } from "../../../../../constants/api-url";
import { Show, ImageField } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Descriptions } from "antd";

export default function CountryShow() {
  const { query } = useShow({});
  const { data, isLoading } = query;

  const record = data?.data;

  return (
    <>
      <PageBreadCrumbs items={["Countries", "Lists", "Create"]} />
      <Show isLoading={isLoading}>
        <Descriptions bordered={false}>
          <Descriptions.Item label="ID">{record?.id}</Descriptions.Item>
          <Descriptions.Item label="Name">{record?.name}</Descriptions.Item>
          <Descriptions.Item label="Image">
            <ImageField
              imageTitle={record?.title}
              value={`${API_URL_UPLOADS_MEDIA}/${record?.imageUrl}`}
            />
          </Descriptions.Item>
        </Descriptions>
      </Show>
    </>
  );
}
