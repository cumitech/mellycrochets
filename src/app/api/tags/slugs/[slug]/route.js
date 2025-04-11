import { TagRepository } from "../../../../../data/repositories/tag.repository";
import { NextResponse } from "next/server";

const tagRepository = new TagRepository();

export async function GET(req, { params }) {
  if (!params?.slug) {
    return NextResponse.json(
      { message: "Slug is required", success: false, data: null },
      { status: 400 }
    );
  }

  try {
    const slug = params.slug;

    const tag = await tagRepository.findBySlug(slug);
    // const tagDTO = tagMapper.toDTO(tag);
    return NextResponse.json(tag);
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