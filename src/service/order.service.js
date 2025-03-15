import { requestType } from ".";

export const OrderService = {
  list: () => requestType.get("/api/orders"),
  details: (code) => requestType.get(`/api/orders/${code}`),
  create: (user) => requestType.post(`/api/orders`, user),
  update: (order) => requestType.put(`/api/orders/${order.id}`, order),
  delete: (order) => requestType.del(`/api/orders/${order.id}`, order),
  byOrderId: (orderId) => requestType.get(`/api/orders/crochets/${orderId}`),
};
