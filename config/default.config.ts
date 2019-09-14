/**
 * 基础配置
 *
 * @export
 * @class ConfigDefault
 */
export class ConfigDefault {

	/**
	 * X real url of config default
	 */
	public static X_REAL_URL: string = 'x-real-url';

	/**
	 * X real base url of config default
	 */
	public static X_REAL_BASE_URL: string = 'x-real-base-url';

	/**
	 * content-type
	 */
	public static CONTENT_TYPE: string = 'content-type';

	/**
	 * Env dev of config default
	 */
	public static ENV_DEV: string = 'development';

	/**
	 * Env prod of config default
	 */
	public static ENV_PROD: string = 'production';

	/**
	 * 默认环境标识
	 * @description Env  of config default
	 */
	private _env: string = ConfigDefault.ENV_PROD;

	constructor() {
		// hole
	}

	/**
	 * 服务器访问路径
	 *
	 * @type {string}
	 * @memberof ConfigDefault
	 */
	public serverAdderess: string = '127.0.0.1';

	/**
	 * 启动端口
	 *
	 * @type {number}
	 * @memberof ConfigDefault
	 */
	public port: number = 8088;

	/**
	 * 本地URL地址
	 *
	 * @type {string}
	 * @memberof ConfigDefault
	 */
	public localUrl: string = 'http://127.0.0.1';

	/**
	 * charles抓包地址
	 */
	public httpProxyUrl: string = 'http://127.0.0.1';

	/**
	 * charles抓包端口
	 */
	public httpProxyPort: number = 8888;

	/**
	 * cnode配置
	 *
	 * @type {string}
	 * @memberof ConfigDefault
	 */
	public cnodeUrl: string = 'https://cnodejs.org';

	/**
	 * proxy-agent地址
	 */
	public getProxyAddress(): string {
		return `${this.httpProxyUrl}:${this.httpProxyPort}`;
	}

	/**
	 * API统一前缀
	 */
	public getGlobalPrefix(): string {
		return 'api';
	}

	/**
	 * 获取当前环境标识
	 * @description Gets env
	 * @returns env
	 */
	public getEnv(): string {
		return this._env;
	}

	/**
	 * 更新环境标识
	 * @description Updates env
	 * @param env
	 */
	public updateEnv(env: string): void {
		this._env = env;
	}
}
