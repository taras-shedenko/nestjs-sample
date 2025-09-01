import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { OrderCreatedEvent } from '../events/order-created.event';

@Injectable()
export class OrderCreatedListener {
  private logger = new Logger(OrderCreatedListener.name);

  @OnEvent('order.created')
  onOrderCreated(event: OrderCreatedEvent) {
    this.logger.log(event);
  }
}
