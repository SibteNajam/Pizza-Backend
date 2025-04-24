import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
    constructor(private prisma: PrismaService) { }

    async createOrder(createOrderDto: CreateOrderDto) {
        const { customer, phone, address, priority, cart } = createOrderDto;

        const newOrder = await this.prisma.order.create({
            data: {
                customer,
                phone,
                address,
                priority,
                cart: JSON.parse(JSON.stringify(cart)), // still JSONB
            },
        });

        return newOrder;
    }
}
