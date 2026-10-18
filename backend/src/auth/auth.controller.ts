import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { registerSchema, type RegisterInput } from './dto/register.dto.js';
import { ZodValidationPipe } from '../common/pipes/zod-validation.pipe.js';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(
    @Body(new ZodValidationPipe(registerSchema))
    body: RegisterInput,
  ) {
    // return this.authService.register(body);
    // return this.authService.register(body);
  }
}
