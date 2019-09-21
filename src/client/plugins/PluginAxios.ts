import configService from '~/core/service/ServiceConfig';
import { NuxtAxiosInstance } from '@nuxtjs/axios';
import { HttpConst } from '~/core/consts/ConstHttp';
import Cookie from 'js-cookie';
import { setCustomHeaderBySSR } from '~/common/CommonCookie';

/** axios defined */
export let axios: NuxtAxiosInstance = null;

export const CODE_400: number = 400;
export const CODE_500: number = 500;

/** axios instance */
export default ({ app, redirect }): any => {
	axios = app.$axios;
	axios.defaults.baseURL = '';

	configService.saveAxios(axios);

	// Adds header: `Content-Type: application/x-www-form-urlencoded` to only post requests
	// axios.setHeader('Content-Type', 'application/x-www-form-urlencoded', [
	// 	'post'
	// ]);

	// Removes default Content-Type header from `post` scope
	// axios.setHeader('Content-Type', false, ['post']);

	// Overrides `Authorization` header with new value
	// axios.setToken('456');

	// Adds header: `Authorization: Bearer 123` to all requests
	// axios.setToken('123', 'Bearer');

	// Adds header: `Authorization: Bearer 123` to only post and delete requests
	// axios.setToken('123', 'Bearer', ['post', 'delete']);

	// Removes default Authorization header from `common` scope (all requests)
	// axios.setToken(false);
	// axios.setHeader('Authorization', getCustomHeader(app));

	// 服务端使用时设置accessToken
	setCustomHeaderBySSR(app, axios);

	// 注册状态回调
	axios.onRequest((config: any): any => {
		// 设置自定义头部,TOKEN, AUTH等
		// Adds header: `Authorization: test` to all requests
		// console.log(config.url);
	});
	axios.onResponse((response: any): any => {
		// console.log('onResponse..', response);
		switch (response.status) {
			case HttpConst.STATUS_401:
				redirect('/auth/login');
				break;
			case HttpConst.STATUS_403:
				if (process.client) {
					Cookie.set('auth', null);
				}
				redirect('/auth/login');
				break;
		}
	});
	axios.onError((error: any): any => {
		const code: number = Number(error.response && error.response.status);
		if (code === CODE_400) {
			redirect('/error/400');
		}
		if (code === CODE_500) {
			redirect('/error/500');
		}
	});
	axios.onRequestError((error: any): any => {
		console.log('onRequestError...', error);
	});
	axios.onResponseError((error: any): any => {
		console.log('onResponseError...', error);
	});
};
