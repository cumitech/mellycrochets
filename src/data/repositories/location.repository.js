import { NotFoundException } from "../../exceptions/not-found.exception";
import { Location } from "../entities";

export class LocationRepository {
  constructor() {}

  /**
   * Receives a Location as parameter
   * @location
   * returns void
   */
  async create(location) {
    try {
      return await Location.create({ ...location });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @id
   * returns Location
   */
  async findById(id) {
    try {
      const locationItem = await Location.findByPk(id);

      if (!locationItem) {
        throw new NotFoundException("Location", id);
      }
      return locationItem;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @title
   * returns Location
   */
  async findByTitle(title) {
    try {
      const locationItem = await Location.findOne({ where: { title } });
      return locationItem;
    } catch (error) {
      throw error;
    }
  }

  /*
   * Returns an array of Location
   */
  async getAll() {
    try {
      const locations = await Location.findAll();
      return locations;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a Location as parameter
   * @location
   * returns void
   */
  async update(location) {
    const { id } = location;
    try {
      const locationItem = await Location.findByPk(id);

      if (!locationItem) {
        throw new NotFoundException("Location", id.toString());
      }

      return await locationItem?.update({ ...location });
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
      const locationItem = await Location.findByPk(id);

      if (!locationItem) {
        throw new NotFoundException("Location", id);
      }

      await locationItem?.destroy({
        force: true,
      });
    } catch (error) {
      throw error;
    }
  }
}
