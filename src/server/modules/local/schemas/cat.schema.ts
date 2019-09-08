import * as mongoose from 'mongoose';

/**
 * cat schema
 */
export const CatSchema: any = new mongoose.Schema({
	name: String,
	age: Number,
	bread: String
});
