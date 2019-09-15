import * as mongoose from 'mongoose';

/**
 * carts schema
 */
export const CartsSchema: any = new mongoose.Schema({
	id: { type: String, unique: true, required: true },
	num: Number,
	userId: { type: String, unique: true, required: true }
},
	{ collection: 'isomorphism.carts' }
);
