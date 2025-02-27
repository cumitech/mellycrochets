import { NotFoundException } from "../../exceptions/not-found.exception";
import { CarEngine } from "../entities";
export class CarEngineRepository {
  constructor() {}

  /**
   * Receives a CarEngine as parameter
   * @carEngine
   * returns void
   */
  async create(carEngine) {
    try {
      return await CarEngine.create<CarEngine>({ ...carEngine });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @id
   * returns CarEngine
   */
  async findById(id) {
    try {
      const carEngineItem = await CarEngine.findByPk(id);

      if (!carEngineItem) {
        throw new NotFoundException("CarEngine", id);
      }
      return carEngineItem;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @title
   * returns CarEngine
   */
  async findByTitle(title) {
    try {
      const carEngineItem = await CarEngine.findOne({ where: { title } });
      return carEngineItem;
    } catch (error) {
      throw error;
    }
  }

  /*
   * Returns an array of CarEngine
   */
  async getAll() {
    try {
      const carEngines = await CarEngine.findAll();
      return carEngines;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a CarEngine as parameter
   * @carEngine
   * returns void
   */
  async update(carEngine) {
    const { id } = carEngine;
    try {
      const carEngineItem = await CarEngine.findByPk(id);

      if (!carEngineItem) {
        throw new NotFoundException("CarEngine", id.toString());
      }

      return await carEngineItem?.update({ ...carEngine });
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
      const carEngineItem = await CarEngine.findByPk(id);

      if (!carEngineItem) {
        throw new NotFoundException("CarEngine", id);
      }

      await carEngineItem?.destroy({
        force: true,
      });
    } catch (error) {
      throw error;
    }
  }
}
