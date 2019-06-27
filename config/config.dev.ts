import { ConfigDefault } from './config.default';

/**
 * 开发服配置
 */
export class ConfigDev extends ConfigDefault {
    constructor() {
        super();
    }

    /**
     * 服务器配置
     */
    public getServerConfig() {
        return {
            apiOpen: {
                serverUrl: 'https://www.apiopen.top/',
                descriiption: 'ApiOpen',
            },
            local: {
                serverUrl: '/',
                descriiption: '本地服务',
            },
        };
    }
}
