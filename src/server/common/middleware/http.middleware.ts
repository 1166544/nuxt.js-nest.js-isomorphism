import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { defer, Observable } from 'rxjs';
import ProxyAgent from 'proxy-agent';
import { ConfigDefault } from './../../../../config/default.config';
import configService from '../../../client/core/service/config.service';

/**
 *
 * http 请求封装基类
 * @export
 * @class BaseHttpClient
 */
export class BaseHttpClient {
	/**
	 * http代理地址
	 */
	private proxyUri: string;

	/**
	 * Axios 实例
	 */
	private readonly instance: AxiosInstance = Axios;

	constructor() {
		// 读取配置
		const configer: ConfigDefault = configService.getConfig();
		this.proxyUri = configer.getProxyAddress();

		// 请求拦截
		this.instance.interceptors.request.use(
			(request: AxiosRequestConfig) => {
				request.headers.startInvokeTime = Date.now();
				// 开发模式则添加代理-charles
				if (process.env.NODE_ENV === ConfigDefault.ENV_DEV) {
					request.httpAgent = new ProxyAgent(this.proxyUri);
					request.httpsAgent = new ProxyAgent(this.proxyUri);
				}

				return request;
			},
			(error: any) => {
				// hole 采集上传错误日志 error.response || {}
			}
		);

		// 响应拦截
		this.instance.interceptors.response.use(
			(response: AxiosResponse) => {
				// hole 采信响应日志 response

				return response;
			},
			(error) => {
				// hole 采集响应错误日志 console.log('error.......', error);
				// const copyHeaders: any = { ...(error.config.headers || {}) };
				// `Error: ${error.syscall} ${error.errno} ${error.hostname} ${error.port}`
				throw error;
			}
		);
	}

	/**
	 * request 请求
	 * @template T
	 * @param {AxiosRequestConfig} config
	 * @returns {Observable<AxiosResponse<T>>}
	 * @memberof BaseHttpClient
	 */
	public request<T = any>(
		config: AxiosRequestConfig
	): Observable<AxiosResponse<T>> {
		return defer(() => this.instance.request<T>(config));
	}

	/**
	 * get 请求
	 * @template T
	 * @param {string} url
	 * @param {AxiosRequestConfig} [config]
	 * @returns {Observable<AxiosResponse<T>>}
	 * @memberof BaseHttpClient
	 */
	public get<T = any>(
		url: string,
		config?: AxiosRequestConfig
	): Observable<AxiosResponse<T>> {
		return defer(() => this.instance.get<T>(url, config));
	}

	/**
	 *
	 * delete
	 * @template T
	 * @param {string} url
	 * @param {AxiosRequestConfig} [config]
	 * @returns {Observable<AxiosResponse<T>>}
	 * @memberof BaseHttpClient
	 */
	public delete<T = any>(
		url: string,
		config?: AxiosRequestConfig
	): Observable<AxiosResponse<T>> {
		return defer(() => this.instance.delete(url, config));
	}

	/**
	 *
	 * head
	 * @template T
	 * @param {string} url
	 * @param {AxiosRequestConfig} [config]
	 * @returns {Observable<AxiosResponse<T>>}
	 * @memberof BaseHttpClient
	 */
	public head<T = any>(
		url: string,
		config?: AxiosRequestConfig
	): Observable<AxiosResponse<T>> {
		return defer(() => this.instance.head(url, config));
	}

	/**
	 *
	 * post
	 * @template T
	 * @param {string} url
	 * @param {*} [data]
	 * @param {AxiosRequestConfig} [config]
	 * @returns {Observable<AxiosResponse<T>>}
	 * @memberof BaseHttpClient
	 */
	public post<T = any>(
		url: string,
		data?: any,
		config?: AxiosRequestConfig
	): Observable<AxiosResponse<T>> {
		return defer(() => this.instance.post(url, data, config));
	}

	/**
	 *
	 * put
	 * @template T
	 * @param {string} url
	 * @param {*} [data]
	 * @param {AxiosRequestConfig} [config]
	 * @returns {Observable<AxiosResponse<T>>}
	 * @memberof BaseHttpClient
	 */
	public put<T = any>(
		url: string,
		data?: any,
		config?: AxiosRequestConfig
	): Observable<AxiosResponse<T>> {
		return defer(() => this.instance.put(url, data, config));
	}

	/**
	 *
	 * patch
	 * @template T
	 * @param {string} url
	 * @param {*} [data]
	 * @param {AxiosRequestConfig} [config]
	 * @returns {Observable<AxiosResponse<T>>}
	 * @memberof BaseHttpClient
	 */
	public patch<T = any>(
		url: string,
		data?: any,
		config?: AxiosRequestConfig
	): Observable<AxiosResponse<T>> {
		return defer(() => this.instance.patch(url, data, config));
	}

	/**
	 *
	 * AxiosInstance
	 * @readonly
	 * @type {AxiosInstance}
	 * @memberof BaseHttpClient
	 */
	public get axiosRef(): AxiosInstance {
		return this.instance;
	}
}
