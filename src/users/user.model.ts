import {
  Table,
  Column,
  Model,
  DataType,
  HasMany,
  PrimaryKey,
} from 'sequelize-typescript';
import { Order } from '../orders/order.model';

@Table({ tableName: 'users' })
export class User extends Model<User> {
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
  firstName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lastName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phoneNumber: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: 0,
  })
  rating: number;

  @HasMany(() => Order)
  orders: Order[];
}
