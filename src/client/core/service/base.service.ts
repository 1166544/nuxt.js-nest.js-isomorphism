import { IVO } from '~/core/interfaces/vo.interface';
import configService from '~/core/service/config.service';

/**
 * 基础配置接口
 *
 * @export
 * @interface IBaseOption
 */
export interface IBaseOption {
	baseUrl: string;
}

/**
 * 基础配置类型
 *
 * @export
 * @class BaseOption
 * @implements {IBaseOption}
 */
export class BaseOption implements IBaseOption, IVO {
	constructor() {
		// hole
	}

	public baseUrl: string;

	/**
	 * 更新数据
	 *
	 * @param {*} val
	 * @memberof BaseOption
	 */
	public update(val: any): void {
		// hole
	}
}


/**
 * 基础接口调用类
 *
 * @export
 * @class BaseService
 */
export class BaseService {
	[x: string]: any;
	private apiServiceInstance: any;
	private options: IBaseOption;

	constructor(optios: IBaseOption) {
		this.options = optios;
	}

	private get apiService(): any {
		if (!this.apiServiceInstance) {
			this.apiServiceInstance = configService.getAxios();
		}

		return this.apiServiceInstance;
	}

	/**
	 * 更新配置
	 *
	 * @private
	 * @memberof BaseService
	 */
	private updateConfig(): void {
		this.apiService.defaults.baseUrl = this.options.baseUrl || '';
	}

	/**
	 * Request请求
	 *
	 * @protected
	 * @param {*} config
	 * @returns {void}
	 * @memberof BaseService
	 */
	protected request(config: any): void {
		this.updateConfig();

		return this.apiService.request(config);
	}

	/**
	 * 处理GET
	 *
	 * @param {string} url 接口地址
	 * @returns {Promise<any>}
	 * @memberof BaseService
	 */
	public async get(url: string, config: any = {}): Promise<any> {
		this.updateConfig();

		return await this.apiService.get(url, config);
	}

	/**
	 * 处理POST
	 *
	 * @param {string} url 接口地址
	 * @param {*} data 请求参数
	 * @param {*} [config={}] 配置信息
	 * @returns {Promise<any>}
	 * @memberof BaseService
	 */
	public async post(url: string, data: any, config: any = {}): Promise<any> {
		this.updateConfig();

		return this.apiService.post(url, data, config);
	}

	/**
	 * 处理DELETE
	 *
	 * @param {string} url 接口地址
	 * @param {*} [config={}] 配置信息
	 * @returns {Promise<any>}
	 * @memberof BaseService
	 */
	public async delete(url: string, config: any = {}): Promise<any> {
		this.updateConfig();

		return this.apiService.delete(url, config);
	}

	/**
	 * 处理HEAD
	 *
	 * @param {string} url 接口地址
	 * @param {*} [config={}] 配置信息
	 * @returns {Promise<any>}
	 * @memberof BaseService
	 */
	public async head(url: string, config: any = {}): Promise<any> {
		this.updateConfig();

		return this.apiService.head(url, config);
	}

	/**
	 * 处理PUT
	 *
	 * @param {string} url 接口地址
	 * @param {*} data 请求参数
	 * @param {*} [config={}] 配置信息
	 * @returns {Promise<any>}
	 * @memberof BaseService
	 */
	public async put(url: string, data: any, config: any = {}): Promise<any> {
		this.updateConfig();

		return this.apiService.put(url, data, config);
	}

	/**
	 * 处理PATCH
	 *
	 * @param {string} url 接口地址
	 * @param {*} data 请求参数
	 * @param {*} [config={}] 配置信息
	 * @returns {Promise<any>}
	 * @memberof BaseService
	 */
	public async patch(url: string, data: any, config: any = {}): Promise<any> {
		this.updateConfig();

		return this.apiService.patch(url, data, config);
	}
}
