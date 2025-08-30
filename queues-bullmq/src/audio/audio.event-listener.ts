import {
  QueueEventsListener,
  QueueEventsHost,
  OnQueueEvent,
} from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';

@QueueEventsListener('audio')
export class EventListener extends QueueEventsHost {
  private logger = new Logger(EventListener.name);
  @OnQueueEvent('active') onActive() {
    this.logger.log('Queue Active...');
  }
}
