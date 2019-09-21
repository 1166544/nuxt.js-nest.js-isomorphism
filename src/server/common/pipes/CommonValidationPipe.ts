import {
	ArgumentMetadata,
	BadRequestException,
	Injectable,
	PipeTransform,
	Type
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

/**
 * ValidationPipe
 *
 * @export
 * @class ValidationPipe
 * @implements {PipeTransform<any>}
 */
@Injectable()
export class ValidationPipe implements PipeTransform<any> {

	/**
	 * transform
	 *
	 * @param {*} value
	 * @param {ArgumentMetadata} metadata
	 * @returns
	 * @memberof ValidationPipe
	 */
	public async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
		const { metatype } = metadata;
		if (!metatype || !this.toValidate(metatype)) {
			return value;
		}
		const object: any = plainToClass(metatype, value);
		const errors: any = await validate(object);
		if (errors.length > 0) {
			throw new BadRequestException('Validation failed');
		}

		return value;
	}

	/**
	 * toValidate
	 *
	 * @private
	 * @param {Type<any>} metatype
	 * @returns {boolean}
	 * @memberof ValidationPipe
	 */
	private toValidate(metatype: Type<any>): boolean {
		const types: any = [String, Boolean, Number, Array, Object];

		return !types.find(
			(type: any) => {
				return metatype === type;
			}
		);
	}
}
