import { validate } from "class-validator";
import { NextResponse } from "next/server";
import { CartItemRepository } from "../../../data/repositories/cart-item.repository";
import { CartItemRequestDto } from "../../../data/dtos/cart-item-request.dto";
import { displayValidationErrors } from "../../../lib/displayValidationErrors";
import authOptions from "../../../lib/options";
import { getServerSession } from "next-auth";
import initializeSocket from "../../../lib/socket";

const cartItemRepository = new CartItemRepository();

export async function GET(request) {
  const io = initializeSocket(request);
  try {
    const cartItems = await cartItemRepository.getAll();

    io.emit("cart-items", cartItems);
    return NextResponse.json(cartItems);
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

export async function POST(request) {
  const session = await getServerSession(authOptions); //get session info
  const io = initializeSocket(request);

  if (!session || !session.user) {
    return NextResponse.json(
      {
        message: "Unauthorized: Please log in to access this resource.",
        success: false,
        data: null,
        validationErrors: [],
      },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();
    const dto = new CartItemRequestDto(body);
    const validationErrors = await validate(dto);

    if (validationErrors.length > 0) {
      return NextResponse.json(
        {
          validationErrors: displayValidationErrors(validationErrors),
          success: false,
          data: null,
          message: "Attention!",
        },
        { status: 400 }
      );
    }

    const cartItemResponse = await cartItemRepository.create({
      ...dto.toData(),
    });
    io.emit("cart-updated", cartItemResponse); // Emit event
    return NextResponse.json(
      {
        data: cartItemResponse,
        message: "cartItem created Successfully!",
        validationErrors: [],
        success: true,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        data: null,
        message: error.message,
        validationErrors: [],
        success: false,
      },
      { status: 400 }
    );
  }
}
