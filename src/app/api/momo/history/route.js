import { getPaymentHistory } from "../../../../lib/tranzak.token";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const responseData = await getPaymentHistory();

    return NextResponse.json(responseData);
  } catch (error) {
    const { data, status } = error.response || {};
    return NextResponse.json(
      {
        message: data?.message || "An error occurred",
        success: false,
        validationErrors: [],
        data: data,
      },
      { status: status || 500 }
    );
  }
}
