"use client";
import { Table, Card, Tag, Button, Typography, Row, Col } from "antd";
import { EyeOutlined, FilePdfOutlined } from "@ant-design/icons";
import { format } from "../../lib/format";
import { useGetIdentity } from "@refinedev/core";
import { orderAPI } from "../../store/api/order_api";
import { skipToken } from "@reduxjs/toolkit/query";
import TableSkeleton from "../../components/order/order.skeleton";

const { Title } = Typography;

const statusColors = {
  Delivered: "green",
  Processing: "blue",
  Cancelled: "red",
};

const columns = [
  {
    title: "SN",
    key: "sNo",
    render: (_, __, index) => format.number(index + 1),
    align: "right",
  },
  {
    title: "Tel",
    dataIndex: "telephone",
    key: "telephone",
    align: "right",
  },
  {
    title: "Date",
    dataIndex: "createdAt",
    key: "createdAt",
    render: (date) => format.date(date),
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => <Tag color={statusColors[status]}>{status}</Tag>,
  },
  {
    title: "Qtty",
    dataIndex: "totalQtty",
    key: "totalQtty",
    align: "right",
    render: (quantity) => format.number(quantity),
  },
  {
    title: "Total",
    dataIndex: "totalAmount",
    key: "totalAmount",
    align: "right",
    render: (quantity) => format.number(quantity),
  },
  {
    title: "Actions",
    key: "actions",
    render: (_, record) => (
      <div className="flex gap-2">
        <Button icon={<EyeOutlined />} type="link">
          View
        </Button>
        <Button icon={<FilePdfOutlined />} type="link">
          Invoice
        </Button>
      </div>
    ),
  },
];

const UserOrdersPage = () => {
  const { data: user, isLoading: identityLoading } = useGetIdentity({});

  const {
    data: orders,
    isLoading: ordersLoading,
    isFetching,
  } = orderAPI.useFetchAllOrdersByUserQuery(
    user ? { page: 1, userId: user.id } : skipToken // <-- Important
  );

  if (identityLoading || ordersLoading || isFetching || !user) {
    return <TableSkeleton />;
  }

  return (
    <Row justify="center" align="middle">
      <Col xs={24} md={16} className="min-h-screen bg-gray-50 my-20 mx-4">
        <Card className="shadow-md">
          <Title level={3}>My Orders</Title>
          <Table
            columns={columns}
            dataSource={orders}
            pagination={{ pageSize: 5 }}
            className="mt-4"
            rowKey="id"
            scroll={{ x: 800 }} // Enable horizontal scrolling
          />
        </Card>
      </Col>
    </Row>
  );
};

export default UserOrdersPage;
