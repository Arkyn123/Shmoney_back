import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './role.model';

@Injectable()
export class RolesService {
  constructor(
    @InjectModel(Role)
    private readonly roleRepository: typeof Role,
  ) {}

  getAll() {
    return this.roleRepository.findAll();
  }

  createRole(body) {
    return this.roleRepository.create(body);
  }
}
