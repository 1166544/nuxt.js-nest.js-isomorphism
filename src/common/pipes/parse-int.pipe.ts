import { BadRequestException } from '@nestjs/common';
import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

/**
 * Parse init pipe
 *
 * @export
 * @class ParseIntPipe
 * @implements {PipeTransform<string>}
 */
@Injectable()
export class ParseIntPipe implements PipeTransform<string> {

	/**
	 * transform
	 *
	 * @param {string} value
	 * @param {ArgumentMetadata} metadata
	 * @returns
	 * @memberof ParseIntPipe
	 */
	public async transform(value: string, metadata: ArgumentMetadata): Promise<any> {
		const val: any = parseInt(value, 10);
		if (isNaN(val)) {
			throw new BadRequestException('Validation failed');
		}

		return val;
	}
}
