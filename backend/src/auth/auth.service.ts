import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository.js';

//@Injectable() NestJS-কে জানায় যে একটি class-কে 
//NestJS-এর Dependency Injection (DI) system-এর মাধ্যমে manage করা যাবে।
@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}
}
