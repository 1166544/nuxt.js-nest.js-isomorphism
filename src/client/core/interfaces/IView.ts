/**
 * 基础视图结构接口
 *
 * @export
 * @interface IView
 */
export interface IView {

	/**
	 * SEO页面标题
	 *
	 * @type {string}
	 * @memberof IView
	 */
	title: string;

	/**
	 * SEO页面描述
	 *
	 * @type {string}
	 * @memberof IView
	 */
	description: string;

	/**
	 * SEO页面关键字
	 *
	 * @type {string}
	 * @memberof IView
	 */
	keywords: string;
}
