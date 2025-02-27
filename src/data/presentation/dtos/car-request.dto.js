import { emptyCar } from "../../models/car";
import { nanoid } from "nanoid";

class CarRequestDto {
  constructor(data) {
    if (!data || typeof data !== "object") {
      throw new Error("Invalid car data");
    }

    if (!data.carNum || typeof data.carNum !== "string") {
      throw new Error("Car number must be a string.");
    }

    if (!data.carModelId || typeof data.carModelId !== "string") {
      throw new Error("Valid carModelId is required.");
    }

    if (!data.year || typeof data.year !== "number") {
      throw new Error("Year must be a valid number.");
    }

    if (!data.engineId || typeof data.engineId !== "string") {
      throw new Error("Valid engine is required.");
    }
    if (!data.locationId || typeof data.locationId !== "string") {
      throw new Error("Valid location is required.");
    }

    if (!data.transmissionId || typeof data.transmissionId !== "string") {
      throw new Error("Valid transmission is required.");
    }

    this.carNum = data.carNum;
    this.carModelId = data.carModelId;
    this.year = data.year;
    this.color = data.color;
    this.numOfSeats = data.numOfSeats;
    this.availabilityStatus = data.availabilityStatus;
    this.description = data.description;
    this.image = data.image;
    this.transmissionId = data.transmissionId;
    this.engineId = data.engineId;
    this.dailyRate = data.dailyRate;
    this.salesPrice = data.salesPrice;
    this.locationId = data.locationId;
  }

  toData() {
    return {
      ...emptyCar,
      id: nanoid(10),
      carNum: this.carNum,
      carModelId: this.carModelId,
      year: this.year,
      color: this.color,
      numOfSeats: this.numOfSeats,
      availabilityStatus: this.availabilityStatus,
      description: this.description,
      image: this.image,
      transmissionId: this.transmissionId,
      engineId: this.engineId,
      dailyRate: this.dailyRate,
      salesPrice: this.salesPrice,
      locationId: this.locationId,
    };
  }

  toUpdateData(data) {
    if (!data.id || typeof data.id !== "string") {
      throw new Error("Valid ID is required for update.");
    }

    return {
      id: data.id,
      carNum: data.carNum,
      carModelId: data.carModelId,
      year: data.year,
      color: data.color,
      numOfSeats: data.numOfSeats,
      availabilityStatus: data.availabilityStatus,
      description: data.description,
      image: data.image,
      transmissionId: data.transmissionId,
      engineId: data.engineId,
      dailyRate: data.dailyRate,
      salesPrice: data.salesPrice,
      locationId: data.locationId,
    };
  }
}

export default CarRequestDto;
