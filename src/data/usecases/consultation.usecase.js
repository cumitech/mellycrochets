export class ConsultationUseCase {
  constructor(consultationRepository) {
    this.consultationRepository = consultationRepository;
  }

  async createConsultation(consultation) {
    const existingConsultation = await this.consultationRepository.findByName(consultation.consultationname);

    if (existingConsultation) {
      throw new Error("Consultation already exists");
    }

    return this.consultationRepository.create(consultation);
  }

  async getAll() {
    return this.consultationRepository.getAll();
  }

  async getConsultationById(id) {
    return this.consultationRepository.findById(id);
  }

  async updateConsultation(consultation) {
    return this.consultationRepository.update(consultation);
  }

  async deleteConsultation(id) {
    return this.consultationRepository.delete(id);
  }
}
