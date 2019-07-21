import {
	CallHandler,
	ExecutionContext,
	Injectable,
	NestInterceptor
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

/**
 * Logging interceptor
 *
 * @export
 * @class LoggingInterceptor
 * @implements {NestInterceptor}
 */
@Injectable()
export class LoggingInterceptor implements NestInterceptor {

	/**
	 * intercept
	 *
	 * @param {ExecutionContext} context
	 * @param {CallHandler} next
	 * @returns {Observable<any>}
	 * @memberof LoggingInterceptor
	 */
	public intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		console.log('Before...');

		const now: any = Date.now();

		return next
			.handle()
			.pipe(tap(() => console.log(`After... ${Date.now() - now}ms`)));
	}
}
