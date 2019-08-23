import { BaseService, BaseOption } from '~/core/service/base.service';
import configService from '~/core/service/config.service';
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
		super(baseOption);
	}

	/**
	 * 获取商品列表数据
	 *
	 * @returns {Promise<any>}
	 * @memberof LocalService
	 */
	public async getGoodsListData(): Promise<any> {
		return await this.get('/carts.json');
	}
}

export default new LocalService();
