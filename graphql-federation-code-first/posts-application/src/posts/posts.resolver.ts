import {
  Resolver,
  Query,
  ResolveField,
  Args,
  Parent,
  ID,
} from '@nestjs/graphql';
import { ParseIntPipe } from '@nestjs/common';
import { Post } from './models/post.model';
import { PostsService } from './posts.service';

@Resolver(() => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query(() => [Post])
  posts() {
    return this.postsService.findAll();
  }

  @Query(() => Post)
  post(@Args({ name: 'id', type: () => ID }, ParseIntPipe) id: number) {
    return this.postsService.findOneById(id);
  }

  @ResolveField('user')
  user(@Parent() post: Post) {
    return { __typename: 'User', id: post.authorId };
  }
}
