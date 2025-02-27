import { NotFoundException } from "../../exceptions/not-found.exception";
import {
  Car,
  CarEngine,
  CarMake,
  CarModel,
  CarTransmission,
  FuelType,
  Location,
  Media,
} from "../entities";

export class CarRepository {
  constructor() {}

  /**
   * Receives a Car as parameter
   * @car
   * returns void
   */
  async create(car) {
    try {
      return await Car.create({ ...car });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @id
   * returns Car
   */
  async findById(id) {
    try {
      const carItem = await Car.findByPk(id);

      if (!carItem) {
        throw new NotFoundException("Car", id);
      }
      return carItem;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @title
   * returns Car
   */
  async findByTitle(title) {
    try {
      const carItem = await Car.findOne({ where: { title } });
      return carItem;
    } catch (error) {
      throw error;
    }
  }

  /*
   * Returns an array of Car
   */
  async getAll() {
    try {
      const cars = await Car.findAll({
        include: [
          { model: CarModel, include: [{ model: CarMake }] },
          { model: CarEngine, include: [{ model: FuelType }] },
          { model: CarTransmission },
          { model: Location },
          { model: Media },
        ],
      });
      return cars;
    } catch (error) {
      throw error;
    }
  }

  /*
   * Returns an array of Car
   */
  async filter(params) {
    const { engineId, carModelId, locationId, transmissionId } =
      params;
    const whereCondition = {};

    if (engineId) whereCondition.engineId = engineId;
    if (carModelId) whereCondition.carModelId = carModelId;
    // if (carMakeId) whereCondition["$CarModel.carMakeId$"] = carMakeId;
    if (locationId) whereCondition.locationId = locationId;
    if (transmissionId) whereCondition.transmissionId = transmissionId;
    try {
      const cars = await Car.findAll({
        where: whereCondition,
        include: [
          { model: CarModel, include: [{ model: CarMake }] },
          { model: CarEngine, include: [{ model: FuelType }] },
          { model: CarTransmission },
          { model: Location },
          { model: Media },
        ],
      });
      return cars;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a Car as parameter
   * @car
   * returns void
   */
  async update(car) {
    const { id } = car;
    try {
      const carItem = await Car.findByPk(id);

      if (!carItem) {
        throw new NotFoundException("Car", id.toString());
      }

      return await carItem?.update({ ...car });
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
      const carItem = await Car.findByPk(id);

      if (!carItem) {
        throw new NotFoundException("Car", id);
      }

      await carItem?.destroy({
        force: true,
      });
    } catch (error) {
      throw error;
    }
  }
}
