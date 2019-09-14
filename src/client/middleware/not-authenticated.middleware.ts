import configService from '~/core/service/config.service';
import { ConfigDefault } from '../../../config/default.config';
import parseCookie from '~/common/common.cookie';

const config: ConfigDefault = configService.getConfig();
const whiteList: Array<string> = config.authWhiteList();

/**
 * 检测是否在白名单中
 * @param url
 */
function checkWheatherInWhiteList(url: string): boolean {
	let isIn: boolean = false;

	for (let index: number = 0; index < whiteList.length; index++) {
		const element: string = whiteList[index];

		if (element.indexOf(url) !== -1) {
			isIn = true;
			break;
		}
	}

	return isIn;
}

/**
 * 判断是否为未登录
 *
 * @export
 * @param {*} ctx
 */
export default function ({ store, redirect, req }: any): void {
	if (process.server) {
		// 未登录跳转
		const originalUrl: string = req.originalUrl;
		const redirectUrl: string = `/auth/login?uri=${originalUrl}`;
		if (checkWheatherInWhiteList(originalUrl)) {
			// 判断COOKIE是否存在
			const cookie: any = parseCookie(req.headers.cookie || '');
			if (!store.state.modules.auth.auth && cookie && cookie.auth) {
				let authData: Object;
				try {
					authData = JSON.parse(decodeURIComponent(cookie.auth));
				} catch (error) {
					console.log(error);
				}
				store.state.modules.auth.auth = authData;
			}

			if (!store.state.modules.auth.auth) {
				return redirect(redirectUrl);
			}
		}
	}
}
