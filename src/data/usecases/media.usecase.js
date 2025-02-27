export class MediaUseCase {
  constructor(mediaRepository) {
    this.mediaRepository = mediaRepository;
  }

  async createMedia(media) {
    const existingMedia = await this.mediaRepository.findByTitle(media.title);

    if (existingMedia) {
      throw new Error("Media already exists");
    }

    return this.mediaRepository.create(media);
  }

  async getAll() {
    return this.mediaRepository.getAll();
  }

  async getMediaById(id) {
    return this.mediaRepository.findById(id);
  }

  async updateMedia(media) {
    return this.mediaRepository.update(media);
  }

  async deleteMedia(id) {
    return this.mediaRepository.delete(id);
  }
}
