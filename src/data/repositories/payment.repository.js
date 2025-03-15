import { NotFoundException } from "../../exceptions/not-found.exception";
import { Payment } from "../entities";

export class PaymentRepository {
  constructor() {}

  /**
   * Receives a Payment as parameter
   * @payment
   * returns void
   */
  async create(payment) {
    try {
      return await Payment.create({ ...payment });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @id
   * returns Payment
   */
  async findById(id) {
    try {
      const paymentItem = await Payment.findByPk(id);

      if (!paymentItem) {
        throw new NotFoundException("Payment", id);
      }
      return paymentItem;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @title
   * returns Payment
   */
  async findByTitle(title) {
    try {
      const paymentItem = await Payment.findOne({ where: { title } });
      return paymentItem;
    } catch (error) {
      throw error;
    }
  }

  /*
   * Returns an array of Payment
   */
  async getAll() {
    try {
      const payments = await Payment.findAll();
      return payments;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a Payment as parameter
   * @payment
   * returns void
   */
  async update(payment) {
    const { id } = payment;
    try {
      const paymentItem = await Payment.findByPk(id);

      if (!paymentItem) {
        throw new NotFoundException("Payment", id.toString());
      }

      return await paymentItem?.update({ ...payment });
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
      const paymentItem = await Payment.findByPk(id);

      if (!paymentItem) {
        throw new NotFoundException("Payment", id);
      }

      await paymentItem?.destroy({
        force: true,
      });
    } catch (error) {
      throw error;
    }
  }
}
