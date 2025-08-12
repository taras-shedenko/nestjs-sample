import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddle } from './common/middleware/logger.middleware';

@Module({
  imports: [CoreModule, CatsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddle);
  }
}
