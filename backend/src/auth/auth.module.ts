import { Module } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { AuthController } from './auth.controller.js';
import { AuthRepository } from './auth.repository.js';

@Module({
  providers: [AuthService, AuthController, AuthRepository],
  controllers: [AuthController],
})
export class AuthModule {}
