import { NotFoundException } from "../../exceptions/not-found.exception";
import { Car, Country, Location } from "../entities";

export class CountryRepository {
  constructor() {}

  /**
   * Receives a Country as parameter
   * @country
   * returns void
   */
  async create(country) {
    try {
      return await Country.create({ ...country });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @id
   * returns Country
   */
  async findById(id) {
    try {
      const countryItem = await Country.findByPk(id);

      if (!countryItem) {
        throw new NotFoundException("Country", id);
      }
      return countryItem;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @title
   * returns Country
   */
  async findByTitle(title) {
    try {
      const countryItem = await Country.findOne({ where: { title } });
      return countryItem;
    } catch (error) {
      throw error;
    }
  }

  /*
   * Returns an array of Country
   */
  async getAll() {
    try {
      const countries = await Country.findAll({
        include: [
          {
            model: Location,
            include: [
              {
                model: Car,
              },
            ],
          },
        ],
      });
      return countries;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a Country as parameter
   * @country
   * returns void
   */
  async update(country) {
    const { id } = country;
    try {
      const countryItem = await Country.findByPk(id);

      if (!countryItem) {
        throw new NotFoundException("Country", id.toString());
      }

      return await countryItem?.update({ ...country });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a string as parameter
   * @id
   * returns void
   */
  async delete(id) {
    try {
      const countryItem = await Country.findByPk(id);

      if (!countryItem) {
        throw new NotFoundException("Country", id);
      }

      await countryItem?.destroy({
        force: true,
      });
    } catch (error) {
      throw error;
    }
  }
}
