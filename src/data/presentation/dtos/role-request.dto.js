import { emptyRole } from "../../models/role";
import { nanoid } from "nanoid";
import slugify from "slugify";

class RoleRequestDto {
  constructor(data) {
    if (!data || typeof data !== "object") {
      throw new Error("Invalid role data");
    }

    if (!data.name || typeof data.name !== "string" || data.name.length > 128) {
      throw new Error("Name must be a string up to 128 characters.");
    }

    this.name = data.name;
  }

  toData() {
    return {
      ...emptyRole,
      id: nanoid(10),
      name: this.name,
      slug: slugify(this.name, { lower: true, replacement: "-" }),
    };
  }

  toUpdateData(data) {
    if (!data.id || typeof data.id !== "string") {
      throw new Error("Valid ID is required for update.");
    }

    return {
      id: data.id,
      name: data.name,
      slug: data.slug,
    };
  }
}

export default RoleRequestDto;
