import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
    constructor(private prisma: PrismaService) { }

    async createOrder(createOrderDto: CreateOrderDto) {
        const { customer, phone, address, priority, cart, position } = createOrderDto;
        const totalPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0);
        const priorityPrice = priority ? totalPrice * 0.08 : 0;
        const deliveryTime = new Date();
        deliveryTime.setMinutes(deliveryTime.getMinutes() + 40);
        const newOrder = await this.prisma.order.create({
            data: {
                customer,
                phone,
                address,
                priority,
                cart: JSON.parse(JSON.stringify(cart)), // still JSONB
                orderPrice: totalPrice,
                priorityPrice,
                position,
                estimatedDelivery: deliveryTime.toISOString(),
            },
        });

        return newOrder;
    }
}
