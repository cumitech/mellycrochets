import { NextResponse } from "next/server";
import { CrochetRepository } from "../../../../data/repositories/crochet.repository";

const crochetRepository = new CrochetRepository();

export async function GET(request) {
  try {
    // Extract query params from URL (e.g., `/api/crochets?ids=id1,id2,id3`)
    const { searchParams } = new URL(request.url);
    const ids = searchParams.get("ids")?.split(",") || [];

    if (!ids.length) {
      return NextResponse.json(
        {
          data: null,
          message: "No IDs provided",
          success: false,
        },
        { status: 400 }
      );
    }

    const crochets = await crochetRepository.filterByIds(ids);

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
