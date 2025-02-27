import { emptyFuelType } from "../../models/fuel_type";
import { nanoid } from "nanoid";

class FuelTypeRequestDto {
  constructor(data) {
    if (!data || typeof data !== "object") {
      throw new Error("Invalid fuel type data");
    }

    if (!data.name || typeof data.name !== "string" || data.name.length > 128) {
      throw new Error("Name must not be more than 128 characters.");
    }

    this.name = data.name;
  }

  toData() {
    return {
      ...emptyFuelType,
      id: nanoid(10),
      name: this.name,
    };
  }

  toUpdateData(data) {
    if (!data.id || typeof data.id !== "string") {
      throw new Error("Valid ID is required for update.");
    }

    return {
      id: data.id,
      name: data.name,
    };
  }
}

export default FuelTypeRequestDto;
