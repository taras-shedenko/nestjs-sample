import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Cat } from '../cats/interfaces/cat.interface';
import { CatDto } from './dto/cat.dto';

@Injectable()
export class CatsService {
  constructor(@Inject('CAT_MODEL') private catModel: Model<Cat>) {}
  create(catDto: CatDto) {
    return this.catModel.create(catDto);
  }

  findAll() {
    return this.catModel.find().exec();
  }

  findOne(id: string) {
    return this.catModel.findOne({ _id: id }).exec();
  }

  async update(id: string, catDto: CatDto) {
    await this.catModel.findByIdAndUpdate({ _id: id }, catDto).exec();
    return this.catModel.findOne({ _id: id }).exec();
  }

  async remove(id: string) {
    await this.catModel.findByIdAndDelete({ _id: id });
    return;
  }
}
