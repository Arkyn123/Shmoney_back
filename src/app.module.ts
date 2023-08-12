import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { OrdersService } from './orders/orders.service';
import { OrdersController } from './orders/orders.controller';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [UsersModule, OrdersModule],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class AppModule {}
