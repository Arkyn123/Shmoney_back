import {
  Table,
  Column,
  Model,
  ForeignKey,
  DataType,
  PrimaryKey,
  BelongsToMany,
} from 'sequelize-typescript';
import { User } from '../users/user.model';
import { Service } from '../services/service.model';
import { OrderService } from './orderService.model';
import { Studio } from 'src/studios/studio.model';

@Table({ tableName: 'orders', timestamps: false })
export class Order extends Model<Order> {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  date: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  status: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  totalPrice: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  userId: number;

  @ForeignKey(() => Studio)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  studioId: number;

  @BelongsToMany(() => Service, () => OrderService)
  services: Service[];
}
