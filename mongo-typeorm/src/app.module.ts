import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoModule } from './photo/photo.module';
import { Photo } from './photo/entities/photo.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      database: 'mongo-typeorm',
      username: 'mongo-typeorm',
      password: '1234',
      entities: [Photo],
      autoLoadEntities: true,
      synchronize: true,
    }),
    PhotoModule,
  ],
})
export class AppModule {}
