import { validate } from "class-validator";
import { NextResponse } from "next/server";
import { CarTransmissionRepository } from "../../../data/repositories/car-transmission.repository";
import { CarTransmissionUseCase } from "../../../data/usecases/car-transmission.usecase";
import CarTransmissionRequestDto from "../../../data/presentation/dtos/car-transmission-request.dto";
import { displayValidationErrors } from "../../../lib/displayValidationErrors";
import authOptions from "../../../lib/options";
import { getServerSession } from "next-auth";

const carTransmissionRepository = new CarTransmissionRepository();
const carTransmissionUseCase = new CarTransmissionUseCase(
  carTransmissionRepository
);

export async function GET(request) {
  try {
    const carTransmissions = await carTransmissionUseCase.getAll();

    return NextResponse.json(carTransmissions);
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
    const dto = new CarTransmissionRequestDto(body);
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

    const carTransmissionResponse =
      await carTransmissionUseCase.createCarTransmission({
        ...dto.toData(),
        userId,
      });
    return NextResponse.json(
      {
        data: carTransmissionResponse,
        message: "carTransmission created Successfully!",
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
