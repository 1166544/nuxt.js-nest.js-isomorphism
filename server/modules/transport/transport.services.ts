import { AxiosRequestConfig } from 'axios';
import { stringify } from 'querystring';
import { CoreHttpClient } from '../../core/core-base-http-client';
import { LocalService } from '../local/local.services';

/**
 * 请求 透传key
 */
export const CHANNEL_KEY: string = 'x-channel-key';

/**
 * 请求 透传url
 */
export const SERVICE_URL: string = 'x-service-api';

/**
 * content-type
 */
export const CONTENT_TYPE = 'content-type';

/**
 * 中转接口服务
 *
 * @export
 * @class TransportService
 */
export class TransportService {
    constructor(
        private readonly httpService: CoreHttpClient,
        private localService: LocalService,
    ) {
        // hole
    }

    /**
     * 中转
     */
    public async getTransportData(request): Promise<any> {
        const key = request.headers[CHANNEL_KEY];
        const url = request.headers[SERVICE_URL];
        const contentType = request.headers[CONTENT_TYPE];
        const remoteUrl: string = this.localService.getHostConfigUrlByKey(key);
        const headers: any = {};

        const requestObj: AxiosRequestConfig = {
            data: request.body,
            params: request.query || request.params,
            baseURL: remoteUrl,
            url,
            method: request.method,
        };

        if (
            contentType &&
            contentType === 'application/x-www-form-urlencoded'
        ) {
            headers[CONTENT_TYPE] = contentType;
            requestObj.data = stringify(requestObj.data);
        }
        requestObj.headers = headers;

        return await this.httpService.request(requestObj).toPromise();
    }
}
