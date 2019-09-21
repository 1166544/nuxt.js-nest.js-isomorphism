import { Connection } from 'mongoose';
import { CatSchema } from './schemas/LocalCatSchema';
import { GoodsSchema } from './schemas/LocalGoodsSchema';
import { CartsSchema } from './schemas/LocalCartSchema';
import { UserSchema } from './schemas/LocalUserSchema';

/**
 * model常量
 * @description Model
 */
export class MODEL {
	public static CAT_MODEL: string = 'CAT_MODEL';
	public static GOODS_MODEL: string = 'GOODS_MODEL';
	public static CARTS_MODEL: string = 'CARTS_MODEL';
	public static USER_MODEL: string = 'USER_MODEL';
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
		provide: MODEL.USER_MODEL,
		useFactory: (connection: Connection): any => connection.model('User', UserSchema),
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
