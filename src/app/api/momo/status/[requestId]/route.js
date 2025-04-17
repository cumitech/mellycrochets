import { getPaymentStatus } from "../../../../../lib/tranzak.token";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  if (!params?.requestId) {
    return NextResponse.json(
      { message: "REQUESTID is required", success: false, data: null },
      { status: 400 }
    );
  }
  try {
    const requestId = params.requestId;
    const statusData = await getPaymentStatus(requestId);

    return NextResponse.json(statusData);
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
