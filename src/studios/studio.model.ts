import {
  Table,
  Column,
  Model,
  DataType,
  HasMany,
  PrimaryKey,
} from 'sequelize-typescript';
import { Order } from '../orders/order.model';

@Table({ tableName: 'studios' })
export class Studio extends Model<Studio> {
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
  adress: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phoneNumber: string;

  @HasMany(() => Order)
  orders: Order[];
}
