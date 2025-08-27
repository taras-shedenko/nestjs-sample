import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { Photo } from './entities/photo.entity';
import { PhotoDto } from './dto/photo.dto';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo) private photoRepository: MongoRepository<Photo>,
  ) {}

  create(photoDto: PhotoDto) {
    return this.photoRepository.save(photoDto);
  }

  findAll() {
    return this.photoRepository.find();
  }

  findOne(id: string) {
    return this.photoRepository.findOneBy(new ObjectId(id));
  }

  update(id: string, photoDto: PhotoDto) {
    return this.photoRepository.update(new ObjectId(id), photoDto);
  }

  remove(id: string) {
    return this.photoRepository.delete(new ObjectId(id));
  }
}
