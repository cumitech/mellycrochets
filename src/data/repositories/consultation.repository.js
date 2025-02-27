import { NotFoundException } from "../../exceptions/not-found.exception";
import { Consultation } from "../entities";

export class ConsultationRepository {
  constructor() {}

  /**
   * Receives a Consultation as parameter
   * @consultation
   * returns void
   */
  async create(consultation) {
    try {
      return await Consultation.create({ ...consultation });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @id
   * returns Consultation
   */
  async findById(id) {
    try {
      const consultationItem = await Consultation.findByPk(id);

      if (!consultationItem) {
        throw new NotFoundException("Consultation", id);
      }
      return consultationItem;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a String as parameter
   * @title
   * returns Consultation
   */
  async findByTitle(title) {
    try {
      const consultationItem = await Consultation.findOne({ where: { title } });
      return consultationItem;
    } catch (error) {
      throw error;
    }
  }

  /*
   * Returns an array of Consultation
   */
  async getAll() {
    try {
      const consultations = await Consultation.findAll();
      return consultations;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Receives a Consultation as parameter
   * @consultation
   * returns void
   */
  async update(consultation) {
    const { id } = consultation;
    try {
      const consultationItem = await Consultation.findByPk(id);

      if (!consultationItem) {
        throw new NotFoundException("Consultation", id.toString());
      }

      return await consultationItem?.update({ ...consultation });
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
      const consultationItem = await Consultation.findByPk(id);

      if (!consultationItem) {
        throw new NotFoundException("Consultation", id);
      }

      await consultationItem?.destroy({
        force: true,
      });
    } catch (error) {
      throw error;
    }
  }
}
