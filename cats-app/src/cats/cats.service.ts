import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private cats: Cat[] = [];
  create(cat: CreateCatDto) {
    const newId =
      this.cats
        .map((cat) => cat.id)
        .reduce((max, val) => (val > max ? val : max), 0) + 1;
    const newCat = { ...cat, id: newId };
    this.cats.push(newCat);
    return newCat;
  }

  findAll() {
    return this.cats;
  }

  findOne(id: number) {
    return this.cats.find((cat) => cat.id === id);
  }

  remove(id: number) {
    const indexToDelete = this.cats.findIndex((cat) => cat.id === id);
    if (indexToDelete < 0) return false;
    return !!this.cats.splice(indexToDelete, 1).length;
  }
}
