// src/pizza/pizza.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { PizzaService } from './pizza.service';

@Controller('pizza')
export class PizzaController {
    constructor(private pizzaService: PizzaService) { }

    @Get()
    getAll() {
        return this.pizzaService.getAllPizzas();
    }

    @Get(':id')
    getById(@Param('id') id: string) {
        return this.pizzaService.getPizzaById(id);
    }
}
