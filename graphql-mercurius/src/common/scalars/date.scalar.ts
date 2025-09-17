import { Scalar, CustomScalar } from '@nestjs/graphql';
import { ValueNode, Kind } from 'graphql';

@Scalar('Date', () => Date)
export class DateScalar implements CustomScalar<number, Date> {
  description = 'Date custom scalar type';

  parseValue(value: number) {
    return new Date(value);
  }

  serialize(value: Date) {
    return value.getTime();
  }

  parseLiteral(value: ValueNode) {
    return (value.kind === Kind.INT ? new Date(value.value) : null) as Date;
  }
}
