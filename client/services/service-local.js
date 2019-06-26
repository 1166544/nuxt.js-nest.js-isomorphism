import CommonService from '~/common/common-service';
// import {
//     serverData
// } from '~/config/config.default';

/**
 * 本地服务
 */
class ServiceLocal extends CommonService {
    constructor() {
        // super({
        //     baseConfig: serverData.local
        // });
        super({});
    }

    /**
     * 获取当前环境配置信息
     */
    async getEniromentData() {
        return await this.post('api/getEnviromentData');
    }
}

export default new ServiceLocal();
