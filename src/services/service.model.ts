import {
  Table,
  Column,
  Model,
  ForeignKey,
  DataType,
  PrimaryKey,
  BelongsToMany,
} from 'sequelize-typescript';
import { Order } from '../orders/order.model';
import { OrderService } from '../orders/orderService.model';

@Table({ tableName: 'services' })
export class Service extends Model<Service> {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    unique: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price: number;

  @BelongsToMany(() => Order, () => OrderService)
  orders: Order[];
}
