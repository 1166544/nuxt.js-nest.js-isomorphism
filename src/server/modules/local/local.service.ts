import { BaseHttpClient } from '../../common/middleware/http.middleware';

/**
 * 本地服务
 *
 * @export
 * @class LocalService
 */
export class LocalService extends BaseHttpClient {
	constructor() {
		super();
	}

	/**
	 * 获取已选择商品列表数据
	 *
	 * @returns {Promise<any>}
	 * @memberof LocalService
	 */
	public async getCarts(): Promise<any> {
		const returnData: any = await this.get('/carts.json').toPromise();

		return returnData;
	}

	/**
	 * 获取商品页面单个商品数据
	 *
	 * @returns {Promise<any>}
	 * @memberof LocalService
	 */
	public async getGoods(): Promise<any> {
		return await this.get('/goods.json').toPromise();
	}

	/**
	 * 获取商品列表数据
	 *
	 * @returns {Promise<any>}
	 * @memberof LocalService
	 */
	public async getList(): Promise<any> {
		return await this.get('/list.json').toPromise();
	}
}
