import { validate } from "class-validator";
import { NextResponse } from "next/server";
import { LocationRepository } from "../../../data/repositories/location.repository";
import { LocationUseCase } from "../../../data/usecases/location.usecase";
import LocationRequestDto from "../../../data/presentation/dtos/location-request.dto";
import { displayValidationErrors } from "../../../lib/displayValidationErrors";
import authOptions from "../../../lib/options";
import { getServerSession } from "next-auth";

const locationRepository = new LocationRepository();
const locationUseCase = new LocationUseCase(locationRepository);

export async function GET(request) {
  try {
    const locations = await locationUseCase.getAll();

    return NextResponse.json(locations);
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
    const dto = new LocationRequestDto(body);
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

    const locationResponse = await locationUseCase.createLocation({
      ...dto.toData(),
      userId,
    });
    return NextResponse.json(
      {
        data: locationResponse,
        message: "location created Successfully!",
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
