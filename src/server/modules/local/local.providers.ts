import { Connection } from 'mongoose';
import { CatSchema } from './schemas/cat.schema';
import { GoodsSchema } from './schemas/goods.schema';
import { CartsSchema } from './schemas/cart.schema';

/**
 * model常量
 * @description Model
 */
export class MODEL {
	public static CAT_MODEL: string = 'CAT_MODEL';
	public static GOODS_MODEL: string = 'GOODS_MODEL';
	public static CARTS_MODEL: string = 'CARTS_MODEL';
}

/**
 * MODEL定义
 */
export const localProviders: Array<any> = [
	{
		provide: MODEL.CAT_MODEL,
		useFactory: (connection: Connection): any => connection.model('Cat', CatSchema),
		inject: ['DATABASE_CONNECTION']
	},
	{
		provide: MODEL.GOODS_MODEL,
		useFactory: (connection: Connection): any => connection.model('Goods', GoodsSchema),
		inject: ['DATABASE_CONNECTION']
	},
	{
		provide: MODEL.CARTS_MODEL,
		useFactory: (connection: Connection): any => connection.model('Carts', CartsSchema),
		inject: ['DATABASE_CONNECTION']
	}
];
