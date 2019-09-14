/**
 * 转换COOKIE为对象
 * @param cookie
 */
export default function parseCookie(cookie: string): Object {
	const output: Object = {};
	cookie.split(/\s*;\s*/).forEach((pairCopy: any): any => {
		let pair: any = pairCopy;
		pair = pair.split(/\s*=\s*/);
		output[pair[0]] = pair.splice(1).join('=');
	});

	return output;
}
