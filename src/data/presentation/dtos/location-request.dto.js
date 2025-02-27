import { emptyLocation } from "../../models/location";
import { nanoid } from "nanoid";

class LocationRequestDto {
  constructor(data) {
    if (!data || typeof data !== "object") {
      throw new Error("Invalid location data");
    }

    if (!data.name || typeof data.name !== "string" || data.name.length > 128) {
      throw new Error("Name must not more than 128 characters.");
    }

    if (!data.countryId || typeof data.countryId !== "string") {
      throw new Error("Valid countryId is required.");
    }

    this.name = data.name;
    this.countryId = data.countryId;
  }

  toData() {
    return {
      ...emptyLocation,
      id: nanoid(10),
      name: this.name,
      countryId: this.countryId,
    };
  }

  toUpdateData(data) {
    if (!data.id || typeof data.id !== "string") {
      throw new Error("Valid ID is required for update.");
    }

    return {
      id: data.id,
      name: data.name,
      countryId: data.countryId,
    };
  }
}

export default LocationRequestDto;
