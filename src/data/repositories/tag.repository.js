import { NotFoundException } from "../../exceptions/not-found.exception";
import { Tag } from "../entities";

export class TagRepository {
  constructor() {}

  /**
   * Receives a Tag as parameter
   * @tag
   * returns void
   */
  async create(tag) {
    try {
      return await Tag.create({ ...tag });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @id
   * returns Tag
   */
  async findById(id) {
    try {
      const tagItem = await Tag.findByPk(id);

      if (!tagItem) {
        throw new NotFoundException("Tag", id);
      }
      return tagItem;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @title
   * returns Tag
   */
  async findByTitle(title) {
    try {
      const tagItem = await Tag.findOne({ where: { title } });
      return tagItem;
    } catch (error) {
      throw error;
    }
  }

  /*
   * Returns an array of Tag
   */
  async getAll() {
    try {
      const tags = await Tag.findAll();
      return tags;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a Tag as parameter
   * @tag
   * returns void
   */
  async update(tag) {
    const { id } = tag;
    try {
      const tagItem = await Tag.findByPk(id);

      if (!tagItem) {
        throw new NotFoundException("Tag", id.toString());
      }

      return await tagItem?.update({ ...tag });
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
      const tagItem = await Tag.findByPk(id);

      if (!tagItem) {
        throw new NotFoundException("Tag", id);
      }

      await tagItem?.destroy({
        force: true,
      });
    } catch (error) {
      throw error;
    }
  }
}
