import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { User } from './models/user.model';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly postsService: PostsService) {}

  @ResolveField()
  posts(@Parent() user: User) {
    return this.postsService.findByAuthorId(Number(user.id));
  }
}
