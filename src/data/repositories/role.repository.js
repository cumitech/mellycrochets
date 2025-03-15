import { NotFoundException } from "../../exceptions/not-found.exception";
import { Role } from "../entities";

export class RoleRepository {
  constructor() {}

  /**
   * Receives a Role as parameter
   * @role
   * returns void
   */
  async create(role) {
    try {
      return await Role.create({ ...role });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @id
   * returns Role
   */
  async findById(id) {
    try {
      const roleItem = await Role.findByPk(id);

      if (!roleItem) {
        throw new NotFoundException("Role", id);
      }
      return roleItem;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @title
   * returns Role
   */
  async findByTitle(title) {
    try {
      const roleItem = await Role.findOne({ where: { title } });
      return roleItem;
    } catch (error) {
      throw error;
    }
  }

  /*
   * Returns an array of Role
   */
  async getAll() {
    try {
      const roles = await Role.findAll();
      return roles;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a Role as parameter
   * @role
   * returns void
   */
  async update(role) {
    const { id } = role;
    try {
      const roleItem = await Role.findByPk(id);

      if (!roleItem) {
        throw new NotFoundException("Role", id.toString());
      }

      return await roleItem?.update({ ...role });
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
      const roleItem = await Role.findByPk(id);

      if (!roleItem) {
        throw new NotFoundException("Role", id);
      }

      await roleItem?.destroy({
        force: true,
      });
    } catch (error) {
      throw error;
    }
  }
}
