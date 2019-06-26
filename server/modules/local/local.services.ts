import { CoreConfig } from '../../core/core-config';

/**
 * 配置文件获取服务
 *
 * @export
 * @class LocalService
 */
export class LocalService {
    public configer: any;

    constructor() {
        this.getConfiger();
    }

    /**
     * 动态实例化获取配置内容
     */
    public getConfiger(): void {
        this.configer = CoreConfig.getInstance().getEnviromentData();
    }

    /**
     * 获取Host配置信息
     * @memberof LocalService
     */
    public getHostConfig(): any {
        return this.configer.getHostConfig();
    }

    /**
     * 根据KEY获取Host配置的URL新
     *
     * @param {string} key
     * @returns {*}
     * @memberof LocalService
     */
    public getHostConfigUrlByKey(key: string): any {
        const config = this.configer.getHostConfig();
        if (key) {
            return config[key].url;
        }
    }
}
