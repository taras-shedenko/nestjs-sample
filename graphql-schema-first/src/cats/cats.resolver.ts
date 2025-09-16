import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CatsService } from './cats.service';
import { type CreateCatInput } from '../graphql.schema';

@Resolver('Cat')
export class CatsResolver {
  constructor(private catsService: CatsService) {}

  @Mutation('createCat')
  create(@Args('createCatInput') createCatInput: CreateCatInput) {
    return this.catsService.create(createCatInput);
  }

  @Query('cats')
  findAll() {
    return this.catsService.findAll();
  }

  @Query('cat')
  findOne(@Args('id') id: string) {
    return this.catsService.findOne(id);
  }

  @Mutation('removeCat')
  remove(@Args('id') id: string) {
    return this.catsService.remove(id);
  }
}
