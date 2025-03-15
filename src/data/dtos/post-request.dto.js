// src/presentation/dtos/post-request.dto.ts

import slugify from "slugify";
import { nanoid } from "nanoid";
import { emptyPost } from "../models";

class PostRequestDto {
  constructor(data) {
    if (!data || typeof data !== "object") throw new Error("Invalid post data");

    this.title = data.title;
    this.content = data.content;
    this.summary = data.summary;
    this.categoryId = data.categoryId;
  }

  toData() {
    return {
      ...emptyPost,
      id: nanoid(10),
      slug: slugify(this.title, { lower: true, replacement: "-" }),
      title: this.title,
      content: this.content,
      categoryId: this.categoryId,
      summary: this.summary,
    };
  }

  toUpdateData(data) {
    return { ...data };
  }
}

export { PostRequestDto };
