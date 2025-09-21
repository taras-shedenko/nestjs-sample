import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { User } from './models/user.model';
import { Post } from './models/post.model';
import { PostsService } from './posts.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly postsService: PostsService) {}

  @ResolveField(() => [Post])
  posts(@Parent() user: User) {
    return this.postsService.findByAuthorId(user.id);
  }
}
