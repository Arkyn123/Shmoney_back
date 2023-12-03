import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Service } from './service.model';
import { ServiceDto } from './dto/service.dto';

@Injectable()
export class ServicesService {
  constructor(
    @InjectModel(Service)
    private readonly serviceRepository: typeof Service,
  ) {}

  async getAll() {
    return await this.serviceRepository.findAll();
  }

  async createService(dto: ServiceDto) {
    return await this.serviceRepository.create(dto);
  }
}
