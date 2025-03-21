import { NotFoundException } from "../../exceptions/not-found.exception";
import { Crochet, CrochetType } from "../entities";

export class CrochetRepository {
  constructor() {}

  /**
   * Receives a Crochet as parameter
   * @crochet
   * returns void
   */
  async create(crochet) {
    try {
      return await Crochet.create({ ...crochet });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @id
   * returns Crochet
   */
  async findById(id) {
    try {
      const crochetItem = await Crochet.findByPk(id, {
        include: [
          {
            model: CrochetType,
            as: "crochetType",
          },
        ],
      });

      if (!crochetItem) {
        throw new NotFoundException("Crochet", id);
      }

      const formatedCrochetItem = {
        ...crochetItem.get(), // Get plain JSON
        imageUrls: JSON.parse(crochetItem.imageUrls), // Convert string to array
      };

      return formatedCrochetItem;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @title
   * returns Crochet
   */
  async findByTitle(title) {
    try {
      const crochetItem = await Crochet.findOne({ where: { title } });
      const formatedCrochetItem = {
        ...crochetItem.get(), // Get plain JSON
        imageUrls: JSON.parse(crochetItem.imageUrls), // Convert string to array
      };
      return formatedCrochetItem;
    } catch (error) {
      throw error;
    }
  }

  /*
   * Returns an array of Crochet
   */
  async getAll() {
    try {
      const crochets = await Crochet.findAll({
        include: [
          {
            model: CrochetType,
            as: "crochetType",
          },
        ],
      });
      // Convert imageUrls to an array if it's stored as a string
      const formattedCrochets = crochets.map((crochet) => ({
        ...crochet.get(), // Get plain JSON
        imageUrls: JSON.parse(crochet.imageUrls), // Convert string to array
      }));
      return formattedCrochets;
    } catch (error) {
      throw error;
    }
  }
  /*
   * Returns an array of Car
   */
  async filter(params) {
    const { brand, crochetTypeId, specie, tag } = params;
    const whereCondition = {};

    if (brand) whereCondition.brand = brand;
    if (crochetTypeId) whereCondition.crochetTypeId = crochetTypeId;
    if (specie) whereCondition.specie = specie;
    if (tag) whereCondition.tag = tag;
    try {
      const crochets = await Crochet.findAll({
        where: whereCondition,
        include: [
          {
            model: CrochetType,
            as: "crochetType",
          },
        ],
      });
      const formattedCrochets = crochets.map((crochet) => ({
        ...crochet.get(), // Get plain JSON
        imageUrls: JSON.parse(crochet.imageUrls), // Convert string to array
      }));
      return formattedCrochets;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a Crochet as parameter
   * @crochet
   * returns void
   */
  async update(crochet) {
    const { id } = crochet;
    try {
      const crochetItem = await Crochet.findByPk(id);

      if (!crochetItem) {
        throw new NotFoundException("Crochet", id.toString());
      }

      return await crochetItem?.update({ ...crochet });
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
      const crochetItem = await Crochet.findByPk(id);

      if (!crochetItem) {
        throw new NotFoundException("Crochet", id);
      }

      await crochetItem?.destroy({
        force: true,
      });
    } catch (error) {
      throw error;
    }
  }
}
