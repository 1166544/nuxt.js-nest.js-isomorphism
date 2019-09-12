import { Document } from 'mongoose';

/**
 * ICart
 * @description ICart
 */
export interface ICart extends Document {
	id: string;
	num: number;
}
