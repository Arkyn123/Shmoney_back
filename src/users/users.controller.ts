import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/auth/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  getAll() {
    return this.usersService.getAll();
  }

  @Post('addrole')
  addRoleToUser(@Body() body) {
    return this.usersService.addRoleToUser(body);
  }
}
