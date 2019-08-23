import configService from '~/core/service/config.service';
import { NuxtAxiosInstance } from '@nuxtjs/axios';

/** axios defined */
export let axios: NuxtAxiosInstance = null;

export const CODE_400: number = 400;
export const CODE_500: number = 500;

/** axios instance */
export default ({ app, redirect }): any => {
	axios = app.$axios;
	axios.defaults.baseURL = '';

	configService.saveAxios(axios);

	// 设置自定义头部,TOKEN, AUTH等
	// Adds header: `Authorization: test` to all requests
	axios.setHeader('Authorization', 'test');

	// Adds header: `Content-Type: application/x-www-form-urlencoded` to only post requests
	// axios.setHeader('Content-Type', 'application/x-www-form-urlencoded', [
	// 	'post'
	// ]);

	// Removes default Content-Type header from `post` scope
	// axios.setHeader('Content-Type', false, ['post']);

	// Adds header: `Authorization: 123` to all requests
	// axios.setToken('123');

	// Overrides `Authorization` header with new value
	// axios.setToken('456');

	// Adds header: `Authorization: Bearer 123` to all requests
	// axios.setToken('123', 'Bearer');

	// Adds header: `Authorization: Bearer 123` to only post and delete requests
	// axios.setToken('123', 'Bearer', ['post', 'delete']);

	// Removes default Authorization header from `common` scope (all requests)
	// axios.setToken(false);

	// 注册状态回调
	axios.onRequest((config: any): any => {
		// console.log('onRequest..', config);
	});
	axios.onResponse((response: any): any => {
		// console.log('onResponse..', response);
	});
	axios.onError((error: any): any => {
		const code: number = Number(error.response && error.response.status);
		if (code === CODE_400) {
			redirect('/400');
		}
		if (code === CODE_500) {
			redirect('/500');
		}
	});
	axios.onRequestError((error: any): any => {
		console.log('onRequestError...', error);
	});
	axios.onResponseError((error: any): any => {
		console.log('onResponseError...', error);
	});
};
