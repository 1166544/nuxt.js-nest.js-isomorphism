import { ConfigDefault } from '../../../../config/config.default';
import { ConfigDev } from '../../../../config/config.dev';
import { ConfigProd } from '../../../../config/config.prod';
import ConfigEnv from '../../../../config/config.env';

/**
 * 配置服务
 *
 * @class ConfigService
 */
class ConfigService {
	private static instance: ConfigService;

	private static ENV_DEV: string = 'development';
	private static ENV_PROD: string = 'production';

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
			case ConfigService.ENV_DEV:
				this.config = new ConfigDev();
				break;
			case ConfigService.ENV_PROD:
				this.config = new ConfigProd();
				break;
			default:
				this.config = new ConfigProd();
				break;
		}
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
