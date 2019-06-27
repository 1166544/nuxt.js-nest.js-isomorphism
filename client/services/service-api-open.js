import CommonService from '~/common/common-service';

/**
 *  OPEN API服务
 */
class ServiceApiOpen extends CommonService {
    constructor() {
        super({
            key: 'apiOpen'
        });
    }

    /** 获取旅游简讯 */
    async getJournalism() {
        return await this.get('journalismApi');
    }
}

export default new ServiceApiOpen();
