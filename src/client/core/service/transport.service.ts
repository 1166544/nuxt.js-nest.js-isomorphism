import { BaseService, IBaseOption } from './base.service';
import { ConfigDefault } from '../../../../config/default.config';

/**
 * 重写基类，中转服务
 *
 * @export
 * @class TransportService
 * @extends {BaseService}
 */
export class TransportService extends BaseService {
	constructor(optios: IBaseOption) {
		super(optios);
	}

	/**
	 * 更新配置,加上目标URL前缀,如果是中转的话则指定固定地址
	 *
	 * @protected
	 * @memberof BaseService
	 */
	protected updateConfig(url: string): string {
		return '/api/transport/getTransportData';
	}

	/**
	 * 更新配置，将URL放在HEADER头部
	 *
	 * @protected
	 * @param {string} url 请求URL接口
	 * @param {*} config 基础配置，将传入AXIOS
	 * @returns {*}
	 * @memberof TransportService
	 */
	protected transportConfig(url: string, config: any): any {
		config.headers = {};
		config.headers[ConfigDefault.X_REAL_URL] = url;
		config.headers[ConfigDefault.X_REAL_BASE_URL] = this.options.baseUrl || '';

		return config;
	}

	/**
	 * 处理GET
	 *
	 * @param {string} url 接口地址
	 * @returns {Promise<any>}
	 * @memberof BaseService
	 */
	public async get(url: string, config: any = {}): Promise<any> {
		return await this.apiService.get(this.updateConfig(url), this.transportConfig(url, config));
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
		return this.apiService.post(this.updateConfig(url), data, this.transportConfig(url, config));
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
		return this.apiService.delete(this.updateConfig(url), this.transportConfig(url, config));
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
		return this.apiService.head(this.updateConfig(url), this.transportConfig(url, config));
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
		return this.apiService.put(this.updateConfig(url), data, this.transportConfig(url, config));
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
		return this.apiService.patch(this.updateConfig(url), data, this.transportConfig(url, config));
	}
}
