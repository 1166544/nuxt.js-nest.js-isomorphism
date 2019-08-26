import { ConfigDefault } from './default.config';

/**
 * 开发服配置
 *
 * @export
 * @class ConfigDev
 * @extends {ConfigDefault}
 */
export class ConfigDev extends ConfigDefault {
	constructor() {
		super();
		// console.log('开发服配置::: 启动');
	}

	/**
	 * 覆盖本地URL地址
	 *
	 * @type {string}
	 * @memberof ConfigDefault
	 */
	public localUrl: string = 'http://localhost';
}

