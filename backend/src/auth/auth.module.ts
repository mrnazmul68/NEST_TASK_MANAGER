import { Module } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { AuthController } from './auth.controller.js';

@Module({
  providers: [AuthService, AuthController],
  controllers: [AuthController],
})
export class AuthModule {}
