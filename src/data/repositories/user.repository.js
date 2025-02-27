import { NotFoundException } from "../../exceptions/not-found.exception";
import { User } from "../entities";

export class UserRepository {
  constructor() {}

  /**
   * Receives a User as parameter
   * @user
   * returns void
   */
  async create(user) {
    try {
      return await User.create({ ...user });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @id
   * returns User
   */
  async findById(id) {
    try {
      const userItem = await User.findByPk(id);

      if (!userItem) {
        throw new NotFoundException("User", id);
      }
      return userItem;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @username
   * returns User
   */
  async findByName(username) {
    try {
      const userItem = await User.findOne({ where: { username } });
      return userItem;
    } catch (error) {
      throw error;
    }
  }

  async findByEmail(email) {
    try {
      const userItem = await User.findOne({
        where: { email },
      });
      return userItem;
    } catch (error) {
      throw error;
    }
  }

  /*
   * Returns an array of User
   */
  async getAll() {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a User as parameter
   * @user
   * returns void
   */
  async update(user) {
    const { id } = user;
    try {
      const userItem = await User.findByPk(id);

      if (!userItem) {
        throw new NotFoundException("User", id.toString());
      }

      return await userItem?.update({ ...user });
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
      const userItem = await User.findByPk(id);

      if (!userItem) {
        throw new NotFoundException("User", id);
      }

      await userItem?.destroy({
        force: true,
      });
    } catch (error) {
      throw error;
    }
  }
}
