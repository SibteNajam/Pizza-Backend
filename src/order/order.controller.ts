import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';  // Import the guard
import { OrderService } from './order.service';
import { CreateOrderDto } from "./dto/create-order.dto";

@Controller('orders')
export class OrderController {
    constructor(private ordersService: OrderService) { }

    @Post()
    async create(@Body() createOrderDto: CreateOrderDto) {
        console.log('Received Order Data:', createOrderDto);  // Log the received data
        return this.ordersService.createOrder(createOrderDto);
    }
}
