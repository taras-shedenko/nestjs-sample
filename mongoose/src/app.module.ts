import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    CatsModule,
    MongooseModule.forRoot('mongodb://mongoose:1234@localhost:27017/mongoose'),
  ],
})
export class AppModule {}
