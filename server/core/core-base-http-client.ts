import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { defer, Observable } from 'rxjs';
import ProxyAgent from 'proxy-agent';

/**
 * 环境变量配置
 *
 * @export
 * @enum {number}
 */
export enum ENVIRONMENT {
    ENV_PROD = 'prod',
    ENV_DEVELOPMENT = 'development',
    LOCAL_STR = 'NODE_ENV',
}

/**
 *
 * http 请求基类
 * @export
 * @class CoreHttpClient
 */
export class CoreHttpClient {
    /**
     * http代理地址
     */
    private proxyUri = process.env.http_proxy;

    /**
     * Axios 实例
     */
    private readonly instance: AxiosInstance = Axios;

    constructor() {
        // 请求
        this.instance.interceptors.request.use(
            (request: AxiosRequestConfig) => {
                request.headers.startInvokeTime = Date.now();
                if (
                    process.env[ENVIRONMENT.LOCAL_STR] ===
                    ENVIRONMENT.ENV_DEVELOPMENT
                ) {
                    // 如果是开发模式则添加代理，供charles输出
                    request.httpAgent = new ProxyAgent(this.proxyUri);
                    request.httpsAgent = new ProxyAgent(this.proxyUri);
                }

                return request;
            },
            (error: any) => {
                console.log(error.response);
            },
        );

        // 响应
        this.instance.interceptors.response.use(
            (response: AxiosResponse) => {
                console.log(response);

                return response;
            },
            error => {
                console.log('error.......', error);
                throw error;
            },
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
        config: AxiosRequestConfig,
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
        config?: AxiosRequestConfig,
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
        config?: AxiosRequestConfig,
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
        config?: AxiosRequestConfig,
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
        data?,
        config?: AxiosRequestConfig,
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
        data?,
        config?: AxiosRequestConfig,
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
        data?,
        config?: AxiosRequestConfig,
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
