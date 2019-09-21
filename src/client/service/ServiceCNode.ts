import { BaseOption } from '~/core/service/ServiceBase';
import configService from '~/core/service/ServiceConfig';
import { TransportService } from '~/core/service/ServiceTransport';

/**
 * cn node服务(中转方式，解决跨域问题)
 *
 * @class CnNodeService
 * @extends {TransportService}
 */
class CnNodeService extends TransportService {
	constructor() {
		const baseOption: BaseOption = new BaseOption();
		baseOption.baseUrl = configService.getConfig().cnodeUrl;
		super(baseOption);
	}

	/**
	 * 获取主题列表
	 *
	 * @returns {Promise<any>}
	 * @memberof CnNodeService
	 */
	public async getTopics(): Promise<any> {
		return await this.get('/api/v1/topics');
	}
}

export default new CnNodeService();
