"use client";

import PageBreadCrumbs from "../../../components/page-breadcrumb/page-breadcrumb.component";
import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { useCan, useGetIdentity } from "@refinedev/core";
import { Space, Table } from "antd";

export default function CategoryList() {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });
  const { data: user } = useGetIdentity({});

  const { data: canAccess } = useCan({
    resource: "roles",
    action: "list",
    params: { user },
  });

  if (!canAccess?.can) {
    return <p>Access Denied</p>;
  }

  return (
    <>
      <PageBreadCrumbs items={["Roles", "Lists", "Create"]} />
      <List>
        <Table {...tableProps} rowKey="id">
          <Table.Column dataIndex="id" title={"ID"} />
          <Table.Column dataIndex="name" title="Name" />
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
