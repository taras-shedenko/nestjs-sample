import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@WebSocketGateway({ cors: { origin: '*' } })
export class EventGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('events')
  events() {
    return from([1, 2, 3]).pipe(map((data) => ({ event: 'events', data })));
  }

  @SubscribeMessage('identity')
  identity(@MessageBody() data: number) {
    return data;
  }
}
