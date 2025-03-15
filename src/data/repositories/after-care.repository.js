import { NotFoundException } from "../../exceptions/not-found.exception";
import { AfterCare } from "../entities";

export class AfterCareRepository {
  constructor() {}

  /**
   * Receives a AfterCare as parameter
   * @afterCare
   * returns void
   */
  async create(afterCare) {
    try {
      return await AfterCare.create({ ...afterCare });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @id
   * returns AfterCare
   */
  async findById(id) {
    try {
      const afterCareItem = await AfterCare.findByPk(id);

      if (!afterCareItem) {
        throw new NotFoundException("AfterCare", id);
      }
      return afterCareItem;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @title
   * returns AfterCare
   */
  async findByTitle(title) {
    try {
      const afterCareItem = await AfterCare.findOne({ where: { title } });
      return afterCareItem;
    } catch (error) {
      throw error;
    }
  }

  /*
   * Returns an array of AfterCare
   */
  async getAll() {
    try {
      const afterCares = await AfterCare.findAll();
      return afterCares;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a AfterCare as parameter
   * @afterCare
   * returns void
   */
  async update(afterCare) {
    const { id } = afterCare;
    try {
      const afterCareItem = await AfterCare.findByPk(id);

      if (!afterCareItem) {
        throw new NotFoundException("AfterCare", id.toString());
      }

      return await afterCareItem?.update({ ...afterCare });
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
      const afterCareItem = await AfterCare.findByPk(id);

      if (!afterCareItem) {
        throw new NotFoundException("AfterCare", id);
      }

      await afterCareItem?.destroy({
        force: true,
      });
    } catch (error) {
      throw error;
    }
  }
}
