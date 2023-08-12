import { Module } from '@nestjs/common';
import { ServicesController } from './services.controller';
import { ServicesService } from './services.service';
import { Service } from './service.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [ServicesController],
  providers: [ServicesService],
  imports: [SequelizeModule.forFeature([Service])],
})
export class ServicesModule {}
