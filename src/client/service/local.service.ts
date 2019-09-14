import { BaseService, BaseOption } from '~/core/service/base.service';
import configService from '~/core/service/config.service';
import { CartsVO } from '~/models/carts';
/**
 * 本地 node服务
 *
 * @class LocalService
 * @extends {BaseService}
 */
class LocalService extends BaseService {
	constructor() {
		const baseOption: BaseOption = new BaseOption();
		baseOption.baseUrl = configService.getConfig().localUrl;
		baseOption.isLocalHost = true;
		super(baseOption);
	}

	/**
	 * 登录
	 * @description login
	 * @param userName
	 * @param password
	 * @returns to cart
	 */
	public async login(userName: string, password: string): Promise<any> {
		return await this.post('/api/local/login', {
			userName,
			password
		});
	}

	/**
	 * 调用接口添加入购物车
	 * @description Adds to cart
	 * @param cartsVO
	 * @param forceType 是否原值存入
	 * @returns to cart
	 */
	public async addToCart(cartsVO: CartsVO, forceType: number = 0): Promise<any> {
		return await this.post('/api/local/addToCart', {
			id: cartsVO.id,
			num: cartsVO.num,
			forceType
		});
	}

	/**
	 * 获取已选择商品数据ID列表
	 *
	 * @returns {Promise<any>}
	 * @memberof LocalService
	 */
	public async getGoodsListData(): Promise<any> {
		return await this.get('/api/local/getCarts');
	}

	/**
	 * 获取已选择商品列表数据项
	 *
	 * @returns {Promise<any>}
	 * @memberof LocalService
	 */
	public async getCartsListData(params: Array<any>): Promise<any> {
		return await this.post('/api/local/getCartsListData', { list: params });
	}

	/**
	 * 获取商品页面单个商品数据
	 *
	 * @returns {Promise<any>}
	 * @memberof LocalService
	 */
	public async getGoodsData(): Promise<any> {
		return await this.get('/api/local/getGoods');
	}

	/**
	 * 获取商品列表数据
	 *
	 * @returns {Promise<any>}
	 * @memberof LocalService
	 */
	public async getListData(): Promise<any> {
		return await this.get('/api/local/getList');
	}
}

export default new LocalService();
