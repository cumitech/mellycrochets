import { requestType } from ".";
import axios from "axios";

export const CartService = {
  list: () => requestType.get(`/cart_items`),
  create: (crochetId, sizeId, quantity, currency, color) =>
    requestType.post(`/cart_items`, { crochetId, sizeId, quantity, currency, color }),
  remove: (id) => axios.delete(`/api/cart_items/${id}`, {}),
  clear: () => requestType.del(`/cart_items`, {}),
};