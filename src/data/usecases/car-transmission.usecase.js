export class CarTransmissionUseCase {
  constructor(carTransmissionRepository) {
    this.carTransmissionRepository = carTransmissionRepository;
  }

  async createCarTransmission(carTransmission) {
    const existingCarTransmission = await this.carTransmissionRepository.findByName(carTransmission.carTransmissionname);

    if (existingCarTransmission) {
      throw new Error("CarTransmission already exists");
    }

    return this.carTransmissionRepository.create(carTransmission);
  }

  async getAll() {
    return this.carTransmissionRepository.getAll();
  }

  async getCarTransmissionById(id) {
    return this.carTransmissionRepository.findById(id);
  }

  async updateCarTransmission(carTransmission) {
    return this.carTransmissionRepository.update(carTransmission);
  }

  async deleteCarTransmission(id) {
    return this.carTransmissionRepository.delete(id);
  }
}
