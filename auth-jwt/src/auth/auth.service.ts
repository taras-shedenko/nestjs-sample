import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(login: string, password: string) {
    const user = await this.usersService.findByLogin(login);
    if (!user || user.password !== password) throw new UnauthorizedException();
    return this.jwtService.signAsync({ sub: user.id, login: user.login });
  }
}
