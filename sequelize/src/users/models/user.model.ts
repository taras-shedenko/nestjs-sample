import { Table, Model, Column } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  email: string;

  @Column({ defaultValue: 1 })
  isActive: boolean;
}
