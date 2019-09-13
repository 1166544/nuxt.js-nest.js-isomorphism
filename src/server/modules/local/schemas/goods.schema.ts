import * as mongoose from 'mongoose';

/**
 * Goods Schema
 */
export const GoodsSchema: any = new mongoose.Schema({
	title: String,
	price: Number,
	express: String,
	remain: Number,
	num: String,
	thumb: String,
	thumbList: Array
}, { collection: 'isomorphism.goods' });
