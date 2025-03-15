// src/presentation/dtos/role-request.dto.ts

import { nanoid } from "nanoid";
import { emptyRole } from "../models";

class RoleRequestDto {
  constructor(data) {
    if (!data || typeof data !== "object") throw new Error("Invalid role data");

    this.name = data.name;
  }

  toData() {
    return {
      ...emptyRole,
      id: nanoid(10),
      name: this.name,
    };
  }

  toUpdateData(data) {
    return { ...data };
  }
}

export { RoleRequestDto };
