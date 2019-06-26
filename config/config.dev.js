import ConfigDefault from './config.default';

/**
 * 开发服配置
 */
class ConfigDev extends ConfigDefault {
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
export default new ConfigDev();
