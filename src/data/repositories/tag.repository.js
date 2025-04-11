import { NotFoundException } from "../../exceptions/not-found.exception";
import { Post, Tag } from "../entities";

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
   * @name
   * returns Tag
   */
  async findByName(name) {
    try {
      const tagItem = await Tag.findOne({
        where: { name },
        include: [
          {
            model: Post,
            as: "posts",
            through: { attributes: [] },
          },
        ],
      });
      return tagItem;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @slug
   * returns Crochet
   */
  async findBySlug(slug) {
    try {
      const tagItem = await Tag.findOne({
        where: { slug },
        include: [
          {
            model: Post,
            as: "posts",
            through: { attributes: [] },
          },
        ],
      });

      const plainTagItem = tagItem ? tagItem.toJSON() : null;

      if (!plainTagItem) {
        throw new Error("Tag not found");
      }

      return plainTagItem;
    } catch (error) {
      throw error;
    }
  }

  /*
   * Returns an array of Tag
   */
  async getAll() {
    try {
      const tags = await Tag.findAll({
        include: [
          {
            model: Post,
            as: "posts",
            through: { attributes: [] },
          },
        ],
      });
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
