import { validate } from "class-validator";
import { NextResponse } from "next/server";
import { CountryRepository } from "../../../data/repositories/country.repository";
import { CountryUseCase } from "../../../data/usecases/country.usecase";
import CountryRequestDto from "../../../data/presentation/dtos/country-request.dto";
import { displayValidationErrors } from "../../../lib/displayValidationErrors";
import authOptions from "../../../lib/options";
import { getServerSession } from "next-auth";

const countryRepository = new CountryRepository();
const countryUseCase = new CountryUseCase(countryRepository);

export async function GET(request) {
  try {
    const countries = await countryUseCase.getAll(); 

    return NextResponse.json(countries);
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
    const dto = new CountryRequestDto(body);
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

    const countryResponse = await countryUseCase.createCountry({
      ...dto.toData(),
      userId,
    });
    return NextResponse.json(
      {
        data: countryResponse,
        message: "country created Successfully!",
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
