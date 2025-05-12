import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PizzaModule } from './pizza/pizza.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [PizzaModule, OrderModule],
  controllers: [AppController], // ✅ Add this
  providers: [AppService],     // ✅ Add this
})
export class AppModule { }
