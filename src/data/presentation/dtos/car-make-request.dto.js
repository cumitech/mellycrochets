import { nanoid } from "nanoid";
import { emptyCarMake } from "../../models/car_make";

class CarMakeRequestDto {
  constructor(data) {
    if (!data || typeof data !== "object") {
      throw new Error("Invalid carMake data");
    }

    if (
      !data.name ||
      typeof data.name !== "string" ||
      data.name.length < 3 ||
      data.name.length > 128
    ) {
      throw new Error("Name must be a string between 3 and 128 characters.");
    }

    this.name = data.name;
  }

  toData() {
    return {
      ...emptyCarMake,
      id: nanoid(10),
      name: this.name,
    };
  }

  toUpdateData(data) {
    if (!data || typeof data !== "object") {
      throw new Error("Invalid data for update.");
    }

    if (!data.id || typeof data.id !== "string") {
      throw new Error("Valid ID is required for update.");
    }

    if (
      data.name &&
      (typeof data.name !== "string" ||
        data.name.length < 3 ||
        data.name.length > 128)
    ) {
      throw new Error("Name must be a string between 3 and 128 characters.");
    }

    return {
      id: data.id,
      name: data.name,
    };
  }
}

export default CarMakeRequestDto;
