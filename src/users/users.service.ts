import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userRepository: typeof User,
  ) {}
  async getAll() {}

  getOne(id) {
    // const user = await this.userRepository.findOne({ where: { id } });
    switch (id) {
      case 1:
        return { role: 'user' };
      case 2:
        return { role: 'admin' };
      case 3:
        return { role: 'employee' };
      default:
        throw new Error('User not found');
    }
  }
}
