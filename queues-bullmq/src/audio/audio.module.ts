import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { AudioController } from './audio.controller';
import { AudioProcessor } from './audio.processor';
import { EventListener } from './audio.event-listener';

@Module({
  imports: [BullModule.registerQueue({ name: 'audio' })],
  controllers: [AudioController],
  providers: [AudioProcessor, EventListener],
})
export class AudioModule {}
