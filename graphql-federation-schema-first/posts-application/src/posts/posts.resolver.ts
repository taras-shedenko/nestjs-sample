import { Resolver, Query, ResolveField, Args, Parent } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { type Post } from './interfaces/post.interface';

@Resolver('Post')
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query()
  getPosts() {
    return this.postsService.findAll();
  }

  @Query()
  findPost(@Args('id') id: number) {
    return this.postsService.findOneById(id);
  }

  @ResolveField()
  user(@Parent() post: Post) {
    return { __typename: 'User', id: post.authorId };
  }
}
