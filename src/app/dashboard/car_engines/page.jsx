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

export default function CarEngineList() {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  const fuelTypeIds =
    tableProps?.dataSource?.map((item) => item.fuelTypeId) || [];
  const { data: fuelTypesData, isLoading: isFuelTypesLoading } = useMany({
    resource: "fuel_types",
    ids: fuelTypeIds,
  });

  // Map car make IDs to names
  const fuelTypeMap = fuelTypesData?.data?.reduce((acc, fuelType) => {
    acc[fuelType.id] = fuelType.name;
    return acc;
  }, {});

  return (
    <>
      <PageBreadCrumbs items={["Engines", "Lists", "Create"]} />
      <List>
        <Table {...tableProps} rowKey="id">
          <Table.Column dataIndex="id" title={"ID"} />
          <Table.Column title="Name" dataIndex="name" key="name" />
          <Table.Column
            title="Horsepower"
            dataIndex="horsepower"
            key="horsepower"
          />
          <Table.Column
            dataIndex="fuelTypeId"
            title="Fuel Type ID"
            render={(fuelTypeId) =>
              isFuelTypesLoading
                ? "Loading..."
                : fuelTypeMap?.[fuelTypeId] ?? "Unknown"
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
