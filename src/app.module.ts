import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { databaseModule } from './database/db.module';
import { ServicesModule } from './services/services.module';
import { StudiosModule } from './studios/studios.module';
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [
    databaseModule,
    UsersModule,
    OrdersModule,
    ServicesModule,
    StudiosModule,
    RolesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
