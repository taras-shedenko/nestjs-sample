import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';

@Module({
  imports: [ConfigModule],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
