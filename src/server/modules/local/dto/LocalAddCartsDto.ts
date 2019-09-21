/**
 * 添加入购物车DTO
 * @description Add carts dto
 */
export class AddCartsDto {

	/** 增加 */
	public static INC_NUM: number = 0;

	/** 减少 */
	public static DEC_NUM: number = 1;

	/** 原值传入 */
	public static FORCE_NUM: number = 2;

	public readonly id: string;
	public readonly num: number;
	public readonly forceType: number;
	public readonly userId: string;
}
