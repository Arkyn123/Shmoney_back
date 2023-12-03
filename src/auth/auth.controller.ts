import { Body, Controller, Param, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { UserDto } from 'src/users/dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  login(
    @Body()
    body: {
      phoneNumber: string;
      password: string;
    },
  ) {
    return this.authService.login(body);
  }

  @Post('/registration')
  registration(@Body() userDto: UserDto) {
    return this.authService.registration(userDto);
  }

  @Post('/decode/:token')
  getUserByToken(@Param('token') token: string) {
    return this.authService.getUserByToken(token);
  }
}
