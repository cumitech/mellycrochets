import { validate } from "class-validator";
import { NextResponse } from "next/server";
import { UserRepository } from "../../../data/repositories/user.repository";
import { UserUseCase } from "../../../data/usecases/user.usecase";
import UserRequestDto from "../../../data/presentation/dtos/user-request.dto";
import { displayValidationErrors } from "../../../lib/displayValidationErrors";
// import authOptions from "../../../lib/options";
// import { getServerSession } from "next-auth";

const userRepository = new UserRepository();
const userUseCase = new UserUseCase(userRepository);

export async function GET(request) {
  try {
    const users = await userUseCase.getAll();

    return NextResponse.json(users);
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
  try {
    const body = await request.json();
    const dto = new UserRequestDto(body);
    const validationErrors = await validate(dto);

    console.log("validationErrors: ", validationErrors, dto.toData());
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

    const userResponse = await userUseCase.createUser({
      ...dto.toData(),
      // userId,
    });
    return NextResponse.json(
      {
        data: userResponse,
        message: "user created Successfully!",
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
      { status: 500 }
    );
  }
}