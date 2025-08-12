import {
  Catch,
  HttpException,
  ExceptionFilter,
  ArgumentsHost,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const req: Request = ctx.getRequest();
    const res: Response = ctx.getResponse();
    res.status(exception.getStatus()).json({
      timeStamp: new Date().toISOString(),
      message: exception.message,
      path: req.url,
    });
  }
}
