/**
 * 生产配置
 */
import ConfigDefault from './config.default';

class ConfigProd extends ConfigDefault {
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
export default new ConfigProd();
