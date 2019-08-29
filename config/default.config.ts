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
	 * cnode配置
	 *
	 * @type {string}
	 * @memberof ConfigDefault
	 */
	public cnodeUrl: string = 'https://cnodejs.org';

	/**
	 * API统一前缀
	 */
	public getGlobalPrefix(): string {
		return 'api';
	}
}
