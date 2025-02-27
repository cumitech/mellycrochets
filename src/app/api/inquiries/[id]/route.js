import InquiryRequestDto from "../../../../data/presentation/dtos/inquiry-request.dto";
// import { InquiryMapper } from "../../../../data/presentation/mappers/mapper";
import { InquiryRepository } from "../../../../data/repositories/inquiry.repository";
import { InquiryUseCase } from "../../../../data/usecases/inquiry.usecase";
import { displayValidationErrors } from "../../../../lib/displayValidationErrors";
import { validate } from "class-validator";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import authOptions from "../../../../lib/options";
import { emptyInquiry } from "../../../../data/models/inquiry";

const inquiryRepository = new InquiryRepository();
const inquiryUseCase = new InquiryUseCase(inquiryRepository);
// const inquiryMapper = new InquiryMapper();

export async function PATCH(req, { params }) {
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

  if (!params?.id) {
    return NextResponse.json(
      {
        message: "Invalid request: ID is required.",
        success: false,
        data: null,
      },
      { status: 400 }
    );
  }

  const inquiryId = session.inquiry.id;

  try {
    const dto = new InquiryRequestDto(await req.json());
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

    const id = params.id;

    const obj = {
      ...emptyInquiry,
      ...dto.toData(),
      id: id,
      inquiryId,
    };
    const updatedInquiry = await inquiryUseCase.updateInquiry(obj);

    return NextResponse.json(
      {
        data: updatedInquiry,
        message: "Inquiry Updated Successfully!",
        validationErrors: [],
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        data: null,
        message: error.message,
        validationErrors: [error],
        success: false,
      },
      { status: 500 }
    );
  }
}

export async function GET(req, { params }) {
  if (!params?.id) {
    return NextResponse.json(
      { message: "ID is required", success: false, data: null },
      { status: 400 }
    );
  }

  try {
    const id = params.id;

    const inquiry = await inquiryUseCase.getInquiryById(id);
    // const inquiryDTO = inquiryMapper.toDTO(inquiry);
    return NextResponse.json(inquiry);
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

export async function DELETE(req, { params }) {
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

  try {
    const id = params.id;

    await inquiryUseCase.deleteInquiry(id);

    return NextResponse.json({
      message: `Operation successfully completed!`,
      validationErrors: [],
      success: true,
      data: null,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
        data: null,
        validationErrors: [error],
        success: false,
      },
      { status: 400 }
    );
  }
}
