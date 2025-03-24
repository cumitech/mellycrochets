// src/presentation/dtos/crochet-size-request.dto.js

import { nanoid } from "nanoid";
import { emptyCrochetSize } from "../models";

class CrochetSizeRequestDto {
  constructor(data) {
    if (!data || typeof data !== "object") throw new Error("Invalid crochet size data");

    this.crochetId = data.crochetId;
    this.sizeId = data.sizeId || null;
    this.colors = Array.isArray(data.colors) ? data.colors : [];
  }

  toData() {
    return {
      ...emptyCrochetSize,
      id: nanoid(10),
      crochetId: this.crochetId,
      sizeId: this.sizeId,
      colors: this.colors,
    };
  }

  toUpdateData(data) {
    return { ...data };
  }
}

export { CrochetSizeRequestDto };
