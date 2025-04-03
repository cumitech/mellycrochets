// src/presentation/dtos/tag-request.dto.ts

import { nanoid } from "nanoid";
import { emptyComment } from "../models";

class CommentRequestDto {
  constructor(data) {
    if (!data || typeof data !== "object")
      throw new Error("Invalid Comment data");

    this.userId = data.userId;
    this.postId = data.postId;
    this.message = data.message;
    this.toggle = data.toggle;
  }

  toData() {
    return {
      ...emptyComment,
      id: nanoid(10),
      userId: this.userId,
      postId: this.postId,
      message: this.message,
      toggle: this.toggle,
    };
  }

  toUpdateData(data) {
    return { ...data };
  }
}

export { CommentRequestDto };
