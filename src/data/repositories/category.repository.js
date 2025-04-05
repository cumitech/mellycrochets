import { NotFoundException } from "../../exceptions/not-found.exception";
import { Category, Post } from "../entities";

export class CategoryRepository {
  constructor() {}

  /**
   * Receives a Category as parameter
   * @category
   * returns void
   */
  async create(category) {
    try {
      return await Category.create({ ...category });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @id
   * returns Category
   */
  async findById(id) {
    try {
      const categoryItem = await Category.findByPk(id);

      if (!categoryItem) {
        throw new NotFoundException("Category", id);
      }
      return categoryItem;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @name
   * returns Category
   */
  async findByName(name) {
    try {
      const categoryItem = await Category.findOne({ where: { name } });
      return categoryItem;
    } catch (error) {
      throw error;
    }
  }

  /*
   * Returns an array of Category
   */
  async getAll() {
    try {
      const categories = await Category.findAll({
        include: [
          {
            model: Post,
            as: "posts",
          },
        ],
      });
      return categories;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a Category as parameter
   * @category
   * returns void
   */
  async update(category) {
    const { id } = category;
    try {
      const categoryItem = await Category.findByPk(id);

      if (!categoryItem) {
        throw new NotFoundException("Category", id.toString());
      }

      return await categoryItem?.update({ ...category });
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
      const categoryItem = await Category.findByPk(id);

      if (!categoryItem) {
        throw new NotFoundException("Category", id);
      }

      await categoryItem?.destroy({
        force: true,
      });
    } catch (error) {
      throw error;
    }
  }
}
