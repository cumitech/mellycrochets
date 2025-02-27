import { emptyCarTransmission } from "../../models/car_transmission";
import { nanoid } from "nanoid";

class CarTransmissionRequestDto {
  constructor(data) {
    if (!data || typeof data !== "object") {
      throw new Error("Invalid car transmission data");
    }

    if (!data.name || typeof data.name !== "string" || data.name.length > 128) {
      throw new Error("Name must not be more than 128 characters.");
    }

    this.name = data.name;
  }

  toData() {
    return {
      ...emptyCarTransmission,
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

export default CarTransmissionRequestDto;
