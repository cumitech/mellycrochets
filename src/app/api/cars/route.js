import { validate } from "class-validator";
import { NextResponse } from "next/server";
import { CarRepository } from "../../../data/repositories/car.repository";
import { CarUseCase } from "../../../data/usecases/car.usecase";
import CarRequestDto from "../../../data/presentation/dtos/car-request.dto";
import { displayValidationErrors } from "../../../lib/displayValidationErrors";
import authOptions from "../../../lib/options";
import { getServerSession } from "next-auth";

const carRepository = new CarRepository();
const carUseCase = new CarUseCase(carRepository);

export async function GET(request) {
  try {
    const cars = await carUseCase.getAll();

    return NextResponse.json(cars);
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
    const dto = new CarRequestDto(body);
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

    const carResponse = await carUseCase.createCar({
      ...dto.toData(),
      userId,
    });
    return NextResponse.json(
      {
        data: carResponse,
        message: "car created Successfully!",
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
