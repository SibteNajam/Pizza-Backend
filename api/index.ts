import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express'; // Default import for express
import serverless from 'serverless-http'; // Default import for serverless-http
import { ValidationPipe } from '@nestjs/common';

const expressApp = express();

async function bootstrap() {
    const nestApp = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
    nestApp.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
        }),
    );
    nestApp.enableCors({
        origin: ['http://localhost:5173', 'https://sibtenajam-pf.netlify.app'],
        credentials: true,
    });
    await nestApp.init();
    return serverless(expressApp); // Use the default export
}

// Export the handler function
export default async (req: any, res: any) => {
    try {
        const handler = await bootstrap();
        return handler(req, res);
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).send('Internal Server Error');
    }
};