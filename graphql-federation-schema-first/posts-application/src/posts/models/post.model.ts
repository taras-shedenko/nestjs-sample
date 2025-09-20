import { ObjectType, Directive, ID, Field, Int } from '@nestjs/graphql';
import { User } from './user.model';

@ObjectType()
@Directive('@key(fields: "id")')
export class Post {
  @Field(() => ID)
  id: number;

  @Field()
  title: string;

  @Field({ nullable: true })
  body: string;

  @Field(() => Int)
  authorId: number;

  @Field(() => User)
  user: User;
}
