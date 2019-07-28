import { Get, Controller } from '@nestjs/common';

@Controller()
export class AppController {
	@Get('/test')
	test(): string {
		return 'Server OK.';
	}
}
