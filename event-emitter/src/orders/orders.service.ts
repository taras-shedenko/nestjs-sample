import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { OrderDto } from './dto/order.dto';
import { OrderCreatedEvent } from './events/order-created.event';

@Injectable()
export class OrdersService {
  constructor(private eventEmitter: EventEmitter2) {}

  create(orderDto: OrderDto) {
    const event = new OrderCreatedEvent(orderDto.name, orderDto.description);
    this.eventEmitter.emit('order.created', event);
    return orderDto;
  }
}
