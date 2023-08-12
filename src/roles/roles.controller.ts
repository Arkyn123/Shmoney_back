import { Body, Controller, Get, Post } from '@nestjs/common';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @Get()
  getAll() {
    return this.rolesService.getAll();
  }

  @Post('/create')
  createRole(@Body() body) {
    return this.rolesService.createRole(body);
  }
}
