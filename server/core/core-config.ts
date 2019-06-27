import { CoreConfigData } from './core-config-data';
import { ENVIRONMENT } from './core-base-http-client';
import { ConfigDev } from '../../config/config.dev';
import { ConfigProd } from '../../config/config.prod';

export class CoreConfig {
    private static _instance: CoreConfig = new CoreConfig();
    private _configData: CoreConfigData;

    constructor() {
        if (CoreConfig._instance) {
            throw new Error(
                'Error: Instantiation failed: Use CoreConfig.getInstance() instead of new.',
            );
        }
        CoreConfig._instance = this;
    }

    /**
     * 配置单例
     *
     * @static
     * @returns {CoreConfig}
     * @memberof CoreConfig
     */
    public static getInstance(): CoreConfig {
        return CoreConfig._instance;
    }

    /**
     * 获取当前环境配置数据
     *
     * @static
     * @returns {CoreConfig}
     * @memberof BaseConfig
     */
    public static getConfigData(): CoreConfigData {
        return CoreConfig._instance.getEnviromentData();
    }

    /**
     * 依据不同的环境变量获取实例的静态方法实例
     * @return
     */
    public getEnviromentData(): CoreConfigData {
        const envFlag: string = process.env[ENVIRONMENT.LOCAL_STR];

        if (!this._configData) {
            switch (envFlag) {
                case ENVIRONMENT.ENV_DEVELOPMENT:
                    this._configData = new CoreConfigData(new ConfigDev());
                    break;
                case ENVIRONMENT.ENV_PROD:
                    this._configData = new CoreConfigData(new ConfigProd());
                    break;
                default:
                    this._configData = new CoreConfigData(new ConfigProd());
                    break;
            }
        }

        // 本地配置启动
        if (
            process.env[ENVIRONMENT.LOCAL_STR] &&
            process.env[ENVIRONMENT.LOCAL_STR] === ENVIRONMENT.ENV_DEVELOPMENT
        ) {
            console.log('Replace start config data.');
            this._configData = new CoreConfigData(new ConfigDev());
            this.httpsSupport(process.env[ENVIRONMENT.LOCAL_STR]);
        }

        return this._configData;
    }

    /**
     * 开启https抓包支持
     */
    private httpsSupport(transDevFlag: string): void {
        if (process.env.NODE_ENV === transDevFlag) {
            process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
        }
    }
}
