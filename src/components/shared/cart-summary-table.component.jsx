import { format } from "../../lib/format";
import { Typography } from "antd";

export const getCartSummary = (cartItems) => {
  const data = cartItems && cartItems.length > 0 ? cartItems : [];
  const total = data.reduce((prev, curr) => {
    return prev + curr.total;
  }, 0);

  return (
    <div style={{ margin: "2.5rem 0 1rem 0" }} className="services-text-box">
      <div className="cartSummary font-semibold">
        Total amount :
        <Typography.Text style={{ fontWeight: 600, fontSize: 18 }} type="danger">
          {format.number(total)} {data[0]?.currency}
        </Typography.Text>
      </div>
    </div>
  );
};
