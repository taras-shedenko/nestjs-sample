import {
  Controller,
  Post,
  UseInterceptors,
  Body,
  UploadedFile,
} from '@nestjs/common';
import { type Express } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class AppController {
  @Post('file')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(
    @Body() name: { name: string },
    @UploadedFile() file: Express.Multer.File,
  ) {
    return { name, file: file.buffer.toString() };
  }
}
