import * as mongoose from 'mongoose';

/**
 * user schema
 */
export const UserSchema: any = new mongoose.Schema({
	userName: { type: String, unique: true, required: true },
	password: { type: String, unique: true, required: true }
},
	{ collection: 'isomorphism.user' }
);
