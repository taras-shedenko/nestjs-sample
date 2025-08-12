import {
  Injectable,
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class ParseInt implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const parsedValue = parseInt(value);
    if (isNaN(parsedValue)) throw new BadRequestException();
    return parsedValue;
  }
}
