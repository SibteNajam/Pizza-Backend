import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getRoot(): string {
    return 'Hello World!';
  }

  @Get('hello')
  getHello(): string {
    return 'Hello from /hello endpoint';
  }
}
