import { InputType, Field } from '@nestjs/graphql';
import { Length, MaxLength, IsOptional } from 'class-validator';

@InputType()
export class CreateRecipeInput {
  @Field()
  @MaxLength(30)
  title: string;

  @Field({ nullable: true })
  @IsOptional()
  @Length(30, 250)
  description: string;

  @Field(() => [String])
  ingredients: string[];
}
