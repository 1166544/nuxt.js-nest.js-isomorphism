import {
	CallHandler,
	ExecutionContext,
	Injectable,
	NestInterceptor
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';

/**
 * Timeout intercept
 *
 * @export
 * @class TimeoutInterceptor
 * @implements {NestInterceptor}
 */
@Injectable()
export class TimeoutInterceptor implements NestInterceptor {

	/**
	 * intercept
	 *
	 * @param {ExecutionContext} context
	 * @param {CallHandler} next
	 * @returns {Observable<any>}
	 * @memberof TimeoutInterceptor
	 */
	public intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		const timeoutNum: number = 5000;

		return next.handle().pipe(timeout(timeoutNum));
	}
}
