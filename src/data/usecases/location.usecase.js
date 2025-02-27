export class LocationUseCase {
  constructor(locationRepository) {
    this.locationRepository = locationRepository;
  }

  async createLocation(location) {
    const existingLocation = await this.locationRepository.findByName(location.locationname);

    if (existingLocation) {
      throw new Error("Location already exists");
    }

    return this.locationRepository.create(location);
  }

  async getAll() {
    return this.locationRepository.getAll();
  }

  async getLocationById(id) {
    return this.locationRepository.findById(id);
  }

  async updateLocation(location) {
    return this.locationRepository.update(location);
  }

  async deleteLocation(id) {
    return this.locationRepository.delete(id);
  }
}
