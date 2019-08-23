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
	public cnodeUrl: string = 'https://cnodejs.org/';
}
