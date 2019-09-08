import mongoose from 'mongoose';

/**
 * data base providers
 */
export const databaseProviders: Array<any> = [
	{
		provide: 'DATABASE_CONNECTION',
		useFactory: async (): Promise<any> => {
			const connectResult: any = await mongoose.connect('mongodb://admin:123456@localhost:27017/admin');

			return connectResult;
		}
	}
];
