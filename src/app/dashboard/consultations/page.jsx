"use client";

import PageBreadCrumbs from "../../../components/page-breadcrumb/page-breadcrumb.component";
import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
  TagField
} from "@refinedev/antd";
import { Space, Table } from "antd";

export default function ConsultationList() {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  return (
    <>
      <PageBreadCrumbs items={["Roles", "Lists", "Create"]} />
      <List>
        <Table {...tableProps} rowKey="id">
          <Table.Column dataIndex="id" title={"ID"} />
          <Table.Column title="User ID" dataIndex="userId" />
          <Table.Column title="Service Type" dataIndex="serviceType" />
          <Table.Column
            title="Status"
            dataIndex="status"
            render={(status) => <TagField value={status} />}
            filters={[
              { text: "Pending", value: "pending" },
              { text: "Approved", value: "approved" },
              { text: "Completed", value: "completed" },
              { text: "Canceled", value: "canceled" },
            ]}
          />
          <Table.Column title="Message" dataIndex="message" ellipsis />
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
