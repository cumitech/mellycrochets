import { nanoid } from "nanoid";
import { emptyAfterCare } from "../models";
import slugify from "slugify";

class AfterCareRequestDto {
  constructor(data) {
    if (!data || typeof data !== "object")
      throw new Error("Invalid after care data");

    this.title = data.title;
    this.slug = data.slug;
    this.videoUrl = data.videoUrl;
    this.description = data.description;
  }

  toData() {
    return {
      ...emptyAfterCare,
      id: nanoid(10),
      slug: slugify(this.name, { lower: true }),
      title: this.title,
      videoUrl: this.videoUrl,
      description: this.description,
    };
  }

  toUpdateData(data) {
    return {
      ...data,
      title: data.title,
      slug: data.slug,
      videoUrl: data.videoUrl,
      description: data.description,
    };
  }
}

export { AfterCareRequestDto };
