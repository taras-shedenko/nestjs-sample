import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { OrderCreatedListener } from './listeners/order-created.listener';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService, OrderCreatedListener],
})
export class OrdersModule {}
