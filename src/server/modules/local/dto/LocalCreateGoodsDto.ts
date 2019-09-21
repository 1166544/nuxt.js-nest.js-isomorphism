/**
 * 产品DTO
 * @description Create goods dto
 */
export class CreateGoodsDto {
	public readonly title: string;
	public readonly price: number;
	public readonly express: string;
	public readonly remain: number;
	public readonly num: string;
	public readonly thumb: string;
	public readonly thumbList: Array<string>;
}
