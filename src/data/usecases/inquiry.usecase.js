export class InquiryUseCase {
  constructor(inquiryRepository) {
    this.inquiryRepository = inquiryRepository;
  }

  async createInquiry(inquiry) {
    const existingInquiry = await this.inquiryRepository.findByName(inquiry.inquiryname);

    if (existingInquiry) {
      throw new Error("Inquiry already exists");
    }

    return this.inquiryRepository.create(inquiry);
  }

  async getAll() {
    return this.inquiryRepository.getAll();
  }

  async getInquiryById(id) {
    return this.inquiryRepository.findById(id);
  }

  async updateInquiry(inquiry) {
    return this.inquiryRepository.update(inquiry);
  }

  async deleteInquiry(id) {
    return this.inquiryRepository.delete(id);
  }
}
