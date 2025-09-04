import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index.hbs')
  getIndex() {
    return { message: 'Hello, World!' };
  }
}
