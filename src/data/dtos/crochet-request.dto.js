// src/presentation/dtos/crochet-request.dto.js

import { nanoid } from "nanoid";
import { emptyCrochet } from "../models";

class CrochetRequestDto {
  constructor(data) {
    if (!data || typeof data !== "object") throw new Error("Invalid crochet data");

    this.name = data.name;
    this.slug = data.slug;
    this.description = data.description;
    this.crochetTypeId = data.crochetTypeId;
    this.imageUrls = Array.isArray(data.imageUrls) ? data.imageUrls : [];
    this.price = typeof data.price === "number" ? data.price : 0.0;
  }

  toData() {
    return {
      ...emptyCrochet,
      id: nanoid(20),
      name: this.name,
      slug: slugify(this.name, { lower: true }),
      description: this.description,
      crochetTypeId: this.crochetTypeId,
      imageUrls: this.imageUrls,
      price: this.price,
    };
  }

  toUpdateData(data) {
    return { ...data };
  }
}

export { CrochetRequestDto };