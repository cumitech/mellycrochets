import { validate } from "class-validator";
import { NextResponse } from "next/server";
import { InquiryRepository } from "../../../data/repositories/inquiry.repository";
import { InquiryUseCase } from "../../../data/usecases/inquiry.usecase";
import InquiryRequestDto from "../../../data/presentation/dtos/inquiry-request.dto";
import { displayValidationErrors } from "../../../lib/displayValidationErrors";
import authOptions from "../../../lib/options";
import { getServerSession } from "next-auth";

const inquiryRepository = new InquiryRepository();
const inquiryUseCase = new InquiryUseCase(inquiryRepository);

export async function GET(request) {
  try {
    const inquiries = await inquiryUseCase.getAll();

    return NextResponse.json(inquiries);
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

  if (!session || !session.inquiry) {
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

  const inquiryId = session.inquiry.id;

  try {
    const body = await request.json();
    const dto = new InquiryRequestDto(body);
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

    const inquiryResponse = await inquiryUseCase.createInquiry({
      ...dto.toData(),
      inquiryId,
    });
    return NextResponse.json(
      {
        data: inquiryResponse,
        message: "inquiry created Successfully!",
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
