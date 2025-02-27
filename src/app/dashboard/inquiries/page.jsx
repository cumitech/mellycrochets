"use client";

import PageBreadCrumbs from "../../../components/page-breadcrumb/page-breadcrumb.component";
import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { useMany } from "@refinedev/core";
import { Space, Table } from "antd";

export default function CategoryList() {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  const carIds = tableProps?.dataSource?.map((item) => item.carId) || [];
  const { data: carsData, isLoading: isCarsLoading } = useMany({
    resource: "cars",
    ids: carIds,
  });

  // Map car make IDs to names
  const carMap = carsData?.data?.reduce((acc, car) => {
    acc[car.id] = car.carNum;
    return acc;
  }, {});

  return (
    <>
      <PageBreadCrumbs items={["Roles", "Lists", "Create"]} />
      <List>
        <Table {...tableProps} rowKey="id">
          <Table.Column dataIndex="id" title={"ID"} />
          <Table.Column title="Username" dataIndex="username" />
          <Table.Column title="Telephone" dataIndex="telephone" />
          <Table.Column
            title="Car Number"
            dataIndex="carId"
            render={(carId) => {
              return isCarsLoading ? "Loading..." : carMap?.[carId] ?? "Unknown"
            }
            }
          />
          <Table.Column title="Message" dataIndex="message" />
          <Table.Column title="Inquiry Type" dataIndex="inquiry_type" />
          <Table.Column
            title={"Actions"}
            dataIndex="actions"
            render={(_, record) => (
              <Space>
                <EditButton hideText size="small" recordItemId={record.id} />
                <ShowButton hideText size="small" recordItemId={record.id} />
                <DeleteButton hideText size="small" recordItemId={record.id} />
              </Space>
            )}
          />
        </Table>
      </List>
    </>
  );
}
