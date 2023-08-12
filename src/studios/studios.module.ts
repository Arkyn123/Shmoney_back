import { Module } from '@nestjs/common';
import { StudiosController } from './studios.controller';
import { StudiosService } from './studios.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Studio } from './studio.model';

@Module({
  controllers: [StudiosController],
  providers: [StudiosService],
  imports: [SequelizeModule.forFeature([Studio])],
})
export class StudiosModule {}
