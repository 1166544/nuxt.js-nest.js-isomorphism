import { IsInt, IsString } from 'class-validator';

/**
 * Create4 cat dto
 *
 * @export
 * @class CreateCatDto
 */
export class CreateCatDto {
	/**
	 * name field
	 *
	 * @type {string}
	 * @memberof CreateCatDto
	 */
	@IsString()
	public readonly name: string;

	/**
	 * age field
	 *
	 * @type {number}
	 * @memberof CreateCatDto
	 */
	@IsInt()
	public readonly age: number;

	/**
	 * bread
	 *
	 * @type {string}
	 * @memberof CreateCatDto
	 */
	@IsString()
	public readonly breed: string;
}
