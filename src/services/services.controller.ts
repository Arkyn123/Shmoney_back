import { Body, Controller, Get, Post } from '@nestjs/common';
import { ServicesService } from './services.service';

@Controller('services')
export class ServicesController {
  constructor(private servicesService: ServicesService) {}

  @Get()
  getAll() {
    return this.servicesService.getAll();
  }

  @Post('/create')
  createService(@Body() body) {
    return this.servicesService.createService(body);
  }
}
