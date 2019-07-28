import { Controller, Get } from '@nestjs/common';

/**
 * App controller
 *
 * @export
 * @class AppController
 */
@Controller()
export class AppController {
	// tslint:disable-next-line:completed-docs
	@Get('/test')
	public test(): string {
		return 'Server OK.';
	}
}
