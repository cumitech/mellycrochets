import { NotFoundException } from "../../exceptions/not-found.exception";
import { CarTransmission } from "../entities";
export class CarTransmissionRepository {
  constructor() {}

  /**
   * Receives a CarTransmission as parameter
   * @carTransmission
   * returns void
   */
  async create(carTransmission) {
    try {
      return await CarTransmission.create({ ...carTransmission });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @id
   * returns CarTransmission
   */
  async findById(id) {
    try {
      const carTransmissionItem = await CarTransmission.findByPk(id);

      if (!carTransmissionItem) {
        throw new NotFoundException("CarTransmission", id);
      }
      return carTransmissionItem;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @title
   * returns CarTransmission
   */
  async findByTitle(title) {
    try {
      const carTransmissionItem = await CarTransmission.findOne({
        where: { title },
      });
      return carTransmissionItem;
    } catch (error) {
      throw error;
    }
  }

  /*
   * Returns an array of CarTransmission
   */
  async getAll() {
    try {
      const carTransmissions = await CarTransmission.findAll();
      return carTransmissions;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a CarTransmission as parameter
   * @carTransmission
   * returns void
   */
  async update(carTransmission) {
    const { id } = carTransmission;
    try {
      const carTransmissionItem = await CarTransmission.findByPk(id);

      if (!carTransmissionItem) {
        throw new NotFoundException("CarTransmission", id.toString());
      }

      return await carTransmissionItem?.update({ ...carTransmission });
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
      const carTransmissionItem = await CarTransmission.findByPk(id);

      if (!carTransmissionItem) {
        throw new NotFoundException("CarTransmission", id);
      }

      await carTransmissionItem?.destroy({
        force: true,
      });
    } catch (error) {
      throw error;
    }
  }
}
