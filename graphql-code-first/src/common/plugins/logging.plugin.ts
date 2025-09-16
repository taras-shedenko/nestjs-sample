import { Plugin } from '@nestjs/apollo';
import { ApolloServerPlugin } from '@apollo/server';

@Plugin()
export class LoggingPlugin implements ApolloServerPlugin {
  async requestDidStart() {
    console.log('Request started');
    return {
      async willSendResponse() {
        console.log('Will send response');
      },
    };
  }
}
