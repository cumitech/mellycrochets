export class CarMakeUseCase {
  constructor(carMakeRepository) {
    this.carMakeRepository = carMakeRepository;
  }

  async createCarMake(carMake) {
    const existingCarMake = await this.carMakeRepository.findByName(carMake.carMakename);

    if (existingCarMake) {
      throw new Error("CarMake already exists");
    }

    return this.carMakeRepository.create(carMake);
  }

  async getAll() {
    return this.carMakeRepository.getAll();
  }

  async getCarMakeById(id) {
    return this.carMakeRepository.findById(id);
  }

  async updateCarMake(carMake) {
    return this.carMakeRepository.update(carMake);
  }

  async deleteCarMake(id) {
    return this.carMakeRepository.delete(id);
  }
}
