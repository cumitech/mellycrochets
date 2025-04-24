// src/presentation/dtos/OrderRequestDto.ts

import { emptyOrder } from "../models";
import { nanoid } from "nanoid";

// Order Request DTO
class OrderRequestDto {
  constructor(data) {
    if (!data || typeof data !== "object") {
      throw new Error("Invalid order data.");
    }
    if (!data.status || !data.orderNo || !data.email || !data.username) {
      throw new Error(
        "Status, OrderNo, email, and username are required."
      );
    }
    if (
      typeof data.totalAmount !== "number" ||
      typeof data.totalQtty !== "number"
    ) {
      throw new Error("Total amount and quantity must be numbers.");
    }

    this.status = data.status;
    this.orderNo = data.orderNo;
    this.totalAmount = data.totalAmount;
    this.totalQtty = data.totalQtty;
    this.items = data.items;
    this.address = data.address;
    this.email = data.email;
    this.username = data.username;
    this.userId = data.userId;
    this.paymentMethod = data.paymentMethod;
  }

  toData() {
    return {
      ...emptyOrder,
      id: nanoid(20),
      orderNo: this.orderNo,
      status: this.status,
      totalAmount: this.totalAmount,
      totalQtty: this.totalQtty,
      items: this.items,
      address: this.address,
      email: this.email,
      username: this.username,
      userId: this.userId,
      paymentMethod: this.paymentMethod,
    };
  }

  toUpdateData(data) {
    return { ...data };
  }
}

export { OrderRequestDto };
