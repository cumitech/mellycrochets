// src/presentation/dtos/OrderRequestDto.ts

import { v4 } from "uuid";
import { emptyOrder } from "../models";

// Order Request DTO
class OrderRequestDto {
  constructor(data) {
    if (!data || typeof data !== "object") {
      throw new Error("Invalid order data.");
    }
    if (!data.status || !data.orderNo || !data.email || !data.username) {
      throw new Error(
        "Order status, order number, email, and username are required."
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
    this.crochets = data.crochets;
    this.cellPhone = data.cellPhone;
    this.address = data.address;
    this.email = data.email;
    this.username = data.username;
  }

  toData() {
    return {
      ...emptyOrder,
      id: v4(),
      orderNo: this.orderNo,
      status: this.status,
      totalAmount: this.totalAmount,
      totalQtty: this.totalQtty,
      crochets: this.crochets,
      cellPhone: this.cellPhone,
      address: this.address,
      email: this.email,
      username: this.username,
    };
  }

  toUpdateData(data) {
    return { ...data };
  }
}

export { OrderRequestDto };
