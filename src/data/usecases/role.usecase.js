export class RoleUseCase {
  constructor(roleRepository) {
    this.roleRepository = roleRepository;
  }

  async createRole(role) {
    const existingRole = await this.roleRepository.findByName(role.rolename);

    if (existingRole) {
      throw new Error("Role already exists");
    }

    return this.roleRepository.create(role);
  }

  async getAll() {
    return this.roleRepository.getAll();
  }

  async getRoleById(id) {
    return this.roleRepository.findById(id);
  }

  async updateRole(role) {
    return this.roleRepository.update(role);
  }

  async deleteRole(id) {
    return this.roleRepository.delete(id);
  }
}
