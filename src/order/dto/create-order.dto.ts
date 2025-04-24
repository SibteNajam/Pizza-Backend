import { IsString, IsBoolean, IsArray, IsNotEmpty } from 'class-validator';

class CartItem {
    @IsString()
    name: string;

    @IsNotEmpty()
    pizzaId: number;

    @IsNotEmpty()
    quantity: number;

    @IsNotEmpty()
    unitPrice: number;

    @IsNotEmpty()
    totalPrice: number;
}

export class CreateOrderDto {
    @IsString()
    @IsNotEmpty()
    customer: string;

    @IsString()
    @IsNotEmpty()
    phone: string;

    @IsString()
    @IsNotEmpty()
    address: string;

    @IsBoolean()
    priority: boolean;

    @IsArray()
    cart: CartItem[];
}
