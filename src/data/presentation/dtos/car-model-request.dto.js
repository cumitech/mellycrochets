import { emptyCarModel } from "../../models/car_model";
import { nanoid } from "nanoid";

class CarModelRequestDto {
  constructor(data) {
    if (!data || typeof data !== "object") {
      throw new Error("Invalid car model data");
    }

    if (
      !data.modelName ||
      typeof data.modelName !== "string" ||
      data.modelName.length < 3 ||
      data.modelName.length > 128
    ) {
      throw new Error(
        "Model name must be a string between 3 and 128 characters."
      );
    }

    if (!data.carMakeId || typeof data.carMakeId !== "string") {
      throw new Error("Valid carMake is required.");
    }

    this.modelName = data.modelName;
    this.carMakeId = data.carMakeId;
  }

  toData() {
    return {
      ...emptyCarModel,
      id: nanoid(10),
      modelName: this.modelName,
      carMakeId: this.carMakeId,
    };
  }

  toUpdateData(data) {
    if (!data.id || typeof data.id !== "string") {
      throw new Error("Valid ID is required for update.");
    }

    return {
      id: data.id,
      modelName: data.modelName,
      carMakeId: data.carMakeId,
    };
  }
}

export default CarModelRequestDto;
