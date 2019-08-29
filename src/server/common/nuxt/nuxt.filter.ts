import {
	ArgumentsHost,
	Catch,
	ExceptionFilter,
	HttpException,
	HttpStatus
} from '@nestjs/common';
import { Nuxt } from 'nuxt';

/**
 * NUXT过滤器
 *
 * @export
 * @class NuxtFilter
 * @implements {ExceptionFilter}
 */
@Catch()
export class NuxtFilter implements ExceptionFilter {
	private readonly nuxt: Nuxt;

	constructor(nuxt: Nuxt) {
		this.nuxt = nuxt;
	}

	/**
	 * catch
	 *
	 * @param {HttpException} exception
	 * @param {ArgumentsHost} host
	 * @memberof NuxtFilter
	 */
	public async catch(exception: HttpException, host: ArgumentsHost): Promise<any> {

		try {
			// console.log(exception);
			// console.log(host);

			const ctx: any = host.switchToHttp();
			const res: any = ctx.getResponse();
			const req: any = ctx.getRequest();
			const status: any = exception ? exception.getStatus() : HttpStatus.OK;

			if (status === HttpStatus.NOT_FOUND) {
				// console.log('Render========', HttpStatus.NOT_FOUND);
				if (!res.headersSent) {
					await this.nuxt.render(req, res);
				}
			} else {
				// console.log('Render========', status);
				res.status(status).json({
					statusCode: status,
					timestamp: new Date().toISOString(),
					path: req.url
				});
			}
		} catch (error) {
			console.log(error);
		}
	}
}
