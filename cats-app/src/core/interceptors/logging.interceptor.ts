import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, handler: CallHandler) {
    const now = Date.now();
    return handler
      .handle()
      .pipe(tap(() => console.log(`Processed in ${Date.now() - now}ms`)));
  }
}
