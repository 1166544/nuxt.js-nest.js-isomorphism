import { Get, Controller } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/first')
  test(): string {
    return 'api OK :D';
  }
}
