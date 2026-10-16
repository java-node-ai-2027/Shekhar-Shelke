import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppService } from './app.service.js';
import {AuthModule} from './auth/auth.module.js'
import { UserModule } from './user/user.module.js';
import { BookmarkModule } from './bookmark/bookmark.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [AuthModule, UserModule, BookmarkModule],
 
})
export class AppModule {}
