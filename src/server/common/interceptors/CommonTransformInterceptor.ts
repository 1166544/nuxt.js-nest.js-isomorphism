import {
	CallHandler,
	ExecutionContext,
	Injectable,
	NestInterceptor
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Response<T></T>
 *
 * @export
 * @interface Response
 * @template T
 */
export interface IResponse<T> {
	data: T;
}

/**
 * TransformInterreptor
 *
 * @export
 * @class TransformInterceptor
 * @implements {NestInterceptor<T, IResponse<T>>}
 * @template T
 */
@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, IResponse<T>> {

	/**
	 * handle intercept
	 *
	 * @param {ExecutionContext} context
	 * @param {CallHandler<T>} next
	 * @returns {Observable<IResponse<T>>}
	 * @memberof TransformInterceptor
	 */
	public intercept(
		context: ExecutionContext,
		next: CallHandler<T>
	): Observable<IResponse<T>> {
		return next.handle().pipe(
			map(
				(data: any) => ({ data })
			)
		);
	}
}
