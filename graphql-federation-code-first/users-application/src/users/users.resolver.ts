import { ParseIntPipe } from '@nestjs/common';
import { Resolver, Query, ResolveReference, Args, ID } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './models/user.model';

type UserRef = { id: number };

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => User)
  getUser(@Args({ name: 'id', type: () => ID }, ParseIntPipe) id: number) {
    return this.usersService.findById(id);
  }

  @ResolveReference()
  resolveReference(ref: UserRef) {
    return this.getUser(ref.id);
  }
}
