import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  UseInterceptors,
} from '@nestjs/common';
import { User } from './entities/user.entity';
import { Role } from './entities/role.entity';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class AppController {
  @Get()
  getUser(): User {
    return new User({
      id: 1,
      firstName: 'Starscream',
      lastName: 'Decepticon',
      password: 'password',
      role: new Role({ id: 1, name: 'commander' }),
    });
  }
}
