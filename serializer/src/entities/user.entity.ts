import { Exclude, Expose, Transform } from 'class-transformer';
import { Role } from './role.entity';

export class User {
  id: number;
  firstName: string;
  lastName: string;
  @Exclude()
  password: string;
  @Expose()
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  @Transform(({ value }) => value.name)
  role: Role;
  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
