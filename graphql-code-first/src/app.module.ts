import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLDirective, DirectiveLocation } from 'graphql';
import { RecipesModule } from './recipes/recipes.module';
import { LoggingPlugin } from './common/plugins/logging.plugin';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      plugins: [new LoggingPlugin()],
      autoSchemaFile: 'schema.gql',
      graphiql: true,
      buildSchemaOptions: {
        directives: [
          new GraphQLDirective({
            name: 'upper',
            locations: [DirectiveLocation.FIELD_DEFINITION],
          }),
        ],
      },
    }),
    RecipesModule,
  ],
})
export class AppModule {}
