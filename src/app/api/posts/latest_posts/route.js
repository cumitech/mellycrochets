import { NextResponse } from "next/server";
import { PostRepository } from "../../../../data/repositories/post.repository";

const postRepository = new PostRepository();

export async function GET(request) {
  try {
    const posts = await postRepository.getLatestPosts();

    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json(
      {
        data: null,
        message: error.message,
        validationErrors: [error],
        success: false,
      },
      { status: 400 }
    );
  }
}