import { join } from 'path';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ReflectionService } from '@grpc/reflection';
import { HeroController } from './hero.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HERO_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'hero',
          protoPath: join(__dirname, 'hero.proto'),
          onLoadPackageDefinition: (pkg, server) => {
            new ReflectionService(pkg).addToServer(server);
          },
        },
      },
    ]),
  ],
  controllers: [HeroController],
})
export class HeroModule {}
