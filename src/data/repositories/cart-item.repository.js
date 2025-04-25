import { NotFoundException } from "../../exceptions/not-found.exception";
import { CartItem, Crochet, User } from "../entities";

export class CartItemRepository {
  constructor() {}

  /**
   * Receives a CartItem as parameter
   * @cartItem
   * returns void
   */
  async create(cartItem) {
    try {
      return await CartItem.create({ ...cartItem });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @id
   * returns CartItem
   */
  async findById(id) {
    try {
      const cartItemItem = await CartItem.findByPk(id);

      if (!cartItemItem) {
        throw new NotFoundException("CartItem", id);
      }
      return cartItemItem;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @title
   * returns CartItem
   */
  async findByTitle(title) {
    try {
      const cartItemItem = await CartItem.findOne({ where: { title } });
      return cartItemItem;
    } catch (error) {
      throw error;
    }
  }

  /*
   * Returns an array of CartItem
   */
  async getAll() {
    try {
      const cartItems = await CartItem.findAll({
        include: [
          {
            model: Crochet,
            as: "crochet",
          },
          {
            model: User,
            as: "user",
          },
        ],
      });
      return cartItems;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a CartItem as parameter
   * @cartItem
   * returns void
   */
  async update(cartItem) {
    const { id } = cartItem;
    try {
      const cartItemItem = await CartItem.findByPk(id);

      if (!cartItemItem) {
        throw new NotFoundException("CartItem", id.toString());
      }

      return await cartItemItem?.update({ ...cartItem });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a string as parameter
   * @id
   * returns void
   */
  async delete(id, userId) {
    try {
      const cartItem = await CartItem.findOne({
        where: {
          crochetId: id,
          userId,
        },
      });

      if (!cartItem) {
        throw new NotFoundException("CartItem", id);
      }

      await cartItem?.destroy({
        force: true,
      });
    } catch (error) {
      console.error("error: ", error);
      throw error;
    }
  }
}
