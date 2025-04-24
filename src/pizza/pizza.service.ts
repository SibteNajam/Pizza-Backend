import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PizzaService {
    getPizzaById(id: string) {
        throw new Error('Method not implemented.');
    }
    constructor(private prisma: PrismaService) { }

    async getAllPizzas() {
        try {
            const pizzas = await this.prisma.pizza.findMany();
            return {
                status: 'success',
                data: pizzas,
            };
        } catch (error) {
            console.error('Error fetching pizzas:', error);
            throw new InternalServerErrorException('Failed to fetch pizzas');
        }
    }
    // async getPizzaById(){

    // }

}
