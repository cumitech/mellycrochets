import { NotFoundException } from "../../exceptions/not-found.exception";
import { OrderItem } from "../entities";

export class OrderItemRepository {
  constructor() {}

  /**
   * Receives a OrderItem as parameter
   * @orderItem
   * returns void
   */
  async create(orderItem) {
    try {
      return await OrderItem.create({ ...orderItem });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @id
   * returns OrderItem
   */
  async findById(id) {
    try {
      const orderItemItem = await OrderItem.findByPk(id);

      if (!orderItemItem) {
        throw new NotFoundException("OrderItem", id);
      }
      return orderItemItem;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @title
   * returns OrderItem
   */
  async findByTitle(title) {
    try {
      const orderItemItem = await OrderItem.findOne({ where: { title } });
      return orderItemItem;
    } catch (error) {
      throw error;
    }
  }

  /*
   * Returns an array of OrderItem
   */
  async getAll() {
    try {
      const orderItems = await OrderItem.findAll();
      return orderItems;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a OrderItem as parameter
   * @orderItem
   * returns void
   */
  async update(orderItem) {
    const { id } = orderItem;
    try {
      const orderItemItem = await OrderItem.findByPk(id);

      if (!orderItemItem) {
        throw new NotFoundException("OrderItem", id.toString());
      }

      return await orderItemItem?.update({ ...orderItem });
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
      const orderItem = await OrderItem.findByPk(id);

      if (!orderItem) {
        throw new NotFoundException("OrderItem", id);
      }

      await orderItem?.destroy({
        force: true,
      });
    } catch (error) {
      throw error;
    }
  }
}
