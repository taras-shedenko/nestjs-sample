import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User) {}
  create(userDto: UserDto) {
    return this.userModel.create({
      firstName: userDto.firstName,
      lastName: userDto.lastName,
      isActive: userDto.isActive,
    });
  }

  findAll() {
    return this.userModel.findAll();
  }

  findOne(id: number) {
    return this.userModel.findOne({ where: { id } });
  }

  update(id: number, userDto: UserDto) {
    return this.userModel.update(
      {
        firstName: userDto.firstName,
        lastName: userDto.lastName,
        isActive: userDto.isActive,
      },
      { where: { id } },
    );
  }

  remove(id: number) {
    return this.userModel.destroy({ where: { id } });
  }
}
