import { AxiosRequestConfig } from 'axios';
import { stringify } from 'querystring';
import { BaseHttpClient } from '../../common/middleware/CommonHttpMiddleware';
import { ConfigDefault } from '../../../../config/ConfigDefault';

/**
 * 中转接口服务
 *
 * @export
 * @class TransportService
 */
export class TransportService extends BaseHttpClient {
	constructor() {
		super();
	}

	/**
	 * 中转
	 */
	public async getTransportData(request: any): Promise<any> {

		const url: string = request.headers[ConfigDefault.X_REAL_URL];
		const baseURL: string = request.headers[ConfigDefault.X_REAL_BASE_URL];
		const contentType: string = request.headers[ConfigDefault.CONTENT_TYPE];

		let headers: any = {};
		let requestObj: AxiosRequestConfig = {
			data: request.body,
			params: request.query || request.params,
			baseURL,
			url,
			method: request.method
		};

		if (
			contentType &&
			contentType === 'application/x-www-form-urlencoded'
		) {
			headers[ConfigDefault.CONTENT_TYPE] = contentType;
			requestObj.data = stringify(requestObj.data);
		}
		requestObj.headers = headers;

		return await this.request(requestObj).toPromise();
	}
}
