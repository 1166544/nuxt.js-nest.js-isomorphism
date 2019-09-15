import { Document } from 'mongoose';

/**
 * 用户信息
 */
export interface IUser extends Document {
	_id: string;
	userName: string;
}
