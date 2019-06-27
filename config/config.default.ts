/**
 * 默认配置
 */
export class ConfigDefault {
    constructor() {
        // hole
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

    /**
     * API服务前缀
     */
    public getApiPerfix(): string {
        return 'api';
    }
}
