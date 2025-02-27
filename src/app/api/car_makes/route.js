import { validate } from "class-validator";
import { NextResponse } from "next/server";
import { CarMakeRepository } from "../../../data/repositories/car-make.repository";
import { CarMakeUseCase } from "../../../data/usecases/car-make.usecase";
import CarMakeRequestDto from "../../../data/presentation/dtos/car-make-request.dto";
import { displayValidationErrors } from "../../../lib/displayValidationErrors";
import authOptions from "../../../lib/options";
import { getServerSession } from "next-auth";

const carMakeRepository = new CarMakeRepository();
const carMakeUseCase = new CarMakeUseCase(carMakeRepository);

export async function GET(request) {
  try {
    const carMakes = await carMakeUseCase.getAll();

    return NextResponse.json(carMakes);
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

  const userId = session.user.id;

  try {
    const body = await request.json();
    const dto = new CarMakeRequestDto(body);
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

    const carMakeResponse = await carMakeUseCase.createCarMake({
      ...dto.toData(),
      userId,
    });
    return NextResponse.json(
      {
        data: carMakeResponse,
        message: "carMake created Successfully!",
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
