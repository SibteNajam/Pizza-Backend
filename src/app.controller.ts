import { Controller, Get } from '@nestjs/common';
@Controller()
class AppController {
  @Get('menu')
  getMenu() {
    return [

    ];
  }

}