import { ConfigDefault } from 'config/config.default';

/**
 * 配置基类
 */
export class CoreConfigData {
    constructor(public configData?: ConfigDefault) {
        // hole
    }

    /**
     * 获取服务器基础配置
     */
    public getHostConfig(): any {
        return this.configData.getServerConfig();
    }

    /**
     * 获取配置数据
     */
    public getConfig(): any {
        return this.configData;
    }
}
