import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { Order } from './order.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/user.model';
import { Service } from 'src/services/service.model';
import { OrderService } from './orderService.model';
import { Studio } from 'src/studios/studio.model';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
  imports: [
    SequelizeModule.forFeature([Order, User, Service, Studio, OrderService]),
  ],
})
export class OrdersModule {}
