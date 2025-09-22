import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
} from '@nestjs/websockets';
import { Server } from 'ws';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@WebSocketGateway(8080)
export class EventGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('events')
  events() {
    return from([1, 2, 3]).pipe(map((data) => ({ event: 'events', data })));
  }
}
