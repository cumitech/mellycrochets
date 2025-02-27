export class CarModelUseCase {
  constructor(carModelRepository) {
    this.carModelRepository = carModelRepository;
  }

  async createCarModel(carModel) {
    const existingCarModel = await this.carModelRepository.findByName(carModel.carModelname);

    if (existingCarModel) {
      throw new Error("CarModel already exists");
    }

    return this.carModelRepository.create(carModel);
  }

  async getAll() {
    return this.carModelRepository.getAll();
  }

  async getCarModelById(id) {
    return this.carModelRepository.findById(id);
  }

  async updateCarModel(carModel) {
    return this.carModelRepository.update(carModel);
  }

  async deleteCarModel(id) {
    return this.carModelRepository.delete(id);
  }
}
