import { Injectable } from '@nestjs/common';
import { CreateRecipeInput } from './dto/create-recipe.input';
import { Recipe } from './models/recipe.model';

@Injectable()
export class RecipesService {
  private recipes: Recipe[] = [];
  async create(recipe: CreateRecipeInput): Promise<Recipe> {
    const newRecipe = {
      id: this.recipes.length.toString(),
      creationDate: new Date(),
      ...recipe,
    };
    this.recipes.push(newRecipe);
    return newRecipe;
  }

  async findAll(): Promise<Recipe[]> {
    return this.recipes;
  }

  async findOne(id: string) {
    return this.recipes.find((recipe) => recipe.id === id);
  }

  async remove(id: string) {
    this.recipes = this.recipes.filter((recipe) => recipe.id !== id);
    return true;
  }
}
