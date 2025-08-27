import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { DatabaseModule } from '../database/database.module';
import { CatsController } from './cats.controller';
import { catsProvider } from './cats.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [CatsController],
  providers: [CatsService, catsProvider],
})
export class CatsModule {}
