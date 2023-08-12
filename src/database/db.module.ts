import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Order } from 'src/orders/order.model';
import { OrderService } from 'src/orders/orderService.model';
import { Service } from 'src/services/service.model';
import { Studio } from 'src/studios/studio.model';
import { User } from 'src/users/user.model';
import { config } from 'src/utils/config';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: config[process.env.NODE_ENV].database.dialect,
      host: config[process.env.NODE_ENV].database.host,
      port: +config[process.env.NODE_ENV].database.port,
      username: config[process.env.NODE_ENV].database.username,
      password: config[process.env.NODE_ENV].database.password,
      database: config[process.env.NODE_ENV].database.database,
      autoLoadModels: true,
      models: [User, Order, Service, Studio, OrderService],
    }),
  ],
  controllers: [],
  providers: [],
})
export class databaseModule {}
