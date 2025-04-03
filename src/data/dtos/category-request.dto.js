// src/presentation/dtos/category-request.dto.ts

import { nanoid } from "nanoid";
import { emptyCategory } from "../models";

class CategoryRequestDto {
  constructor(data) {
    if (!data || typeof data !== "object") throw new Error("Invalid Category data");

    this.name = data.name;
  }

  toData() {
    return {
      ...emptyCategory,
      id: nanoid(10),
      name: this.name,
    };
  }

  toUpdateData(data) {
    return { ...data };
  }
}

export { CategoryRequestDto };
