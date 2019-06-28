import axios from 'axios';

/**
 * 基于Axios二次封装服务类调用
 * 用法文档 https://github.com/axios/axios
 */
class CommonService {
    constructor(options) {
        this.options = options || {};
        this.options.timeout = 60000;
        this.options.withCredentials = true;
        this.options.baseURL = '';
        this.defaultUrl = '';

        if (process.server) {
            // 服务端渲染请求时
            this.options.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT }/api/transport/getTransportData`;
        } else {
            // 本地渲染请求时
            this.options.baseURL = '/api/transport/getTransportData';

            // 本地配置请求
            if (this.options.key === 'local') {
                this.options.baseURL = '/';
            }
        }

        // 创建axios实例
        this.apiService = axios.create(options);

        // 请求拦截设置
        this.apiService.interceptors.request.use(
            config => {
                config.headers['x-key'] = this.options.key;
                console.log('request====================================', config); // for debug
                return config;
            },
            error => {
                // Do something with request error
                console.log('error======================================', error); // for debug
                Promise.reject(error);
            }
        );

        // 响应拦截
        this.apiService.interceptors.response.use(
            response => this.checkResponst(response),
            error => {
                // for debug
                console.log('error======================================', error); // for debug
                return this.checkResponst(error.response);
            }
        );
    }

    /**
     * 结果响应检测
     * @param {*} response
     */
    checkResponst(response) {
        // hole 检测响应头，例如401跳转等
        return response;
    }

    /**
     * 将真正请求地址隐藏到头部
     * @param {*} serviceUrl
     */
    addChannelData(serviceUrl) {
        this.apiService.defaults.headers.common['x-url'] = serviceUrl;
    }

    /**
     * 处理REQUEST
     * @param {*} config
     */
    reques(config = {}) {
        return this.apiService.reques(config);
    }

    /**
     * 处理GET
     * @param {*} url URL
     * @param {*} config 配置
     */
    get(url, config = {}) {
        this.addChannelData(url);
        return this.apiService.get(this.defaultUrl, config);
    }

    /**
     * 处理POST
     * @param {*} url URL
     * @param {*} data 参数
     * @param {*} config 配置
     */
    post(url, data = {}, config = {}) {
        this.addChannelData(url);
        return this.apiService.post(this.defaultUrl, data, config);
    }

    /**
     * 处理DELETE
     * @param {*} url
     * @param {*} config
     */
    delete(url, config = {}) {
        this.addChannelData(url);
        return this.apiService['delete'](this.defaultUrl, config);
    }

    /**
     * 处理HEAD
     * @param {*} url
     * @param {*} config
     */
    head(url, config = {}) {
        this.addChannelData(url);
        return this.apiService.head(this.defaultUrl, config);
    }

    /**
     * 处理PUT
     * @param {*} url
     * @param {*} data
     * @param {*} config
     */
    put(url, data, config = {}) {
        this.addChannelData(url);
        return this.apiService.put(url, data, config);
    }

    /**
     * 处理PATH
     * @param {*} url
     * @param {*} data
     * @param {*} config
     */
    patch(url, data, config) {
        this.addChannelData(url);
        return this.apiService.patch(url, data, config);
    }
}

export default CommonService;
