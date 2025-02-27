import { NotFoundException } from "../../exceptions/not-found.exception";
import { CarMake } from "../entities";
export class CarMakeRepository {
  constructor() {}

  /**
   * Receives a CarMake as parameter
   * @carMake
   * returns void
   */
  async create(carMake) {
    try {
      return await CarMake.create({ ...carMake });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @id
   * returns CarMake
   */
  async findById(id) {
    try {
      const carMakeItem = await CarMake.findByPk(id);

      if (!carMakeItem) {
        throw new NotFoundException("CarMake", id);
      }
      return carMakeItem;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @title
   * returns CarMake
   */
  async findByTitle(title) {
    try {
      const carMakeItem = await CarMake.findOne({ where: { title } });
      return carMakeItem;
    } catch (error) {
      throw error;
    }
  }

  /*
   * Returns an array of CarMake
   */
  async getAll() {
    try {
      const carMakes = await CarMake.findAll();
      return carMakes;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a CarMake as parameter
   * @carMake
   * returns void
   */
  async update(carMake) {
    const { id } = carMake;
    try {
      const carMakeItem = await CarMake.findByPk(id);

      if (!carMakeItem) {
        throw new NotFoundException("CarMake", id.toString());
      }

      return await carMakeItem?.update({ ...carMake });
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
      const carMakeItem = await CarMake.findByPk(id);
      if (!carMakeItem) {
        throw new NotFoundException("CarMake", id);
      }

      await carMakeItem?.destroy({
        force: true,
      });
    } catch (error) {
      throw error;
    }
  }
}
