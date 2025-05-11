import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as serverless from 'serverless-http'; // For serverless compatibility

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable global validation (if you're using class-validator)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Strips properties that do not have decorators
      forbidNonWhitelisted: true, // Throws error if unknown properties are present
    }),
  );

  // Enable CORS
  app.enableCors({
    origin: ['http://localhost:5173', 'https://sibtenajam-pf.netlify.app'],
    credentials: true, // Optional, only needed if you're using cookies/auth headers
  });

  // Initialize the NestJS app
  await app.init();

  // Export the serverless handler
  return serverless(app.getHttpAdapter().getInstance());
}

// Vercel handler
export const handler = bootstrap();
