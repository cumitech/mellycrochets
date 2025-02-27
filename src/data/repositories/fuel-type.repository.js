import { NotFoundException } from "../../exceptions/not-found.exception";
import { FuelType } from "../entities";

export class FuelTypeRepository {
  constructor() {}

  /**
   * Receives a FuelType as parameter
   * @fuelType
   * returns void
   */
  async create(fuelType) {
    try {
      return await FuelType.create({ ...fuelType });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @id
   * returns FuelType
   */
  async findById(id) {
    try {
      const fuelTypeItem = await FuelType.findByPk(id);

      if (!fuelTypeItem) {
        throw new NotFoundException("FuelType", id);
      }
      return fuelTypeItem;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @title
   * returns FuelType
   */
  async findByTitle(title) {
    try {
      const fuelTypeItem = await FuelType.findOne({ where: { title } });
      return fuelTypeItem;
    } catch (error) {
      throw error;
    }
  }

  /*
   * Returns an array of FuelType
   */
  async getAll() {
    try {
      const fuelTypes = await FuelType.findAll();
      return fuelTypes;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a FuelType as parameter
   * @fuelType
   * returns void
   */
  async update(fuelType) {
    const { id } = fuelType;
    try {
      const fuelTypeItem = await FuelType.findByPk(id);

      if (!fuelTypeItem) {
        throw new NotFoundException("FuelType", id.toString());
      }

      return await fuelTypeItem?.update({ ...fuelType });
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
      const fuelTypeItem = await FuelType.findByPk(id);

      if (!fuelTypeItem) {
        throw new NotFoundException("FuelType", id);
      }

      await fuelTypeItem?.destroy({
        force: true,
      });
    } catch (error) {
      throw error;
    }
  }
}
