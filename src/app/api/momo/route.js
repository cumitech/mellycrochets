import { NextResponse } from "next/server";
// import authOptions from "../../../lib/options";
// import { getServerSession } from "next-auth";
import { initiateMomoPayment } from "../../../lib/tranzak.token";
import { nanoid } from "nanoid";

export async function POST(request) {
  // const session = await getServerSession(authOptions); //get session info

  // if (!session || !session.user) {
  //   return NextResponse.json(
  //     {
  //       message: "Unauthorized: Please log in to access this resource.",
  //       success: false,
  //       data: null,
  //       validationErrors: [],
  //     },
  //     { status: 401 }
  //   );
  // }

  try {
    const body = await request.json();
    body.mchTransactionRef = nanoid(20);
    const { amount, description, returnUrl } = body;

    const response = await initiateMomoPayment(amount, description, returnUrl);

    return NextResponse.json(
      {
        ...response,
      },
      { status: 200 }
    );
  } catch (error) {
    const { response } = error;

    return NextResponse.json(
      {
        message: response?.data?.message || "Payment initiation failed",
        success: false,
        validationErrors: [],
        data: response?.data || null,
      },
      { status: response?.status || 500 }
    );
  }
}
