"use client";

import PageBreadCrumbs from "../../../../../components/page-breadcrumb/page-breadcrumb.component";
import { Show, TextField } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Descriptions, Image, Typography } from "antd";

const { Title } = Typography;

export default function CarShow() {
  const { query } = useShow({});
  const { data, isLoading } = query;

  const record = data?.data;

  return (
    <>
      <PageBreadCrumbs items={["Roles", "Lists", "Create"]} />
      <Show isLoading={isLoading}>
        <Descriptions bordered={false} column={3}>
          <Descriptions.Item label="ID">{record?.id}</Descriptions.Item>
          <Descriptions.Item label="Car Number">
            {record?.carNum}
          </Descriptions.Item>
          <Descriptions.Item label="Car Model">
            {record?.carModelId}
          </Descriptions.Item>
          <Descriptions.Item label="Year">{record?.year}</Descriptions.Item>
          <Descriptions.Item label="Color">{record?.color}</Descriptions.Item>
          <Descriptions.Item label="Seats">
            {record?.numOfSeats}
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            {record?.availabilityStatus}
          </Descriptions.Item>
          <Descriptions.Item label="Daily Rate">
            ${record?.dailyRate}
          </Descriptions.Item>
          <Descriptions.Item label="Sales Price">
            ${record?.salesPrice}
          </Descriptions.Item>
          <Descriptions.Item label="Location">
            {record?.locationId}
          </Descriptions.Item>
          <Descriptions.Item label="Description">
            {record?.description}
          </Descriptions.Item>
          <Descriptions.Item label="Image">
            <Image
              src={record?.image}
              alt={record?.carNum}
              style={{ width: 200 }}
            />
          </Descriptions.Item>
        </Descriptions>
      </Show>
    </>
  );
}
