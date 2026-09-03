import { Module } from '@nestjs/common';
import { AuthContoller } from './auth.controller.js';
import { AuthService } from './auth.service.js';

@Module({
    controllers:[AuthContoller],
    providers:[AuthService]
})
export class AuthModule {}
