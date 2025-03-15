import { NotFoundException } from "../../exceptions/not-found.exception";
import { Order } from "../entities";

export class OrderRepository {
  constructor() {}

  /**
   * Receives a Order as parameter
   * @order
   * returns void
   */
  async create(order) {
    try {
      return await Order.create({ ...order });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @id
   * returns Order
   */
  async findById(id) {
    try {
      const orderItem = await Order.findByPk(id);

      if (!orderItem) {
        throw new NotFoundException("Order", id);
      }
      return orderItem;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @title
   * returns Order
   */
  async findByTitle(title) {
    try {
      const orderItem = await Order.findOne({ where: { title } });
      return orderItem;
    } catch (error) {
      throw error;
    }
  }

  /*
   * Returns an array of Order
   */
  async getAll() {
    try {
      const orders = await Order.findAll();
      return orders;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a Order as parameter
   * @order
   * returns void
   */
  async update(order) {
    const { id } = order;
    try {
      const orderItem = await Order.findByPk(id);

      if (!orderItem) {
        throw new NotFoundException("Order", id.toString());
      }

      return await orderItem?.update({ ...order });
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
      const orderItem = await Order.findByPk(id);

      if (!orderItem) {
        throw new NotFoundException("Order", id);
      }

      await orderItem?.destroy({
        force: true,
      });
    } catch (error) {
      throw error;
    }
  }
}
