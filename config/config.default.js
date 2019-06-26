/**
 * 默认配置
 */
class ConfigDefault {
    constructor() {
        // hole
    }

    /**
     * 服务器配置
     */
    getServerConfig() {
        return {
            apiOpen: {
                serverUrl: 'https://www.apiopen.top/',
                descriiption: 'ApiOpen'
            },
            local: {
                serverUrl: '/',
                descriiption: '本地服务'
            }
        }
    }
}

export default ConfigDefault;
