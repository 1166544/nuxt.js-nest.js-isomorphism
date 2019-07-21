import { IsInt, IsString } from 'class-validator';

/**
 * Create4 cat dto
 *
 * @export
 * @class CreateCatDto
 */
export class CreateCatDto {
	@IsString()
	public readonly name: string;

	@IsInt()
	public readonly age: number;

	@IsString()
	public readonly breed: string;
}
