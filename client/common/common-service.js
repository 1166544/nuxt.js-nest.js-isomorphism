import axios from 'axios';

/**
 * 基于Axios二次封装服务类调用
 * 用法文档 https://github.com/axios/axios
 */
class CommonService {
    constructor(optios) {
        this.optios = optios || {};
        this.optios.timeout = 60000;
        this.optios.withCredentials = true;

        // 服务端和本地基础地址判断
        if (process.server) {
            options.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT }/api/getData`;
        } else {
            options.baseURL = '/api/getData';
        }

        // 创建axios实例
        this.apiService = axios.create(options);

        // 请求拦截设置
        this.apiService.interceptors.request.use(
            config => {
                console.log('request====================================', config); // for debug
                return config;
            },
            error => {
                // Do something with request error
                console.log('error=====================================', error); // for debug
                Promise.reject(error);
            }
        );

        // 响应拦截
        this.apiService.interceptors.response.use(
            response => checkResponst(response),
            error => {
                // for debug
                console.log('err' + error);
                const response = error.response;

                return checkResponst(response);
            }
        );
    }

    /**
     * 处理REQUEST
     * @param {*} config
     */
    reques(config) {
        return this.apiService.reques(config);
    }

    /**
     * 处理GET
     * @param {*} url URL
     * @param {*} config 配置
     */
    get(url, config) {
        return this.apiService.get(url, config);
    }

    /**
     * 处理POST
     * @param {*} url URL
     * @param {*} data 参数
     * @param {*} config 配置
     */
    post(url, data, config) {
        return this.apiService.post(url, data, config);
    }

    /**
     * 处理DELETE
     * @param {*} url
     * @param {*} config
     */
    delete(url, config) {
        return this.apiService['delete'](url, config);
    }

    /**
     * 处理HEAD
     * @param {*} url
     * @param {*} config
     */
    head(url, config) {
        return this.apiService.head(url, config);
    }

    /**
     * 处理PUT
     * @param {*} url
     * @param {*} data
     * @param {*} config
     */
    put(url, data, config) {
        return this.apiService.put(url, data, config);
    }

    /**
     * 处理PATH
     * @param {*} url
     * @param {*} data
     * @param {*} config
     */
    patch(url, data, config) {
        return this.apiService.patch(url, data, config);
    }
}

export default CommonService;
