// src/presentation/dtos/PaymentRequestDto.ts

import { nanoid } from "nanoid";
import { emptyPayment } from "../models";

class PaymentRequestDto {
  constructor(data) {
    if (!data || typeof data !== "object")
      throw new Error("Invalid payment data");

    this.userId = data.userId;
    this.orderId = data.orderId;
    this.transactionId = data.transactionId;
    this.requestId = data.requestId;
    this.status = data.status;
    this.telephone = data.telephone;
    this.email = data.email;
    this.username = data.username;
    this.price = data.price;

    this.currency = data.currency;
    this.paymentMethod = data.paymentMethod;
    this.transactionTime = data.transactionTime;
    this.countryCode = data.countryCode;
    this.mchTransactionRef = data.mchTransactionRef;
    this.description = data.description;
  }

  toData() {
    return {
      ...emptyPayment,
      id: nanoid(10),
      userId: this.userId,
      orderId: this.orderId,
      transactionId: this.transactionId,
      requestId: this.requestId,
      status: this.status,
      price: this.price,
      telephone: this.telephone,
      address: this.address,
      email: this.email,
      username: this.username,
      currency: this.currency,
      paymentMethod: this.paymentMethod,
      transactionTime: this.transactionTime,
      countryCode: this.countryCode,
      mchTransactionRef: this.mchTransactionRef,
      description: this.description,
    };
  }

  toUpdateData(data) {
    return { ...data };
  }
}

export { PaymentRequestDto };
