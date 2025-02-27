export class CarEngineUseCase {
  constructor(carEngineRepository) {
    this.carEngineRepository = carEngineRepository;
  }

  async createCarEngine(carEngine) {
    const existingCarEngine = await this.carEngineRepository.findByName(carEngine.carEnginename);

    if (existingCarEngine) {
      throw new Error("CarEngine already exists");
    }

    return this.carEngineRepository.create(carEngine);
  }

  async getAll() {
    return this.carEngineRepository.getAll();
  }

  async getCarEngineById(id) {
    return this.carEngineRepository.findById(id);
  }

  async updateCarEngine(carEngine) {
    return this.carEngineRepository.update(carEngine);
  }

  async deleteCarEngine(id) {
    return this.carEngineRepository.delete(id);
  }
}
