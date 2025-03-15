import { nanoid } from "nanoid";
import { emptyOrderItem } from "../models";

class OrderItemRequestDto {
  constructor(data) {
    if (!data || typeof data !== "object") {
      throw new Error("Invalid order item data");
    }

    if (!data.crochetId || typeof data.crochetId !== "string") {
      throw new Error("Valid crochetId is required.");
    }

    if (!data.orderId || typeof data.orderId !== "string") {
      throw new Error("Valid orderId is required.");
    }

    if (typeof data.qtty !== "number" || data.qtty <= 0) {
      throw new Error("Valid quantity is required.");
    }

    if (typeof data.price !== "number" || data.price <= 0) {
      throw new Error("Valid price is required.");
    }

    this.crochetId = data.crochetId;
    this.orderId = data.orderId;
    this.qtty = data.qtty;
    this.price = data.price;
  }

  toData() {
    return {
      ...emptyOrderItem,
      id: nanoid(10),
      crochetId: this.crochetId,
      orderId: this.orderId,
      qtty: this.qtty,
      price: this.price,
    };
  }

  toUpdateData(data) {
    if (!data.id || typeof data.id !== "string") {
      throw new Error("Valid ID is required for update.");
    }

    return {
      id: data.id,
      crochetId: data.crochetId,
      orderId: data.orderId,
      qtty: data.qtty,
      price: data.price,
    };
  }
}

export { OrderItemRequestDto };
