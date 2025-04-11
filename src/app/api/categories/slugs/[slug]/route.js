import { CategoryRepository } from "../../../../../data/repositories/category.repository";
import { NextResponse } from "next/server";

const categoryRepository = new CategoryRepository();

export async function GET(req, { params }) {
  if (!params?.slug) {
    return NextResponse.json(
      { message: "Slug is required", success: false, data: null },
      { status: 400 }
    );
  }

  try {
    const slug = params.slug;

    const category = await categoryRepository.findBySlug(slug);
    // const categoryDTO = categoryMapper.toDTO(category);
    return NextResponse.json(category);
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