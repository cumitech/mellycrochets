// src/presentation/dtos/PaymentRequestDto.ts

import { emptyPayment } from "../models";

class PaymentRequestDto {
  constructor(data) {
    if (!data || typeof data !== "object")
      throw new Error("Invalid payment data");

    this.orderNo = data.orderNo;
    this.status = data.status;
    this.cellPhone = data.cellPhone;
    this.address = data.address;
    this.email = data.email;
    this.username = data.username;
    this.amount = data.amount;
  }

  toData() {
    return {
      ...emptyPayment,
      id: nanoid(10),
      orderNo: this.orderNo,
      status: this.status,
      amount: this.amount,
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

export { PaymentRequestDto };
