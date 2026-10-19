import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository.js';


@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}
}
