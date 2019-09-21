import {
	ArgumentsHost,
	Catch,
	ExceptionFilter,
	HttpException
} from '@nestjs/common';

/**
 * Http exception filter
 *
 * @export
 * @class HttpExceptionFilter
 * @implements {ExceptionFilter<HttpException>}
 */
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter<HttpException> {

	/**
	 * Catch error
	 *
	 * @param {HttpException} exception
	 * @param {ArgumentsHost} host
	 * @memberof HttpExceptionFilter
	 */
	public catch(exception: HttpException, host: ArgumentsHost): void {
		const ctx: any = host.switchToHttp();
		const response: any = ctx.getResponse();
		const request: any = ctx.getRequest();
		const statusCode: any = exception.getStatus();

		response.status(statusCode).json({
			statusCode,
			timestamp: new Date().toISOString(),
			path: request.url
		});
	}
}
