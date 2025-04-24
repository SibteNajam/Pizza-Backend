import { Module } from '@nestjs/common';
import { PizzaModule } from './pizza/pizza.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [PizzaModule, OrderModule],
})
export class AppModule { }
