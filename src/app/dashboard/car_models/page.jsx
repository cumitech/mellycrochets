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

export default function CarModelList() {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  const carMakeIds =
    tableProps?.dataSource?.map((item) => item.carMakeId) || [];
  const { data: carMakesData, isLoading: isCarMakesLoading } = useMany({
    resource: "car_makes",
    ids: carMakeIds,
  });

  // Map car make IDs to names
  const carMakeMap = carMakesData?.data?.reduce((acc, carMake) => {
    acc[carMake.id] = carMake.name;
    return acc;
  }, {});

  return (
    <>
      <PageBreadCrumbs items={["Models", "Lists", "Create"]} />
      <List>
        <Table {...tableProps} rowKey="id">
          <Table.Column dataIndex="id" title={"ID"} />
          <Table.Column dataIndex="modelName" title="Model Name" />
          <Table.Column
            dataIndex="carMakeId"
            title="Car Make ID"
            render={(carMakeId) =>
              isCarMakesLoading
                ? "Loading..."
                : carMakeMap?.[carMakeId] ?? "Unknown"
            }
          />
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
