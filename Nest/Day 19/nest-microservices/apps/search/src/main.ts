import { NestFactory } from '@nestjs/core';
import { SearchModule } from './search.module.js';
import { Logger } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  process.title='search'
  const logger=new Logger('searchBoostrap');
  const port= Number(process.env.SEARCH_TCP_PORT ?? 4013)
  const app= await NestFactory.createMicroservice<MicroserviceOptions>(
    SearchModule,
    {
      transport:Transport.TCP,

    }
  )

  app.enableShutdownHooks()
  app.listen()
  logger.log(`media microservice (TCp) listening on port ${port }`)
}
await bootstrap();
