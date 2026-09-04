import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { UsersModule } from './user/user.module.js';
import { AuthModule } from './auth/auth.module.js';
// import { PrismaService } from './prisma/prisma.service.js';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModule } from './task/task.module.js';
import { LoggerMiddleware } from './middleware/logger.middleware.js';
import { TaskMiddleware } from './middleware/task.middleware.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nest-project'),
    AuthModule,
    TaskModule,
  ],
  controllers: [],
  // providers: [PrismaService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');

    consumer.apply(TaskMiddleware).forRoutes({
      path:'tasks',
      method:RequestMethod.POST
    })
  }

}
