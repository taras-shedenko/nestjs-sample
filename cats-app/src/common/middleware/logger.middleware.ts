import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddle implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request: ', req.url);
    next();
  }
}
