import { ConfigDefault } from '../../../../config/default.config';
import { ConfigDev } from '../../../../config/dev.config';
import { ConfigProd } from '../../../../config/prod.config';
import ConfigEnv from '../../../../config/env.config';

/**
 * 配置服务
 *
 * @class ConfigService
 */
class ConfigService {
	private static instance: ConfigService;
	private axios: any;

	/**
	 * 配置服务单例
	 *
	 * @static
	 * @returns {ConfigService}
	 * @memberof ConfigService
	 */
	public static getInstance(): ConfigService {
		if (!ConfigService.instance) {
			ConfigService.instance = new ConfigService();
		}

		return ConfigService.instance;
	}

	/**
	 * 配置数据
	 *
	 * @private
	 * @type {ConfigDefault}
	 * @memberof ConfigService
	 */
	private config: ConfigDefault;

	constructor() {
		switch (ConfigEnv.env) {
			case ConfigDefault.ENV_DEV:
				this.config = new ConfigDev();
				break;
			case ConfigDefault.ENV_PROD:
				this.config = new ConfigProd();
				break;
			default:
				this.config = new ConfigProd();
				break;
		}

		// 将环境标识写入配置中
		this.config.updateEnv(ConfigEnv.env);
	}

	/**
	 * 获取配置数据
	 *
	 * @returns {DefaultConfig}
	 * @memberof ConfigService
	 */
	public getConfig(): ConfigDefault {
		return this.config;
	}

	/**
	 * 获取AXIOS实例
	 *
	 * @returns {*}
	 * @memberof ConfigService
	 */
	public getAxios(): any {
		return this.axios;
	}

	/**
	 * 保存axios实例
	 *
	 * @param {*} axios
	 * @memberof ConfigService
	 */
	public saveAxios(axios: any): void {
		this.axios = axios;
	}
}

export default ConfigService.getInstance();
