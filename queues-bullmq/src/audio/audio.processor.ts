import { Processor, WorkerHost, OnWorkerEvent } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';

@Processor('audio')
export class AudioProcessor extends WorkerHost {
  private logger = new Logger(AudioProcessor.name);

  async process(job: Job) {
    this.logger.log(`Processing ${job.name}: `, job.data);
  }

  @OnWorkerEvent('active')
  onActive() {
    this.logger.log('Worker Active...');
  }
}
