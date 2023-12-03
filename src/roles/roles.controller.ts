import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @Get()
  getAll() {
    return this.rolesService.getAll();
  }

  @Get(':name')
  getOneByName(@Param('name') name: string) {
    return this.rolesService.getRoleByName(name);
  }

  @Post('/create')
  createRole(@Body() body) {
    return this.rolesService.createRole(body);
  }
}
