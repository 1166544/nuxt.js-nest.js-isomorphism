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
export interface ICarts extends IVO {
	id: string;
	title: string;
	desc: string;
	price: number;
	num: string;
	thumb: string;
}

/**
 * 购物车VO
 *
 * @export
 * @class CartsVO
 * @implements {ICarts}
 */
export class CartsVO implements ICarts {
	constructor() {
		// hole
	}
	public id: string;
	public title: string;
	public desc: string;
	public price: number;
	public num: string;
	public thumb: string;

	/**
	 * 更新数据源
	 *
	 * @param {*} val
	 * @memberof CartsVO
	 */
	public update(val: any): void {
		if (val) {
			this.id = val.id;
			this.title = val.title;
			this.desc = val.desc;
			this.price = Number(val.price);
			this.num = val.num;
			this.thumb = val.thumb;
		}
	}
}
