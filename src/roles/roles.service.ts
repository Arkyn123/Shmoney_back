import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './role.model';
import { RoleDto } from './dto/role.dto';
import { defaultroles } from 'src/default/default.roles';

@Injectable()
export class RolesService {
  constructor(
    @InjectModel(Role)
    private readonly roleRepository: typeof Role,
  ) {}

  async getAll() {
    const roles = await this.roleRepository.findAll();
    if (roles.length === 0)
      return defaultroles.map(async (role) => {
        await this.roleRepository.create(role);
      });

    return roles;
  }

  async createRole(dto: RoleDto) {
    return await this.roleRepository.create(dto);
  }

  async getRoleByName(name: string) {
    return await this.roleRepository.findOne({ where: { name } });
  }
}
