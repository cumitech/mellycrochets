import { emptyInquiry } from "../../models/inquiry";
import { nanoid } from "nanoid";

class InquiryRequestDto {
    constructor(data) {
      if (!data || typeof data !== "object") {
        throw new Error("Invalid inquiry data");
      }
  
      if (!data.username || typeof data.username !== "string") {
        throw new Error("Valid username is required.");
      }
  
      if (!data.carId || typeof data.carId !== "string") {
        throw new Error("Valid carId is required.");
      }
  
      if (!data.message || typeof data.message !== "string") {
        throw new Error("Message is required.");
      }
  
      if (!["rent", "purchase"].includes(data.inquiry_type)) {
        throw new Error('Inquiry type must be either "rent" or "purchase".');
      }
  
      this.username = data.username;
      this.telephone = data.telephone;
      this.carId = data.carId;
      this.message = data.message;
      this.inquiry_type = data.inquiry_type;
    }
  
    toData() {
      return {
        ...emptyInquiry,
        id: nanoid(10),
        username: this.username,
        telephone: this.telephone,
        carId: this.carId,
        message: this.message,
        inquiry_type: this.inquiry_type,
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
        carId: data.carId,
        message: data.message,
        inquiry_type: data.inquiry_type,
      };
    }
  }
  
  export default InquiryRequestDto;
  