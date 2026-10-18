import { Module } from '@nestjs/common';
import { ObserveModule } from './observe.js';
import { AuthModule } from './auth/auth.module.js';
import { PrismaModule } from './prisma/prisma.module.js';

const observeEnabled = process.env.OBSERVE_ENABLED === 'true';

function createObserveModule() {
  const appKey = process.env.OBSERVE_APP_KEY;
  const appSecret = process.env.OBSERVE_APP_SECRET;
  if (!appKey || !appSecret) {
    throw new Error(
      'OBSERVE_APP_KEY and OBSERVE_APP_SECRET are required when OBSERVE_ENABLED=true',
    );
  }

  return ObserveModule.forRoot({
    appKey,
    appSecret,
    serviceId: 'taskvault',
    ...(process.env.OBSERVE_ENDPOINT
      ? { endpoint: process.env.OBSERVE_ENDPOINT }
      : {}),
  });
}

@Module({
  imports: [
    ...(observeEnabled ? [createObserveModule()] : []),
    AuthModule,
    PrismaModule,
  ],
})
export class AppModule {}
