import {
  Table,
  Column,
  Model,
  ForeignKey,
  DataType,
  PrimaryKey,
} from 'sequelize-typescript';
import { Order } from './order.model';
import { Service } from '../services/service.model';

@Table({ tableName: 'order_services' })
export class OrderService extends Model<OrderService> {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    unique: true,
  })
  id: number;

  @ForeignKey(() => Order)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  orderId: number;

  @ForeignKey(() => Service)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  serviceId: number;
}
