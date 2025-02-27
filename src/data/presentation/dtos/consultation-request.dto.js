import { emptyConsultation } from "../../models/consultation";
import { nanoid } from "nanoid";

class ConsultationRequestDto {
  constructor(data) {
    if (!data || typeof data !== "object") {
      throw new Error("Invalid consultation data");
    }

    if (!data.username || typeof data.username !== "string") {
      throw new Error("Valid username is required.");
    }

    if (!data.serviceType || typeof data.serviceType !== "string") {
      throw new Error("Service type must be a string.");
    }

    if (!data.message || typeof data.message !== "string") {
      throw new Error("Message is required.");
    }

    this.username = data.username;
    this.telephone = data.telephone;
    this.serviceType = data.serviceType;
    this.message = data.message;
    this.status = data.status;
  }

  toData() {
    return {
      ...emptyConsultation,
      id: nanoid(10),
      username: this.username,
      telephone: this.telephone,
      serviceType: this.serviceType,
      message: this.message,
      status: "pending",
    };
  }

  toUpdateData(data) {
    if (!data.id || typeof data.id !== "string") {
      throw new Error("Valid ID is required for update.");
    }

    return {
      id: data.id,
      username: data.username,
      telephone: data.telephone,
      serviceType: data.serviceType,
      message: data.message,
      status: data.status,
    };
  }
}

export default ConsultationRequestDto;
