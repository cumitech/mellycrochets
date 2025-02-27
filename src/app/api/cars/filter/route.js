import { NextResponse } from "next/server";
import { CarRepository } from "../../../../data/repositories/car.repository";
import { CarUseCase } from "../../../../data/usecases/car.usecase";

const carRepository = new CarRepository();
const carUseCase = new CarUseCase(carRepository);

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const engineId = searchParams.get("engineId");
  const carModelId = searchParams.get("carModelId");
  // const carMakeId = searchParams.get("carMakeId");
  const locationId = searchParams.get("locationId");
  const transmissionId = searchParams.get("transmissionId");

  try {
    const cars = await carUseCase.filter({
      engineId,
      carModelId,
      // carMakeId,
      locationId,
      transmissionId,
    });

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
