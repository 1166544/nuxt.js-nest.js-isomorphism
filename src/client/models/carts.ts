import { IVO } from '~/core/interfaces/vo.interface';

/**
 * 基础数据结构
 *
 * @export
 * @interface IVO
 */
/**
 * 购物车数据结构
 *
 * @export
 * @interface ICarts
 */
export interface ICartsItem extends IVO {
	id: string;
	title: string;
	desc: string;
	price: number;
	num: string;
	thumb: string;
	thumbList: Array<any>
}

/**
 * 购物车VO
 *
 * @export
 * @class CartsVO
 * @implements {ICarts}
 */
export class CartsVO implements ICartsItem {
	constructor() {
		// hole
	}
	public id: string;
	public title: string;
	public desc: string;
	public price: number;
	public num: string;
	public thumb: string;
	public thumbList: Array<any> = [];

	/**
	 * 更新数据源
	 *
	 * @param {*} val
	 * @memberof CartsVO
	 */
	public update(val: any): void {
		if (val) {
			this.id = val.id || val._id;
			this.title = val.title;
			this.desc = val.desc;
			this.price = Number(val.price);
			this.num = val.num;
			this.thumb = val.thumb;

			if (val.thumbList && val.thumbList.length) {
				while (val.thumbList.length) {
					this.thumbList.push(val.thumbList.shift());
				}
			}
		}
	}
}
