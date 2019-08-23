import { ConfigDefault } from './config.default';

/**
 * 生产服配置
 *
 * @export
 * @class ConfigProd
 * @extends {ConfigDefault}
 */
export class ConfigProd extends ConfigDefault {
	constructor() {
		super();
		console.log('生产服配置::: 启动');
	}

	/**
	 * 覆盖本地URL地址
	 *
	 * @type {string}
	 * @memberof ConfigDefault
	 */
	public localUrl: string = 'http://0.0.0.0';
}

