import { Controller, Inject, Get } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';

@Controller()
export class MathController {
  constructor(@Inject('MATH_SERVICE') private client: ClientProxy) {}

  @Get()
  execute() {
    const pattern = { cmd: 'sum' };
    const data = [1, 2, 3, 4, 5];
    return this.client.send<number>(pattern, data);
  }

  @MessagePattern()
  sum(data: number[]) {
    return (data || []).reduce((tot, val) => tot + val);
  }
}
