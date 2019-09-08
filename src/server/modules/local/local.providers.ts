import { Connection } from 'mongoose';
import { CatSchema } from './schemas/cat.schema';

export const catsProviders: Array<any> = [
	{
		provide: 'CAT_MODEL',
		useFactory: (connection: Connection): any => connection.model('Cat', CatSchema),
		inject: ['DATABASE_CONNECTION']
	}
];
