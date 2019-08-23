import { BaseService, BaseOption } from '~/core/service/base.service';
import configService from '~/core/service/config.service';

/**
 * cn node服务
 *
 * @class CnNodeService
 * @extends {BaseService}
 */
class CnNodeService extends BaseService {
	constructor() {
		const baseOption: BaseOption = new BaseOption();
		baseOption.baseUrl = configService.getConfig().cnodeUrl;
		super(baseOption);
	}
}

export default new CnNodeService();
