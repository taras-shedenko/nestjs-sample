import {
  Injectable,
  NestInterceptor,
  CallHandler,
  ExecutionContext,
} from '@nestjs/common';
import { timeout } from 'rxjs';

@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>) {
    return next.handle().pipe(timeout(5000));
  }
}
