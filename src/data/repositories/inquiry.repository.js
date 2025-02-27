import { NotFoundException } from "../../exceptions/not-found.exception";
import { Inquiry } from "../entities";

export class InquiryRepository {
  constructor() {}

  /**
   * Receives a Inquiry as parameter
   * @inquiry
   * returns void
   */
  async create(inquiry) {
    try {
      return await Inquiry.create({ ...inquiry });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @id
   * returns Inquiry
   */
  async findById(id) {
    try {
      const inquiryItem = await Inquiry.findByPk(id);

      if (!inquiryItem) {
        throw new NotFoundException("Inquiry", id);
      }
      return inquiryItem;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @title
   * returns Inquiry
   */
  async findByTitle(title) {
    try {
      const inquiryItem = await Inquiry.findOne({ where: { title } });
      return inquiryItem;
    } catch (error) {
      throw error;
    }
  }

  /*
   * Returns an array of Inquiry
   */
  async getAll() {
    try {
      const inquiries = await Inquiry.findAll();
      return inquiries;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a Inquiry as parameter
   * @inquiry
   * returns void
   */
  async update(inquiry) {
    const { id } = inquiry;
    try {
      const inquiryItem = await Inquiry.findByPk(id);

      if (!inquiryItem) {
        throw new NotFoundException("Inquiry", id.toString());
      }

      return await inquiryItem?.update({ ...inquiry });
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
      const inquiryItem = await Inquiry.findByPk(id);

      if (!inquiryItem) {
        throw new NotFoundException("Inquiry", id);
      }

      await inquiryItem?.destroy({
        force: true,
      });
    } catch (error) {
      throw error;
    }
  }
}
