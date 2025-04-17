"use client";
import { usePaymentMethod } from "../../hooks/payment-method";
import { useCart } from "../../hooks/cart.hook";
import {
  CheckCircleOutlined,
  DeleteOutlined,
  DollarCircleOutlined,
  MobileOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Card,
  Col,
  Drawer,
  Form,
  Image,
  Input,
  message,
  Row,
  Table,
  Typography,
} from "antd";
import { useEffect, useState } from "react";
import Link from "next/link";
import { format } from "../../lib/format";
import { API_URL_UPLOADS_CROCHETS } from "../../constants/api-url";
import { cartItemAPI } from "../../store/api/cart_item_api";
import { getCartSummary } from "../../components/shared/cart-summary-table.component";
import { CURRENCY, ORDER_STATUS } from "../../constants/constant";
import { useRouter } from "next/navigation";
import { useCurrency } from "../../hooks/currency.hook";
import { useCreate, useGetIdentity } from "@refinedev/core";
import { generateOrderNumber } from "../../utils/order-no";
import CheckoutSkeleton from "../../skeleton/cart.skeleton";

const CheckoutCartBtn = ({ cartItems }) => {
  const [checkoutDrawerOpen, setCheckoutDrawerOpen] = useState(false);
  const [isOrdering, setOrdering] = useState(false);
  const { setPaymentMethod, paymentMethod } = usePaymentMethod();
  const { currency } = useCurrency();
  const { getCartTotal, getCartQuantity } = useCart();

  const { data: user } = useGetIdentity({});
  const navigation = useRouter();

  const { mutate: mutateOrder } = useCreate({
    resource: "orders",
  });
  const { mutate: mutateMomo } = useCreate({
    resource: "momo",
  });

  const total = getCartTotal(cartItems);
  const totalQtty = getCartQuantity(cartItems);

  const options = [
    {
      key: "mobile_money",
      label: "Mobile Money",
      icon: <MobileOutlined className="text-4xl text-blue-500" />,
    },
    {
      key: "cash_on_delivery",
      label: "Cash on Delivery",
      icon: <DollarCircleOutlined className="text-4xl text-green-600" />,
    },
  ];

  const handleDrawerHandler = () => {
    setCheckoutDrawerOpen(true);
  };

  const onConfirmOrder = async (data) => {
    const payload = {
      userId: user.id,
      totalQtty: totalQtty,
      discount: 0,
      totalAmount: total,
      orderNo: generateOrderNumber(),
      username: user.name,
      address: data.address,
      telephone: data.telephone,
      paymentMethod,
      email: user.email,
      status: ORDER_STATUS.PENDING,
      items: cartItems.map((item) => {
        return {
          crochetId: item.crochetId,
          qtty: item.quantity,
          amount: item.price,
        };
      }),
    };
    try {
      setOrdering(true);
      mutateOrder(
        {
          values: payload,
        },
        {
          onSuccess: (data) => {
            const { id } = data.data;
            message.success("Your Order has been placed!");
            mutateMomo(
              {
                values: {
                  amount: 5,
                  currencyCode: currency,
                  description: `Your order from MellyCrochets`,
                  returnUrl: `http://localhost:3000/payment-success?orderId=${id}`,
                },
              },
              {
                onSuccess: (data) => {
                  const { links, ...rest } = data.data;
                  const { paymentAuthUrl } = links;
                  navigation.push(paymentAuthUrl);
                },
                onError: () => {},
                onSettled: () => {
                  setOrdering(false);
                },
              }
            );
          },
          onError: () => {
            message.error("Failed to place order.");
          },
          onSettled: () => {
            setOrdering(false);
          },
        }
      );
    } catch (err) {
      setOrdering(false);
    }
  };

  useEffect(() => {}, [paymentMethod]);
  return (
    <>
      <div className="px-6 pb-2">
        <Button
          type="primary"
          className="w-inline-block"
          size="large"
          style={{ borderRadius: 50 }}
          onClick={handleDrawerHandler}
        >
          Proceed To Checkout
        </Button>
      </div>
      <Drawer
        open={checkoutDrawerOpen}
        onClose={() => setCheckoutDrawerOpen(false)}
        title={
          <Typography.Title level={4} style={{ textAlign: "center" }}>
            Select Payment Method
          </Typography.Title>
        }
        styles={{ wrapper: { width: "500px" } }}
      >
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
            {options.map((option) => (
              <Card
                key={option.key}
                onClick={() => setPaymentMethod(option.key)}
                className={`cursor-pointer transition-all duration-200 border-2 ${
                  paymentMethod === option.key
                    ? "active shadow-lg"
                    : "border-gray-200"
                }`}
              >
                <div className="flex flex-col items-center justify-center space-y-2">
                  {option.icon}
                  <span className="text-base font-medium">{option.label}</span>
                  {paymentMethod === option.key && (
                    <CheckCircleOutlined className="text-green-500 text-2xl" />
                  )}
                </div>
              </Card>
            ))}
          </div>

          <Form onFinish={onConfirmOrder} layout="vertical">
            <Form.Item
              label="Telephone"
              name="telephone"
              rules={[
                { required: true, message: "Please enter your telephone" },
              ]}
            >
              <Input size="large" placeholder="Enter your telephone..." />
            </Form.Item>

            <Form.Item
              label="Address"
              name="address"
              rules={[{ required: true, message: "Please enter your address" }]}
            >
              <Input size="large" placeholder="Enter your address..." />
            </Form.Item>

            <Button
              size="large"
              type="primary"
              htmlType="submit"
              style={{ borderRadius: 50, padding: "1.5rem" }}
            >
              Confirm Order
            </Button>
          </Form>
        </div>
      </Drawer>
    </>
  );
};

