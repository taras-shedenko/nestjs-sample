import { Controller, Sse } from '@nestjs/common';
import { interval, map } from 'rxjs';

@Controller()
export class AppController {
  @Sse('sse')
  sse() {
    return interval(1000).pipe(map(() => 'Hello, World!'));
  }
}
