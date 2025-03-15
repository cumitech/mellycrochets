// src/presentation/dtos/subscriber-request.dto.ts

import { nanoid } from "nanoid";
import { emptySubscriber } from "../models";

class SubscriberRequestDto {
  constructor(data) {
    if (!data || typeof data !== "object" || !data.email) {
      throw new Error("Invalid subscriber data");
    }
    this.email = data.email;
  }

  toData() {
    return {
      ...emptySubscriber,
      id: nanoid(10),
      email: this.email,
    };
  }

  toUpdateData(data) {
    if (!data.id || typeof data.id !== "string") {
      throw new Error("Valid ID is required for update.");
    }
    return { ...data };
  }
}

export { SubscriberRequestDto };