export default function CartPage() {
  const { removeCrochet } = useCart();
  const navigation = useRouter();

  const {
    data: cartItems,
    isLoading,
    isFetching,
    refetch,
  } = cartItemAPI.useFetchAllCartItemsQuery(1);

  if (isLoading || isFetching) {
    return <CheckoutSkeleton />;
  }

  const handleCheckoutSubmit = () => {
    refetch();
    navigation.push("/process-payment");
  };

  const handleRemoveCartItem = async (item) => {
    const feedback = await removeCrochet(item.id);
    if (feedback) {
      message.success(`${item.crochet.name} has been removed from cart`);
      window.location.reload();
    } else {
      message.error(`${item.crochet.name} was not removed`);
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
            <div className="bg-white py-10 px-4 sm:px-8">
              <div className="shadow-md rounded-xl">
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
                        // width: "15rem",
                        ellipsis: true,
                        render: (value, record, index) => record.crochet?.name,
                      },
                      {
                        title: "Quantity",
                        dataIndex: "quantity",
                        width: 120,
                        align: "right",
                      },
                      {
                        title: "Price",
                        dataIndex: "price",
                        render: (value, record) => {
                          return `${format.number(value)}`;
                        },
                        align: "right",
                      },
                      {
                        title: "Total",
                        dataIndex: "total",
                        render: (value, record) => {
                          return `${format.number(value)}`;
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
              </div>
            </div>
          </Col>
        ) : (
          <Col xs={22} md={16} style={{ textAlign: "center" }}>
            <div className="bg-white py-10 px-4 sm:px-8">
              <div className="shadow-md rounded-xl p-6">
                <h2>
                  👋 Your shopping cart is empty. How about adding some items to
                  it? <br /> Return <Link href="/"> home page</Link>.
                </h2>
                <Image
                  src={"./icons/shopping.svg"}
                  alt="Shopping with us"
                  style={{ width: "280px", maxWidth: "80%" }}
                />
              </div>
            </div>
          </Col>
        )}
      </Row>
    </>
  );
}
