import { NotFoundException } from "../../exceptions/not-found.exception";
import { Subscriber } from "../entities";

export class SubscriberRepository {
  constructor() {}

  /**
   * Receives a Subscriber as parameter
   * @subscriber
   * returns void
   */
  async create(subscriber) {
    try {
      return await Subscriber.create({ ...subscriber });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @id
   * returns Subscriber
   */
  async findById(id) {
    try {
      const subscriberItem = await Subscriber.findByPk(id);

      if (!subscriberItem) {
        throw new NotFoundException("Subscriber", id);
      }
      return subscriberItem;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @title
   * returns Subscriber
   */
  async findByTitle(title) {
    try {
      const subscriberItem = await Subscriber.findOne({ where: { title } });
      return subscriberItem;
    } catch (error) {
      throw error;
    }
  }

  /*
   * Returns an array of Subscriber
   */
  async getAll() {
    try {
      const subscribers = await Subscriber.findAll();
      return subscribers;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a Subscriber as parameter
   * @subscriber
   * returns void
   */
  async update(subscriber) {
    const { id } = subscriber;
    try {
      const subscriberItem = await Subscriber.findByPk(id);

      if (!subscriberItem) {
        throw new NotFoundException("Subscriber", id.toString());
      }

      return await subscriberItem?.update({ ...subscriber });
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
      const subscriberItem = await Subscriber.findByPk(id);

      if (!subscriberItem) {
        throw new NotFoundException("Subscriber", id);
      }

      await subscriberItem?.destroy({
        force: true,
      });
    } catch (error) {
      throw error;
    }
  }
}
