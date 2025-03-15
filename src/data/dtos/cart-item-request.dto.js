import { nanoid } from "nanoid";
import { emptyCartItem } from "../models";

class CartItemRequestDto {
  constructor(data) {
    if (!data || typeof data !== "object") {
      throw new Error("Invalid cart item data");
    }

    if (!data.crochetId || typeof data.crochetId !== "string") {
      throw new Error("Valid crochetId is required.");
    }

    if (!data.userId || typeof data.userId !== "string") {
      throw new Error("Valid userId is required.");
    }

    if (typeof data.quantity !== "number" || data.quantity <= 0) {
      throw new Error("Valid quantity is required.");
    }

    if (typeof data.total !== "number" || data.total < 0) {
      throw new Error("Valid total price is required.");
    }

    if (
      typeof data.discountPercentage !== "number" ||
      data.discountPercentage < 0
    ) {
      throw new Error("Valid discount percentage is required.");
    }

    if (typeof data.discountedPrice !== "number" || data.discountedPrice < 0) {
      throw new Error("Valid discounted price is required.");
    }

    this.crochetId = data.crochetId;
    this.userId = data.userId;
    this.quantity = data.quantity;
    this.total = data.total;
    this.discountPercentage = data.discountPercentage;
    this.discountedPrice = data.discountedPrice;
  }

  toData() {
    return {
      ...emptyCartItem,
      id: nanoid(20),
      crochetId: this.crochetId,
      userId: this.userId,
      quantity: this.quantity,
      total: this.total,
      discountPercentage: this.discountPercentage,
      discountedPrice: this.discountedPrice,
    };
  }

  toUpdateData(data) {
    if (!data.id || typeof data.id !== "string") {
      throw new Error("Valid ID is required for update.");
    }

    return {
      id: data.id,
      crochetId: data.crochetId,
      userId: data.userId,
      quantity: data.quantity,
      total: data.total,
      discountPercentage: data.discountPercentage,
      discountedPrice: data.discountedPrice,
    };
  }
}

export { CartItemRequestDto };
