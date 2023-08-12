import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Order } from '../orders/order.model';

@Table({ tableName: 'users' })
export class User extends Model<User> {
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

  @HasMany(() => Order)
  orders: Order[];

  @Column({
    type: DataType.FLOAT,
    allowNull: true,
    defaultValue: 0,
  })
  rating: number;
}
