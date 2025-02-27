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

  const countryIds =
    tableProps?.dataSource?.map((item) => item.countryId) || [];
  const { data: countrysData, isLoading: isCountrysLoading } = useMany({
    resource: "countries",
    ids: countryIds,
  });

  // Map car make IDs to names
  const countryMap = countrysData?.data?.reduce((acc, country) => {
    acc[country.id] = country.name;
    return acc;
  }, {});
  return (
    <>
      <PageBreadCrumbs items={["Locations", "Lists", "Create"]} />
      <List>
        <Table {...tableProps} rowKey="id">
          <Table.Column dataIndex="id" title={"ID"} />
          <Table.Column dataIndex="name" title="Name" />
          <Table.Column
            dataIndex="countryId"
            title="Country"
            render={(countryId) =>
              isCountrysLoading
                ? "Loading..."
                : countryMap?.[countryId] ?? "Unknown"
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
