import { nanoid } from "nanoid";
import { emptyAfterCare } from "../models";

class AfterCareRequestDto {
  constructor(data) {
    if (!data || typeof data !== "object")
      throw new Error("Invalid after care data");

    this.title = data.title;
    this.videoUrl = data.videoUrl;
    this.description = data.description;
  }

  toData() {
    return {
      ...emptyAfterCare,
      id: nanoid(10),
      title: this.title,
      videoUrl: this.videoUrl,
      description: this.description,
    };
  }

  toUpdateData(data) {
    return {
      ...data,
      title: this.title,
      videoUrl: this.videoUrl,
      description: this.description,
    };
  }
}

export { AfterCareRequestDto };
