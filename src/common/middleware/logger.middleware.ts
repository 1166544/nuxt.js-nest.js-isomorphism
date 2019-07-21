import { Injectable, NestMiddleware } from '@nestjs/common';

/**
 * LoggerMiddleware
 *
 * @export
 * @class LoggerMiddleware
 * @implements {NestMiddleware}
 */
@Injectable()
export class LoggerMiddleware implements NestMiddleware {

	/**
	 * use middleware
	 *
	 * @param {*} req
	 * @param {*} res
	 * @param {() => void} next
	 * @memberof LoggerMiddleware
	 */
	public use(req: any, res: any, next: () => void): void {
		console.log('Request...');
		next();
	}
}
