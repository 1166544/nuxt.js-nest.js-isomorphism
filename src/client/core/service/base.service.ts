import { IVO } from '~/core/interfaces/vo.interface';
import IUser from '~/models/user';
import configService from '~/core/service/config.service';
import { setCustomHeaderByCSR, updateCustomHeaderByCSR } from '~/common/common.cookie';

/**
 * 基础配置接口
 *
 * @export
 * @interface IBaseOption
 */
export interface IBaseOption {
	baseUrl: string;
	isLocalHost: boolean;
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

	/**
	 * 调用URL地址
	 *
	 * @type {string}
	 * @memberof BaseOption
	 */
	public baseUrl: string;

	/**
	 * 是否为本地周用
	 *
	 * @type {boolean}
	 * @memberof BaseOption
	 */
	public isLocalHost: boolean = false;

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
	protected apiServiceInstance: any;
	protected options: IBaseOption;

	constructor(optios: IBaseOption) {
		this.options = optios;
	}

	protected get apiService(): any {
		if (!this.apiServiceInstance) {
			this.apiServiceInstance = configService.getAxios();
		}

		// 客户端渲染时
		if (process.client) {
			setCustomHeaderByCSR(this.apiServiceInstance);
		}

		return this.apiServiceInstance;
	}

	/**
	 * 更新拦截信息,将token设入请求头部
	 * @param loginData
	 */
	public updateIntercept(loginData: IUser): void {
		updateCustomHeaderByCSR(loginData.accessToken, this.apiServiceInstance);
	}

	/**
	 * 更新配置,加上目标URL前缀
	 *
	 * @protected
	 * @memberof BaseService
	 */
	protected updateConfig(url: string): string {
		// 本地调用
		if (this.options.isLocalHost) {
			return url;
		}

		// 非本地调用
		const baseUrl: string = this.options.baseUrl || '';
		const resultUrl: string = `${baseUrl}${url}`;
		// console.log(resultUrl);

		return resultUrl;
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
		return await this.apiService.get(this.updateConfig(url), config);
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
		return this.apiService.post(this.updateConfig(url), data, config);
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
		return this.apiService.delete(this.updateConfig(url), config);
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
		return this.apiService.head(this.updateConfig(url), config);
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
		return this.apiService.put(this.updateConfig(url), data, config);
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
		return this.apiService.patch(this.updateConfig(url), data, config);
	}
}
