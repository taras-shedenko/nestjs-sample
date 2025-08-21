import { Injectable } from '@nestjs/common';

export type User = { id: string; login: string; password: string };

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: '1', login: 'user1', password: '1234' },
    { id: '2', login: 'user2', password: '1234' },
    { id: '3', login: 'user3', password: '1234' },
  ];

  async findByLogin(login: string) {
    return this.users.find((user) => user.login === login);
  }
}
