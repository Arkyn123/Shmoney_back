import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  DataType,
} from 'sequelize-typescript';
import { User } from '../users/user.model';

@Table({ tableName: 'orders' })
export class Order extends Model<Order> {
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
    type: DataType.NUMBER,
    allowNull: false,
  })
  price: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.NUMBER,
    allowNull: true,
  })
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
