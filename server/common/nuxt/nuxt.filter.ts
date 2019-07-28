import {
	ArgumentsHost,
	Catch,
	ExceptionFilter,
	HttpException
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
		const ctx: any = host.switchToHttp();
		const res: any = ctx.getResponse();
		const req: any = ctx.getRequest();
		const status: any = exception.getStatus();
		const NUM_404: number = 404;

		if (status === NUM_404) {
			if (!res.headersSent) {
				await this.nuxt.render(req, res);
			}
		} else {
			res.status(status).json({
				statusCode: status,
				timestamp: new Date().toISOString(),
				path: req.url
			});
		}
	}
}
