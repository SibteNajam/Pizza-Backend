import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
// import { VercelAdapter } from '@nestjs/serverless';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable global validation (if you're using class-validator)

  // ✅ Enable strict global validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,// strips properties that do not have decorators
      forbidNonWhitelisted: true, // throws error if unknown properties are present
    }),
  );

  // Enable CORS
  app.enableCors({
    origin: ['http://localhost:5173', 'https://sibtenajam-pf.netlify.app'],
    credentials: true, // optional, only needed if you're using cookies/auth headers
  });

  // Start the application
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();