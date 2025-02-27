import { emptyCarEngine } from "../../../data/models/car_engine";
import { nanoid } from "nanoid";

class CarEngineRequestDto {
  constructor(data) {
    if (!data || typeof data !== "object") {
      throw new Error("Invalid car engine data");
    }

    if (!data.name || typeof data.name !== "string" || data.name.length > 128) {
      throw new Error("Name must not be more than 128 characters.");
    }

    if (!data.horsepower || typeof data.horsepower !== "string") {
      throw new Error("Horsepower must be a string.");
    }

    if (!data.fuelTypeId || typeof data.fuelTypeId !== "string") {
      throw new Error("Valid fuelTypeId is required.");
    }

    this.name = data.name;
    this.horsepower = data.horsepower;
    this.fuelTypeId = data.fuelTypeId;
  }

  toData() {
    return {
      ...emptyCarEngine,
      id: nanoid(10),
      name: this.name,
      horsepower: this.horsepower,
      fuelTypeId: this.fuelTypeId,
    };
  }

  toUpdateData(data) {
    if (!data.id || typeof data.id !== "string") {
      throw new Error("Valid ID is required for update.");
    }

    return {
      id: data.id,
      name: data.name,
      horsepower: data.horsepower,
      fuelTypeId: data.fuelTypeId,
    };
  }
}

export default CarEngineRequestDto;
