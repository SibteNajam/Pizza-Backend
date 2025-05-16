// api/index.ts
import { createServer, proxy } from 'aws-serverless-express';
import { Callback, Context, Handler } from 'aws-lambda';
import { AppModule } from '../src/app.module';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';

let cachedServer;

async function bootstrapServer() {
    if (!cachedServer) {
        const expressApp = express();
        const adapter = new ExpressAdapter(expressApp);
        const app = await NestFactory.create(AppModule, adapter);

        app.useGlobalPipes(
            new ValidationPipe({
                whitelist: true,
                forbidNonWhitelisted: true,
            }),
        );

        app.enableCors({
            origin: ['http://localhost:5173', 'https://sibtenajam-pf.netlify.app'],
            credentials: true,
        });

        await app.init();
        cachedServer = createServer(expressApp);
    }
    return cachedServer;
}

export const handler: Handler = async (event: any, context: Context, callback: Callback) => {
    const server = await bootstrapServer();
    return proxy(server, event, context, 'PROMISE').promise;
};


