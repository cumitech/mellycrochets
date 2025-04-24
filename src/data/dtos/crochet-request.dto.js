// src/presentation/dtos/crochet-request.dto.js

import { nanoid } from "nanoid";
import { emptyCrochet } from "../models";
import slugify from "slugify";

class CrochetRequestDto {
  constructor(data) {
    if (!data || typeof data !== "object") throw new Error("Invalid crochet data");

    this.name = data.name;
    this.slug = data.slug;
    this.description = data.description;
    this.crochetTypeId = data.crochetTypeId;
    this.imageUrls = Array.isArray(data.imageUrls) ? data.imageUrls : [];
    this.priceInCfa = typeof data.priceInCfa === "number" ? data.priceInCfa : 0.0;
    this.priceInUsd = typeof data.priceInUsd === "number" ? data.priceInUsd : 0.0;
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
      priceInCfa: this.priceInCfa,
      priceInUsd: this.priceInUsd,
    };
  }

  toUpdateData(data) {
    return { ...data };
  }
}

export { CrochetRequestDto };