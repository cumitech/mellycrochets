import { validate } from "class-validator";
import { NextResponse } from "next/server";
import { RoleRepository } from "../../../data/repositories/role.repository";
import { RoleUseCase } from "../../../data/usecases/role.usecase";
import RoleRequestDto from "../../../data/presentation/dtos/role-request.dto";
import { displayValidationErrors } from "../../../lib/displayValidationErrors";
import authOptions from "../../../lib/options";
import { getServerSession } from "next-auth";

const roleRepository = new RoleRepository();
const roleUseCase = new RoleUseCase(roleRepository);

export async function GET(request) {
  try {
    const roles = await roleUseCase.getAll();

    return NextResponse.json(roles);
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
    const dto = new RoleRequestDto(body);
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

    const roleResponse = await roleUseCase.createRole({
      ...dto.toData(),
      userId,
    });
    return NextResponse.json(
      {
        data: roleResponse,
        message: "role created Successfully!",
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
