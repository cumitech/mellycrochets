export class UserUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async createUser(user) {
    const existingUser = await this.userRepository.findByEmail(user.email);

    if (existingUser) {
      throw new Error("User already exists");
    }

    return this.userRepository.create(user);
  }

  async getAll() {
    return this.userRepository.getAll();
  }

  async getUserById(id) {
    return this.userRepository.findById(id);
  }

  async updateUser(user) {
    return this.userRepository.update(user);
  }

  async deleteUser(id) {
    return this.userRepository.delete(id);
  }

  async findByEmail(email) {
    return await this.userRepository.findByEmail(email);
  }
}
