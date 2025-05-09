// src/pizza/pizza.module.ts
import { Module } from '@nestjs/common';
import { PizzaController } from './pizza.controller';
import { PizzaService } from './pizza.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
    controllers: [PizzaController],
    providers: [PizzaService, PrismaService],
})
export class PizzaModule { }
