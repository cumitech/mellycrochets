import {
  Avatar,
  Badge,
  Button,
  List,
  message,
  Popover,
  Space,
  Typography,
} from "antd";
import { DeleteOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useState } from "react";
import { API_URL_UPLOADS_CROCHETS } from "../../constants/api-url";
import { useRouter } from "next/navigation";
import { format } from "../../lib/format";
import { useCart } from "../../hooks/cart.hook";
import { CURRENCY } from "../../constants/constant";

const ShoppingCart = ({ cartCount = 1, cartItems }) => {
  const [popovervisible, setPopovervisible] = useState(false);
  const navigator = useRouter();
  const { removeCrochet } = useCart();

  const handleCheckoutSubmit = () => {
    navigator.push("/cart");
    setPopovervisible(false);
  };

  const handleRemoveCartItem = async (item) => {
    const feedback = await removeCrochet(item.crochet.id);
    if (feedback) {
      message.success(`${item.crochet.name} has been removed from cart`);
      window.location.reload();
    } else {
      message.error(`${item.crochet.name} was not removed`);
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
          renderItem={(item, index) => {
            return (
              <List.Item
                onClick={(e) => e.stopPropagation()}
                rowKey={item.id + index}
                key={item.id + index}
                actions={[
                  <Button
                    key={"button-1"}
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
                    <Typography.Text
                      type="danger"
                      strong
                      style={{ fontSize: 20 }}
                    >
                      {item.currency === CURRENCY.usd && "$"}
                      {format.number(item.total)}{" "}
                    </Typography.Text>
                  }
                />
              </List.Item>
            );
          }}
        />

        {cartItems && cartItems.length > 0 && (
          <Space style={{ justifyContent: "flex-end" }}>
            <Button
              type="primary"
              size="large"
              onClick={() => handleCheckoutSubmit()}
              className="checkOutBtn"
              // block
              style={{
                borderRadius: 50,
              }}
              htmlType="button"
            >
              View Cart
            </Button>
          </Space>
        )}
      </div>
    );
  };

  const handlePopoverChange = (newOpen) => {
    setPopovervisible(newOpen);
  };

  return (
    <>
      <Popover
        placement="bottom"
        title={"Your Cart"}
        content={<CartHolder />}
        trigger="click"
        open={popovervisible}
        onOpenChange={handlePopoverChange}
        styles={{
          body: {
            marginRight: 30,
          },
        }}
      >
        <Badge count={cartCount} style={{ color: "#ddd" }}>
          <ShoppingCartOutlined
            className="shoppingCardIcon"
            style={{ fontSize: 30 }}
          />
        </Badge>
      </Popover>
    </>
  );
};

export default ShoppingCart;
