export class FuelTypeUseCase {
  constructor(fuelTypeRepository) {
    this.fuelTypeRepository = fuelTypeRepository;
  }

  async createFuelType(fuelType) {
    const existingFuelType = await this.fuelTypeRepository.findByName(fuelType.fuelTypename);

    if (existingFuelType) {
      throw new Error("FuelType already exists");
    }

    return this.fuelTypeRepository.create(fuelType);
  }

  async getAll() {
    return this.fuelTypeRepository.getAll();
  }

  async getFuelTypeById(id) {
    return this.fuelTypeRepository.findById(id);
  }

  async updateFuelType(fuelType) {
    return this.fuelTypeRepository.update(fuelType);
  }

  async deleteFuelType(id) {
    return this.fuelTypeRepository.delete(id);
  }
}
