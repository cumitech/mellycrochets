import { emptyMedia } from "../../models/media";
import { nanoid } from "nanoid";
import slugify from "slugify";

class MediaRequestDto {
  constructor(data) {
    if (!data || typeof data !== "object") {
      throw new Error("Invalid media data");
    }

    if (!data.title || typeof data.title !== "string") {
      throw new Error("Title is required.");
    }

    if (!data.imageUrl || typeof data.imageUrl !== "string") {
      throw new Error("Valid imageUrl is required.");
    }

    this.title = data.title;
    this.carId = data.carId;
    this.imageUrl = data.imageUrl;
  }

  toData() {
    return {
      ...emptyMedia,
      id: nanoid(10),
      title: this.title,
      carId: this.carId,
      slug: slugify(this.title, { lower: true, replacement: "-" }),
      imageUrl: this.imageUrl,
    };
  }

  toUpdateData(data) {
    if (!data.id || typeof data.id !== "string") {
      throw new Error("Valid ID is required for update.");
    }

    return {
      id: data.id,
      title: data.title,
      carId: data.carId,
      slug: data.slug,
      imageUrl: data.imageUrl,
    };
  }
}

export default MediaRequestDto;
