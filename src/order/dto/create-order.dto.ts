import { IsString, IsBoolean, IsArray, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';


class CartItem {
    @IsString()
    name: string;

    @IsNumber()
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

    @IsString()
    position: string;

    @IsNumber()
    @IsOptional() // Optional as it is calculated on the backend
    totalPrice?: number;

    @IsNumber()
    @IsOptional() // Optional as it is calculated on the backend
    priorityPrice?: number;

    @IsString()
    @IsOptional() // Optional as it is calculated on the backend
    deliveryTime?: string; // You can format it to a string or Date if preferred
}
