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
	num: number;
	thumb: string;
	thumbList: Array<any>;
	userId: string;
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

	/** 增加 */
	public static INC_NUM: number = 0;

	/** 减少 */
	public static DEC_NUM: number = 1;

	/** 原值传入 */
	public static FORCE_NUM: number = 2;

	public id: string;
	public title: string;
	public desc: string;
	public price: number;
	public num: number;
	public thumb: string;
	public thumbList: Array<any> = [];
	public userId: string;

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
			this.num = Number(val.num);
			this.thumb = val.thumb;
			this.userId = val.userId;

			if (val.thumbList && val.thumbList.length) {
				for (let index: number = 0; index < val.thumbList.length; index++) {
					const element: any = val.thumbList[index];
					this.thumbList.push(element);
				}
			}
		}
	}
}
