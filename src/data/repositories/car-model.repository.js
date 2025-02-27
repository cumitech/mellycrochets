import { NotFoundException } from "../../exceptions/not-found.exception";
import { CarModel } from "../entities";
export class CarModelRepository {
  constructor() {}

  /**
   * Receives a CarModel as parameter
   * @carModel
   * returns void
   */
  async create(carModel) {
    try {
      return await CarModel.create({ ...carModel });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @id
   * returns CarModel
   */
  async findById(id) {
    try {
      const carModelItem = await CarModel.findByPk(id);

      if (!carModelItem) {
        throw new NotFoundException("CarModel", id);
      }
      return carModelItem;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @title
   * returns CarModel
   */
  async findByTitle(title) {
    try {
      const carModelItem = await CarModel.findOne({ where: { title } });
      return carModelItem;
    } catch (error) {
      throw error;
    }
  }

  /*
   * Returns an array of CarModel
   */
  async getAll() {
    try {
      const carModels = await CarModel.findAll();
      return carModels;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a CarModel as parameter
   * @carModel
   * returns void
   */
  async update(carModel) {
    const { id } = carModel;
    try {
      const carModelItem = await CarModel.findByPk(id);

      if (!carModelItem) {
        throw new NotFoundException("CarModel", id.toString());
      }

      return await carModelItem?.update({ ...carModel });
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
      const carModelItem = await CarModel.findByPk(id);

      if (!carModelItem) {
        throw new NotFoundException("CarModel", id);
      }

      await carModelItem?.destroy({
        force: true,
      });
    } catch (error) {
      throw error;
    }
  }
}
