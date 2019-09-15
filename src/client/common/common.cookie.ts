import Cookie from 'js-cookie';

/**
 * 转换COOKIE为对象
 * @param cookie
 */
export function parseCookie(cookie: string): Object {
	const output: Object = {};
	cookie.split(/\s*;\s*/).forEach((pairCopy: any): any => {
		let pair: any = pairCopy;
		pair = pair.split(/\s*=\s*/);
		output[pair[0]] = pair.splice(1).join('=');
	});

	return output;
}

/**
 * 服务端时生成自定义axios头部token
 * @param config
 */
export function setCustomHeaderBySSR(app: any, axios: any): any {

	let accessToken: string = '';
	// 检测cookie是否存在
	if (app && app.context && app.context.req && app.context.req.headers) {
		// 抓取cookie内认证值
		const cookie: any = parseCookie(app.context.req.headers.cookie || '');

		if (cookie && cookie.auth) {
			let authData: any;
			try {
				authData = JSON.parse(decodeURIComponent(cookie.auth));
			} catch (error) {
				console.log(error);
			}
			accessToken = authData.accessToken;
		}
	}

	// 设置自定义头部token
	axios.setToken(accessToken);

	return accessToken;
}

/**
 * 客户端时生成自定义axios头部token
 * @param config
 */
export function setCustomHeaderByCSR(axios: any): any {

	let accessToken: string = '';
	const cookie: any = Cookie.get('auth');
	// 检测cookie是否存在
	if (cookie) {
		let authData: any;
		try {
			authData = JSON.parse(decodeURIComponent(cookie));
			if (authData) {
				accessToken = authData.accessToken;
			}
		} catch (error) {
			console.log(error);
		}
	}

	// 设置自定义头部token
	axios.setToken(accessToken);

	return accessToken;
}

/**
 * 客户端更新axios头部token
 * @param config
 */
export function updateCustomHeaderByCSR(accessToken: string, axios: any): any {
	// 设置自定义头部token
	axios.setToken(accessToken);
}
