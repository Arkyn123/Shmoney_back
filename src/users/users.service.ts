import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import * as bcrypt from 'bcryptjs';
import { UserDto } from './dto/user.dto';
import { RolesService } from 'src/roles/roles.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userRepository: typeof User,
    private readonly roleService: RolesService,
  ) {}

  async getAll() {
    return await this.userRepository.findAll({
      include: [{ all: true }],
    });
  }

  async createUser(dto: UserDto) {
    const user = await this.userRepository.create(dto);
    const role = await this.roleService.getRoleByName('Пользователь');

    await user.$set('roles', [role.id]);
    user.roles = [role];
    console.log(user);

    return user;
  }

  async getUserById(id: number) {
    return await this.userRepository.findOne({
      where: { id },
      include: { all: true },
    });
  }

  async getUserByNumber(phoneNumber: string) {
    return await this.userRepository.findOne({
      where: { phoneNumber },
      include: { all: true },
    });
  }

  async addRoleToUser(body) {
    const { userId, roleName } = body;
    console.log(userId);

    const user = await this.userRepository.findByPk(userId);
    if (!user) {
      throw new Error('Пользователь не найден');
    }

    const role = await this.roleService.getRoleByName(roleName);
    if (!role) {
      throw new Error('Роль не найдена');
    }

    await user.$add('role', role.id);

    return user;
  }
}
