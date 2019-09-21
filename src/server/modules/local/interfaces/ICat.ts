import { Document } from 'mongoose';

/**
 * cat
 * @description Cat
 */
export interface ICat extends Document {
	readonly name: string,
	readonly age: number,
	readonly bread: string
}
