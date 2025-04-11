"use client";
import { usePaymentMethod } from "../../hooks/payment-method";
import { useCart } from "../../hooks/cart.hook";
import { DeleteOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Col,
  Drawer,
  Form,
  Image,
  Input,
  InputNumber,
  Radio,
  Row,
  Space,
  Table,
  Typography,
} from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { format } from "../../lib/format";
import { API_URL_UPLOADS_CROCHETS } from "../../constants/api-url";
import { cartItemAPI } from "../../store/api/cart_item_api";
import { getCartSummary } from "../../components/shared/cart-summary-table.component";
import { useNotification } from "@refinedev/core";
import { CURRENCY } from "../../constants/constant";

const CheckoutCartBtn = ({ onFinish, cartItems }) => {
  const [checkoutDrawerOpen, setCheckoutDrawerOpen] = useState(false);
  const [method, setMethod] = useState("momo");
  const { setPaymentMethod } = usePaymentMethod();
  const navigator = useRouter();

  const onChange = (event) => {
    event.preventDefault();
    setMethod(event.target.value);
    setPaymentMethod(event.target.value);
  };

  const total = cartItems.reduce((prev, curr) => {
    return prev + curr.total;
  }, 0);

  const totalQtty = cartItems.reduce((prev, curr) => {
    return prev + curr.quantity;
  }, 0);

  const onConfirmOrder = async (data) => {
    console.log(data);
  };

  return (
    <>
      <Button
        type="primary"
        className="w-inline-block"
        size="large"
        style={{ borderRadius: 50 }}
        onClick={() => {
          setCheckoutDrawerOpen(true);
        }}
      >
        Checkout your cart
      </Button>
      <Drawer
        open={checkoutDrawerOpen}
        onClose={() => setCheckoutDrawerOpen(false)}
        title="Checkout Your Cart"
        styles={{ wrapper: { width: "500px" } }}
      >
        <Space style={{ marginBottom: 20 }}>
          <Radio.Group size="large" onChange={onChange}>
            <Radio value="COD"> Cash On Delivery 💸 </Radio>
            <Radio value="MOMO"> Mobile Money Payment 💸 </Radio>
          </Radio.Group>
        </Space>

        <Form onFinish={onConfirmOrder} layout="vertical">
          <Form.Item
            label="Full name"
            name="username"
            rules={[{ required: true, message: "Please enter your full name" }]}
            style={{ marginBottom: 10 }}
          >
            <Input size={"large"} placeholder="Enter your full name..." />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter your email" }]}
            style={{ marginBottom: 10 }}
          >
            <Input size={"large"} placeholder="Enter your email..." />
          </Form.Item>
          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: "Please enter your address" }]}
          >
            <Input size={"large"} placeholder="Enter your address..." />
          </Form.Item>

          <Form.Item
            label="Telephone"
            name="telephone"
            rules={[{ required: true, message: "Please enter your telephone" }]}
          >
            <Input size={"large"} placeholder="Enter your telephone..." />
          </Form.Item>

          <Space align="end" style={{ marginTop: 20 }}>
            <Button type="primary" htmlType="submit">
              Confirm Order
            </Button>
          </Space>
        </Form>
      </Drawer>
    </>
  );
};

export default function CartPage() {
  const navigator = useRouter();
  const { removeCrochet } = useCart();
  const { open } = useNotification();

  const {
    data: cartItems,
    isLoading,
    isFetching,
  } = cartItemAPI.useFetchAllCartItemsQuery(1);

  if (isLoading || isFetching) {
    return (
      <div
        style={{
          minHeight: "65vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p className="text-lg text-center">Details loading...</p>
      </div>
    );
  }

  const handleCheckoutSubmit = () => {
    message.success("Your order has been placed successfully.");
    navigator.push("/thank-you");
  };

  const handleRemoveCartItem = async (item) => {
    const feedback = await removeCrochet(item.id);
    console.log("feedback: ", feedback);
    if (feedback) {
      open({
        type: "success",
        message: `${item.crochet.name} has been removed from cart`,
        key: "notification-key-open",
        placement: "bottomRight",
      });
      window.location.reload();
    } else {
      open({
        type: "error",
        message: `${item.crochet.name} was not removed`,
        key: "notification-key-open",
        placement: "bottomRight",
      });
    }
  };

  return (
    <>
      <Row
        gutter={[16, 18]}
        align={"middle"}
        justify={"center"}
        style={{ margin: "2rem 0" }}
      >
        {!!cartItems && cartItems.length > 0 ? (
          <Col xs={22} md={18}>
            <h2 style={{ textAlign: "center" }}>
              🥰 Just a minute to finish your checkout.
            </h2>
            <div className="checkoutForm">
              <Table
                size="large"
                dataSource={cartItems}
                pagination={false}
                rowKey={(data) => data.id}
                columns={[
                  {
                    title: "No",
                    dataIndex: "no",
                    width: "3rem",
                    render(value, record, index) {
                      return (
                        <span key={record.id}>
                          {format.twoChar((index + 1).toString())}
                        </span>
                      );
                    },
                  },

                  {
                    title: "Image",
                    dataIndex: "image",
                    width: "5rem",
                    render: (value, record, index) => {
                      return (
                        <Avatar
                          src={`${API_URL_UPLOADS_CROCHETS}/${record.crochet.imageUrls[0]}`}
                          size={"large"}
                          alt={record.crochet.name}
                        />
                      );
                    },
                  },
                  {
                    title: "Name",
                    dataIndex: "name",
                    width: "15rem",
                    render: (value, record, index) => record.crochet?.name,
                  },
                  {
                    title: "Quantity",
                    dataIndex: "quantity",
                    width: 120,
                    align: "right"
                  },
                  {
                    title: "Price",
                    dataIndex: "price",
                    render: (value, record) => {
                      return `${record.currency === CURRENCY.usd && "$"}${format.number(value)}`;
                    },
                    align: "right",
                  },
                  {
                    title: "Total",
                    dataIndex: "total",
                    render: (value, record) => {
                      return `${record.currency === CURRENCY.usd && "$"}${format.number(value)}`;
                    },
                    align: "right",
                  },
                  {
                    title: "Action",
                    key: "action",
                    fixed: "left",
                    width: 80,
                    render: (_, record) => (
                      <Button
                        type="link"
                        onClick={() => handleRemoveCartItem(record)}
                        style={{ borderRadius: 50 }}
                        icon={
                          <DeleteOutlined
                            style={{ color: "red", fontSize: 18 }}
                          />
                        }
                      />
                    ),
                  },
                ]}
                scroll={{ x: "max-content" }} // Enables horizontal scrolling on smaller screens
                style={{ overflowX: "auto" }} // Ensures proper scrolling behavior
              />
              <Typography.Paragraph>
                {getCartSummary(cartItems)}
              </Typography.Paragraph>
              <CheckoutCartBtn
                cartItems={cartItems}
                onFinish={() => handleCheckoutSubmit()}
              />
            </div>
          </Col>
        ) : (
          <Col xs={22} md={16} style={{ textAlign: "center" }}>
            <h2>
              👋 Your shopping cart is empty. How about adding some items to it?{" "}
              <br /> Return <Link href="/"> home page</Link>.
            </h2>
            <Image
              src={"./icons/shopping.svg"}
              alt="Shopping with us"
              style={{ width: "280px", maxWidth: "80%" }}
            />
          </Col>
        )}
      </Row>
    </>
  );
}
