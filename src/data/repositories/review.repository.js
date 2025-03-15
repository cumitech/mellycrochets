import { NotFoundException } from "../../exceptions/not-found.exception";
import { Review } from "../entities";

export class ReviewRepository {
  constructor() {}

  /**
   * Receives a Review as parameter
   * @review
   * returns void
   */
  async create(review) {
    try {
      return await Review.create({ ...review });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @id
   * returns Review
   */
  async findById(id) {
    try {
      const reviewItem = await Review.findByPk(id);

      if (!reviewItem) {
        throw new NotFoundException("Review", id);
      }
      return reviewItem;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @title
   * returns Review
   */
  async findByTitle(title) {
    try {
      const reviewItem = await Review.findOne({ where: { title } });
      return reviewItem;
    } catch (error) {
      throw error;
    }
  }

  /*
   * Returns an array of Review
   */
  async getAll() {
    try {
      const reviews = await Review.findAll();
      return reviews;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a Review as parameter
   * @review
   * returns void
   */
  async update(review) {
    const { id } = review;
    try {
      const reviewItem = await Review.findByPk(id);

      if (!reviewItem) {
        throw new NotFoundException("Review", id.toString());
      }

      return await reviewItem?.update({ ...review });
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
      const reviewItem = await Review.findByPk(id);

      if (!reviewItem) {
        throw new NotFoundException("Review", id);
      }

      await reviewItem?.destroy({
        force: true,
      });
    } catch (error) {
      throw error;
    }
  }
}
