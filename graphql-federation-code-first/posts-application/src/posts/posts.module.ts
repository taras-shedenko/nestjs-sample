import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { ApolloServerPluginInlineTrace } from '@apollo/server/plugin/inlineTrace';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { UsersResolver } from './users.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: { federation: 2 },
      plugins: [ApolloServerPluginInlineTrace()],
    }),
  ],
  providers: [PostsResolver, UsersResolver, PostsService],
})
export class PostsModule {}
