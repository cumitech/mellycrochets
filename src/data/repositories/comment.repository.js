import { NotFoundException } from "../../exceptions/not-found.exception";
import { Comment } from "../entities";

export class CommentRepository {
  constructor() {}

  /**
   * Receives a Comment as parameter
   * @comment
   * returns void
   */
  async create(comment) {
    try {
      return await Comment.create({ ...comment });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @id
   * returns Comment
   */
  async findById(id) {
    try {
      const commentItem = await Comment.findByPk(id);

      if (!commentItem) {
        throw new NotFoundException("Comment", id);
      }
      return commentItem;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @title
   * returns Comment
   */
  async findByTitle(title) {
    try {
      const commentItem = await Comment.findOne({ where: { title } });
      return commentItem;
    } catch (error) {
      throw error;
    }
  }

  /*
   * Returns an array of Comment
   */
  async getAll() {
    try {
      const comments = await Comment.findAll();
      return comments;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a Comment as parameter
   * @comment
   * returns void
   */
  async update(comment) {
    const { id } = comment;
    try {
      const commentItem = await Comment.findByPk(id);

      if (!commentItem) {
        throw new NotFoundException("Comment", id.toString());
      }

      return await commentItem?.update({ ...comment });
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
      const commentItem = await Comment.findByPk(id);

      if (!commentItem) {
        throw new NotFoundException("Comment", id);
      }

      await commentItem?.destroy({
        force: true,
      });
    } catch (error) {
      throw error;
    }
  }
}
