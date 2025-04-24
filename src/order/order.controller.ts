import { Body, Controller, Post } from '@nestjs/common';
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
