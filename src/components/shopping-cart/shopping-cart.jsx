import { Avatar, Badge, Button, List, Popover, Space, Typography } from "antd";
import { DeleteOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useState } from "react";
import { API_URL_UPLOADS_CROCHETS } from "../../constants/api-url";
import { useRouter } from "next/navigation";
import { format } from "../../lib/format";
import { useCart } from "../../hooks/cart.hook";
import { useNotification } from "@refinedev/core";

const ShoppingCart = ({ cartCount = 1, cartItems }) => {
  const [popovervisible, setPopovervisible] = useState(false);
  const navigator = useRouter();
  const { removeCrochet } = useCart();
  const { open } = useNotification();

  const handleCheckoutSubmit = () => {
    navigator.push("/cart");
    setPopovervisible(false);
  };

  const handleRemoveCartItem = async (item) => {
    const feedback = await removeCrochet(item.id);
    console.log("feedback: ", feedback);
    if (feedback) {
      open?.({
        type: "success",
        message: `${item.crochet.name} has been removed from cart`,
        key: "notification-key-open",
        placement: "bottomRight",
      });
      window.location.reload();
    } else {
      open?.({
        type: "error",
        message: `${item.crochet.name} was not removed`,
        key: "notification-key-open",
        placement: "bottomRight",
      });
    }
  };

  const CartHolder = () => {
    return (
      <div className="cartHolder">
        <List
          itemLayout="horizontal"
          dataSource={cartItems}
          style={{
            width: "400px",
            maxWidth: "80vw",
            maxHeight: "50vh",
            overflowY: "auto",
          }}
          size="large"
          renderItem={(item, index) => (
            <List.Item
              onClick={(e) => e.stopPropagation()}
              rowKey={item.id + index}
              actions={[
                <Button
                  className="removeCartItem"
                  icon={
                    <DeleteOutlined style={{ color: "red", fontSize: 16 }} />
                  }
                  onClick={(event) => {
                    handleRemoveCartItem(item);
                  }}
                  htmlType="button"
                />,
              ]}
            >
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={`${API_URL_UPLOADS_CROCHETS}/${item.crochet.imageUrls[0]}`}
                    size={"large"}
                    alt={item.crochet.name}
                  />
                }
                title={
                  <Typography.Title level={5}>
                    {item.crochet.name}
                  </Typography.Title>
                }
                description={
                  <Typography.Text type="danger" strong>
                    {format.number(item.quantity * item.price)} {" XAF"}
                  </Typography.Text>
                }
              />
            </List.Item>
          )}
        />

        <Space style={{ justifyContent: "flex-end" }}>
          <Button
            type="primary"
            onClick={() => handleCheckoutSubmit()}
            className="checkOutBtn"
            // block
            style={{
              borderRadius: 50,
            }}
            htmlType="button"
          >
            Confirm your order
          </Button>
        </Space>
      </div>
    );
  };

  const handlePopoverChange = (newOpen) => {
    setPopovervisible(newOpen);
  };

  return (
    <>
      <Popover
        placement="bottomRight"
        title={"Your Cart"}
        content={<CartHolder />}
        trigger="click"
        open={popovervisible}
        onOpenChange={handlePopoverChange}
      >
        <Badge count={cartCount} style={{ color: "#ddd" }}>
          <ShoppingCartOutlined className="shoppingCardIcon" />
        </Badge>
      </Popover>
    </>
  );
};

export default ShoppingCart;
