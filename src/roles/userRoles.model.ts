import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { User } from '../users/user.model';
import { Role } from './role.model';

@Table({ tableName: 'user_roles', timestamps: false })
export class UserRoles extends Model<UserRoles> {
  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => Role)
  @Column
  roleId: number;
}
