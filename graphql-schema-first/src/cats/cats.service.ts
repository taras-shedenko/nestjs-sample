import { Injectable } from '@nestjs/common';
import { CreateCatInput } from '../graphql.schema';
import { Cat } from '../graphql.schema';

@Injectable()
export class CatsService {
  private cats: Cat[] = [];

  async create(createCatInput: CreateCatInput) {
    const newCat = { id: this.cats.length.toString(), ...createCatInput };
    this.cats.push(newCat);
    return newCat;
  }

  async findAll() {
    return this.cats;
  }

  async findOne(id: string) {
    return this.cats.find((cat) => cat.id === id);
  }

  async remove(id: string) {
    this.cats = this.cats.filter((cat) => cat.id !== id);
    return true;
  }
}
