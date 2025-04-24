"use client";
import { Table, Card, Tag, Button, Row, Col } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { format } from "../../lib/format";
import { useGetIdentity, useList } from "@refinedev/core";
import { orderAPI } from "../../store/api/order_api";
import { skipToken } from "@reduxjs/toolkit/query";
import TableSkeleton from "../../components/order/order.skeleton";
import CrochetTypeHero from "../../components/shared/crochet-type-hero.component";
import { orderItemAPI } from "../../store/api/order_item_api";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";

const InvoiceDownloader = dynamic(() => import("../../lib/invoice"), {
  ssr: false,
});

const statusColors = {
  Delivered: "green",
  Processing: "blue",
  Cancelled: "red",
};

const IndexPage = () => {
  const { data: user } = useGetIdentity({});
  const searchParams = useSearchParams();

  const telephone = searchParams.get("telephone");

  const {
    data: crochetList,
    isLoading: crochetLoading,
    isFetching: crochetFetching,
  } = useList({ resource: "crochets" });

  const {
    data: orders,
    isLoading: ordersLoading,
    isFetching,
  } = orderAPI.useFetchAllOrdersByUserQuery(
    user || telephone
      ? { page: 1, userId: user ? user.id : telephone }
      : skipToken
  );

  const {
    data: orderItems,
    isLoading: orderItemsLoading,
    isFetching: orderItemsFetching,
  } = orderItemAPI.useFetchAllOrderItemsQuery(1);

  if (
    ordersLoading ||
    orderItemsLoading ||
    orderItemsFetching ||
    isFetching ||
    crochetLoading ||
    crochetFetching
  ) {
    return <TableSkeleton />;
  }

  const handleRowClick = (record) => {
    return {
      onClick: (e) => {
        // Prevent row click from propagating when clicking on buttons
        if (e.target.closest("button, a")) {
          e.stopPropagation();
        }
      },
    };
  };

  const columns = [
    {
      title: "SN",
      key: "sNo",
      render: (_, __, index) => format.number(index + 1),
      align: "right",
    },
    {
      title: "Order No",
      dataIndex: "orderNo",
      key: "orderNo",
      align: "right",
    },
    {
      title: "Tel",
      dataIndex: "telephone",
      key: "telephone",
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
      render: (_, record, index) => {
        const getCrochetName = (crochetId) =>
          crochetList?.data.find((c) => c.id === crochetId);

        const items =
          orderItems && orderItems.length > 0
            ? orderItems
                .map((item) => {
                  return {
                    ...item,
                    crochetName: getCrochetName(item.crochetId).name,
                  };
                })
                .filter((item) => item.orderId === record.id)
            : [];
        return (
          <div
            className="flex gap-2"
            key={record.id + index}
            onClick={(e) => e.stopPropagation()} // Add this
          >
            <Button
              icon={<EyeOutlined />}
              href={`/orders/${record.id}?telephone=${record.telephone}`}
              type="link"
              onClick={(e) => e.stopPropagation()} // And this
            >
              View
            </Button>

            <InvoiceDownloader
              order={record}
              items={items}
              onClick={(e) => e.stopPropagation()} // And this if needed
            />
          </div>
        );
      },
    },
  ];

  return (
    <>
      <CrochetTypeHero
        title={"My Orders"}
        description={"View and manage your orders here."}
        breadcrumbs={[{ title: "Orders", href: "#" }]}
      />
      <Row justify="center" align="middle">
        <Col xs={24} md={18} className="min-h-screen bg-gray-50 my-20 mx-4">
          <Card className="shadow-md">
            <Table
              columns={columns}
              dataSource={orders}
              pagination={{ pageSize: 5 }}
              className="mt-4"
              rowKey="id"
              scroll={{ x: 800 }}
              onRow={handleRowClick} // Add this line
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default IndexPage;
