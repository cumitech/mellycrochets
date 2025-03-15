import { NextResponse } from "next/server";
import { CrochetRepository } from "../../../../data/repositories/crochet.repository";

const crochetRepository = new CrochetRepository();

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const brand = searchParams.get("brand");
  const categoryId = searchParams.get("categoryId");
  const specie = searchParams.get("specie");
  const tag = searchParams.get("tag");

  try {
    const crochets = await crochetRepository.filter({
      brand,
      categoryId,
      specie,
      tag,
    });

    return NextResponse.json(crochets);
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
