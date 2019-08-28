/**
 * 基础配置
 *
 * @export
 * @class ConfigDefault
 */
export class ConfigDefault {
	constructor() {
		// hole
	}

	/**
	 * 服务器访问路径
	 *
	 * @type {string}
	 * @memberof ConfigDefault
	 */
	public serverAdderess: string = '0.0.0.0';

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
