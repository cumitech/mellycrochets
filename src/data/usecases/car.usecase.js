export class CarUseCase {
  constructor(carRepository) {
    this.carRepository = carRepository;
  }

  async createCar(car) {
    const existingCar = await this.carRepository.findByName(car.carname);

    if (existingCar) {
      throw new Error("Car already exists");
    }

    return this.carRepository.create(car);
  }

  async getAll() {
    return this.carRepository.getAll();
  }

  async filter(params) {
    return this.carRepository.filter(params);
  }

  async getCarById(id) {
    return this.carRepository.findById(id);
  }

  async updateCar(car) {
    return this.carRepository.update(car);
  }

  async deleteCar(id) {
    return this.carRepository.delete(id);
  }
}
