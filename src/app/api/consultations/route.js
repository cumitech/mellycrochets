import { validate } from "class-validator";
import { NextResponse } from "next/server";
import { ConsultationRepository } from "../../../data/repositories/consultation.repository";
import { ConsultationUseCase } from "../../../data/usecases/consultation.usecase";
import ConsultationRequestDto from "../../../data/presentation/dtos/consultation-request.dto";
import { displayValidationErrors } from "../../../lib/displayValidationErrors";
import authOptions from "../../../lib/options";
import { getServerSession } from "next-auth";

const consultationRepository = new ConsultationRepository();
const consultationUseCase = new ConsultationUseCase(consultationRepository);

export async function GET(request) {
  try {
    const consultations = await consultationUseCase.getAll();

    return NextResponse.json(consultations);
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
    const dto = new ConsultationRequestDto(body);
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

    const consultationResponse = await consultationUseCase.createConsultation({
      ...dto.toData(),
      userId,
    });
    return NextResponse.json(
      {
        data: consultationResponse,
        message: "consultation created Successfully!",
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
