import { NestFactory } from "@nestjs/core";
import { MediaModule } from "./media.module.js";
import { Logger } from "@nestjs/common";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";

async function boostrap() {
  
  process.title='catalog';
  const logger=new Logger('mediaBoostrap')
  const port=Number(process.env.MEDIA_TCP_PORT ?? 4012);
 const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MediaModule,
    {
      transport:Transport.TCP,
      options:{
        host:'0.0.0.0',
        port,
      }
    }
  );
  app.enableShutdownHooks();
  await app.listen()
  
  logger.log(`madia microservice (TCp) listening on port ${port }`)
}

boostrap()