import { AddCartsDto } from './add-carts.dto';

/**
 * 购物车列表ID DTO
 * @description Add carts dto
 */
export class CardListItemDto {
	public readonly list: Array<AddCartsDto>;
}
