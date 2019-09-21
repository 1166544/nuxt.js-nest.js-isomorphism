import { Document } from 'mongoose';

/**
 * 产品数据结构
 * @description Igoods
 */
export interface IGoods extends Document {
	readonly title: string;
	readonly price: number;
	readonly express: string;
	readonly remain: number;
	readonly num: string;
	readonly thumb: string;
	readonly thumbList: Array<string>;
}
