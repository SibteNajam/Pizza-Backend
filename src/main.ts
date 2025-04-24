import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable global validation (if you're using class-validator)
  app.useGlobalPipes(new ValidationPipe());

  // Enable CORS
  app.enableCors({
    origin: 'http://localhost:5173', // Allow requests only from this origin
  });

  // Start the application
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
