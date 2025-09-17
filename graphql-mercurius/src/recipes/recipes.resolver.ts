import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { NotFoundException } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { Recipe } from './models/recipe.model';
import { CreateRecipeInput } from './dto/create-recipe.input';

@Resolver(() => Recipe)
export class RecipesResolver {
  constructor(private readonly recipesService: RecipesService) {}

  @Mutation(() => Recipe)
  create(@Args('recipe') recipe: CreateRecipeInput) {
    return this.recipesService.create(recipe);
  }

  @Query(() => [Recipe], { name: 'recipes' })
  findAll() {
    return this.recipesService.findAll();
  }

  @Query(() => Recipe, { name: 'recipe' })
  async findOne(@Args('id') id: string) {
    const recipe = await this.recipesService.findOne(id);
    if (!recipe) throw new NotFoundException(`Not found Recipe with ID ${id}`);
    return recipe;
  }

  @Mutation(() => Boolean)
  remove(@Args('id', { type: () => String }) id: string) {
    return this.recipesService.remove(id);
  }
}
