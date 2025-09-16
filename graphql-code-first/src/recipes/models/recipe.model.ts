import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType({ description: 'Recipe' })
export class Recipe {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  description: string;

  @Field()
  creationDate: Date;

  @Field(() => [String])
  ingridients: string[];
}
