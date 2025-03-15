import { NotFoundException } from "../../exceptions/not-found.exception";
import { CrochetType } from "../entities";

export class CrochetTypeRepository {
  constructor() {}

  /**
   * Receives a CrochetType as parameter
   * @crochetType
   * returns void
   */
  async create(crochetType) {
    try {
      return await CrochetType.create({ ...crochetType });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @id
   * returns CrochetType
   */
  async findById(id) {
    try {
      const crochetTypeItem = await CrochetType.findByPk(id);

      if (!crochetTypeItem) {
        throw new NotFoundException("CrochetType", id);
      }
      return crochetTypeItem;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @title
   * returns CrochetType
   */
  async findByTitle(title) {
    try {
      const crochetTypeItem = await CrochetType.findOne({ where: { title } });
      return crochetTypeItem;
    } catch (error) {
      throw error;
    }
  }

  /*
   * Returns an array of CrochetType
   */
  async getAll() {
    try {
      const crochetTypeTypes = await CrochetType.findAll();
      return crochetTypeTypes;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a CrochetType as parameter
   * @crochetType
   * returns void
   */
  async update(crochetType) {
    const { id } = crochetType;
    try {
      const crochetTypeItem = await CrochetType.findByPk(id);

      if (!crochetTypeItem) {
        throw new NotFoundException("CrochetType", id.toString());
      }

      return await crochetTypeItem?.update({ ...crochetType });
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
      const crochetTypeItem = await CrochetType.findByPk(id);

      if (!crochetTypeItem) {
        throw new NotFoundException("CrochetType", id);
      }

      await crochetTypeItem?.destroy({
        force: true,
      });
    } catch (error) {
      throw error;
    }
  }
}
