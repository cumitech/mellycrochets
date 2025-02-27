export class CountryUseCase {
  constructor(countryRepository) {
    this.countryRepository = countryRepository;
  }

  async createCountry(country) {
    const existingCountry = await this.countryRepository.findByName(country.countryname);

    if (existingCountry) {
      throw new Error("Country already exists");
    }

    return this.countryRepository.create(country);
  }

  async getAll() {
    return this.countryRepository.getAll();
  }

  async getCountryById(id) {
    return this.countryRepository.findById(id);
  }

  async updateCountry(country) {
    return this.countryRepository.update(country);
  }

  async deleteCountry(id) {
    return this.countryRepository.delete(id);
  }
}
