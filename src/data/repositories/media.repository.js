import { NotFoundException } from "../../exceptions/not-found.exception";
import { Media } from "../entities";

export class MediaRepository {
  constructor() {}

  /**
   * Receives a Media as parameter
   * @media
   * returns void
   */
  async create(media) {
    try {
      return await Media.create({ ...media });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @id
   * returns Media
   */
  async findById(id) {
    try {
      const mediaItem = await Media.findByPk(id);

      if (!mediaItem) {
        throw new NotFoundException("Media", id);
      }
      return mediaItem;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @title
   * returns Media
   */
  async findByTitle(title) {
    try {
      const mediaItem = await Media.findOne({ where: { title } });
      return mediaItem;
    } catch (error) {
      throw error;
    }
  }

  /*
   * Returns an array of Media
   */
  async getAll() {
    try {
      const medias = await Media.findAll();
      return medias;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a Media as parameter
   * @media
   * returns void
   */
  async update(media) {
    const { id } = media;
    try {
      const mediaItem = await Media.findByPk(id);

      if (!mediaItem) {
        throw new NotFoundException("Media", id.toString());
      }

      return await mediaItem?.update({ ...media });
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
      const mediaItem = await Media.findByPk(id);

      if (!mediaItem) {
        throw new NotFoundException("Media", id);
      }

      await mediaItem?.destroy({
        force: true,
      });
    } catch (error) {
      throw error;
    }
  }
}
