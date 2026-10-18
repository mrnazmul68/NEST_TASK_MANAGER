import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ObserveInstrument } from './observe.js';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import { Logger, ValidationPipe } from '@nestjs/common';

const observeEnabled = process.env.OBSERVE_ENABLED === 'true';

async function bootstrap() {
  const appOptions = observeEnabled ? { instrument: ObserveInstrument } : {};
  const app = await NestFactory.create(AppModule, appOptions);

  //logger
  const logger = new Logger('Bootstrap');

  //security middleware
  app.use(helmet());
  app.use(
    cors({
      origin: [process.env.FRONTEND_URL || 'http://localhost:5000'],
      credentials: true,
    }),
  );
  app.use(morgan('combined'));

  //validate body data
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  //prefix url for all endpoint
  app.setGlobalPrefix('api');

  //start server
  const port = process.env.PORT;
  await app.listen(port ?? 3000);
  logger.log(`Server is running on port ${port}`);
}
await bootstrap();
