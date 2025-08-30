import { Controller, Post, Body } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';

@Controller('audio')
export class AudioController {
  constructor(@InjectQueue('audio') private audioQueue: Queue) {}

  @Post('transcode')
  async transcode(@Body() data) {
    await this.audioQueue.add(
      'transcode',
      { data },
      { removeOnComplete: true },
    );
  }
}
