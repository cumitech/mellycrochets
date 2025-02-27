"use client";

import { API_URL_UPLOADS_MEDIA } from "../../../constants/api-url";
import PageBreadCrumbs from "../../../components/page-breadcrumb/page-breadcrumb.component";
import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { Image, Space, Table } from "antd";

export default function CountryList() {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  return (
    <>
      <PageBreadCrumbs items={["Countries", "Lists", "Create"]} />
      <List>
        <Table {...tableProps} rowKey="id">
          <Table.Column dataIndex="id" title={"ID"} />
          <Table.Column dataIndex="name" title="Name" />
          <Table.Column
            dataIndex="imageUrl"
            title={"Image"}
            render={(value, record) => (
              <Image
                src={`${API_URL_UPLOADS_MEDIA}/${record.imageUrl}`}
                alt={record?.title}
                height={30}
                width={30}
              />
            )}
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
