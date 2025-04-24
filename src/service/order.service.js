import { requestType } from ".";

export const OrderService = {
  list: () => requestType.get("/orders"),
  details: (code) => requestType.get(`/orders/${code}`),
  create: (user) => requestType.post(`/orders`, user),
  update: (order) => requestType.patch(`/orders/${order.id}`, order),
  delete: (order) => requestType.del(`/orders/${order.id}`, order),
  byOrderId: (orderId) => requestType.get(`/orders/crochets/${orderId}`),
};
