import { Resolver, Query, ResolveReference, Args, ID } from '@nestjs/graphql';
import { UsersService } from './users.service';

type UserRef = { id: number };

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}
  @Query()
  getUser(@Args('id') id: number) {
    return this.usersService.findById(id);
  }

  @ResolveReference()
  resolveReference(ref: UserRef) {
    return this.getUser(ref.id);
  }
}
