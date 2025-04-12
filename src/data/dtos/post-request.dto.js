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
    this.authorId = data.authorId;
    this.status = data.status;
    this.imageUrl = data.imageUrl;
    this.tags = data.tags || [];
  }

  toData() {
    return {
      ...emptyPost,
      id: nanoid(20),
      slug: slugify(this.title, { lower: true, replacement: "-" }),
      title: this.title,
      content: this.content,
      categoryId: this.categoryId,
      summary: this.summary,
      imageUrl: this.imageUrl,
      status: this.status,
      authorId: this.authorId,
    };
  }

  toUpdateData(data) {
    return { ...data };
  }
}

export { PostRequestDto };
