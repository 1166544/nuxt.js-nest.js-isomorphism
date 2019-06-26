import CommonService from '~/common/common-service';
// import {
//     serverData
// } from '~/config/config.default';

/**
 *  OPEN API服务
 */
class ServiceApiOpen extends CommonService {
    constructor() {
        // super({
        //     baseConfig: serverData.apiOpen
        // });
        super({});
    }

    /** 获取旅游简讯 */
    async getJournalism() {
        return await this.get('journalismApi');
    }
}

export default new ServiceApiOpen();
