import { Connection } from 'mongoose';
import { CatSchema } from './schemas/cat.schema';
import { GoodsSchema } from './schemas/goods.schema';

/**
 * model常量
 * @description Model
 */
export class MODEL {
	public static CAT_MODEL: string = 'CAT_MODEL';
	public static GOODS_MODEL: string = 'GOODS_MODEL';
}

/**
 * MODEL定义
 */
export const catsProviders: Array<any> = [
	{
		provide: MODEL.CAT_MODEL,
		useFactory: (connection: Connection): any => connection.model('Cat', CatSchema),
		inject: ['DATABASE_CONNECTION']
	},
	{
		provide: MODEL.GOODS_MODEL,
		useFactory: (connection: Connection): any => connection.model('Goods', GoodsSchema),
		inject: ['DATABASE_CONNECTION']
	}
];
