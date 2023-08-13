import {
  Table,
  Column,
  Model,
  DataType,
  HasMany,
  PrimaryKey,
  BelongsToMany,
} from 'sequelize-typescript';
import { Order } from '../orders/order.model';
import { Role } from 'src/roles/role.model';
import { UserRoles } from 'src/roles/userRoles.model';

@Table({ tableName: 'users', timestamps: false })
export class User extends Model<User> {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
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
  password: string;

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

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];

  @HasMany(() => Order)
  orders: Order[];
}
