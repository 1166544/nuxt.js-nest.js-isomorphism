import CommonService from '~/common/common-service';

/**
 * 本地服务
 */
class ServiceLocal extends CommonService {
    constructor() {
        super({
            key: 'local'
        });
    }

    /**
     * 获取当前环境配置信息
     */
    async getEniromentData() {
        return await this.post('api/local/getHostConfig');
    }
}

export default new ServiceLocal();
