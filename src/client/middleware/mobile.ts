/**
 * 判断是否为数移动端，同时输出标记
 *
 * @export
 * @param {*} ctx
 */
export default function (ctx: any): void {
	const userAgent: any = ctx.req ? ctx.req.headers['user-agent'] : navigator.userAgent;
	ctx.isMobile = /mobile/i.test(userAgent);
}
