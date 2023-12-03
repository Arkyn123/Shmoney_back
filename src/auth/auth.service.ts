import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { User } from '../users/user.model';
import { UserDto } from 'src/users/dto/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(body) {
    const user = await this.validateUser({
      phoneNumber: body.phoneNumber,
      password: body.password,
    });
    return this.generateToken(user);
  }

  async registration(userDto: UserDto) {
    const candidate = await this.userService.getUserByNumber(
      userDto.phoneNumber,
    );
    if (candidate) {
      throw new HttpException(
        'Пользователь с таким номером существует',
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashPassword = await bcrypt.hash(userDto.password, 5);
    const user = await this.userService.createUser({
      ...userDto,
      password: hashPassword,
    });
    return this.generateToken(user);
  }

  async decode(token) {
    const decoded = await this.jwtService.decode(token);
    return decoded;
  }

  async getUserByToken(token: string) {
    const decoded = await this.decode(token);
    console.log(decoded);

    return await this.userService.getUserById(decoded['id']);
  }

  private async generateToken(user: User) {
    const payload = { id: user.id, name: user.name };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  private async validateUser(userDto) {
    const { phoneNumber, password } = userDto;

    const user = await this.userService.getUserByNumber(phoneNumber);

    if (user) {
      const passwordEquals = await bcrypt.compare(password, user.password);
      if (passwordEquals) {
        return user;
      }
    }

    throw new UnauthorizedException({
      message: 'Некорректный номер телефона или пароль',
    });
  }
}
