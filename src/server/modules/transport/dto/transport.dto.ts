import { IsInt, IsString } from 'class-validator';

/**
 * Create4 cat dto
 *
 * @export
 * @class TransportCatDto
 */
export class TransportCatDto {
	/**
	 * name field
	 *
	 * @type {string}
	 * @memberof TransportCatDto
	 */
	@IsString()
	public readonly name: string;

	/**
	 * age field
	 *
	 * @type {number}
	 * @memberof TransportCatDto
	 */
	@IsInt()
	public readonly age: number;

	/**
	 * bread
	 *
	 * @type {string}
	 * @memberof TransportCatDto
	 */
	@IsString()
	public readonly breed: string;
}
