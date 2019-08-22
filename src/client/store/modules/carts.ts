import {
	action,
	Module,
	mutation,
	VuexModule
} from 'vuex-class-component';
import { ICarts, CartsVO } from '~/models/carts';

/**
 * 购物车Store定义
 *
 * @export
 * @class CartsStore
 * @extends {VuexModule}
 */
@Module({ namespacedPath: 'carts/' })
export class CartsStore extends VuexModule {

	/**
	 * 购物车物品总数
	 *
	 * @type {Array<ICarts>}
	 * @memberof CartsStore
	 */
	private cartsListSource: Array<ICarts> = [];

	/**
	 * 获取购物车物品数量
	 *
	 * @readonly
	 * @type {*}
	 * @memberof CartsStore
	 */
	public get cartsList(): Array<ICarts> {
		return this.cartsListSource;
	}

	/**
	 * 获取购物车数量
	 *
	 * @readonly
	 * @type {number}
	 * @memberof CartsStore
	 */
	public get cartsNum(): number {
		return this.cartsListSource.length;
	}

	/**
	 * 设置购物车物品数量
	 *
	 * @param {*} friends
	 * @memberof CartsStore
	 */
	@mutation
	public addCarts(item: ICarts): void {
		this.cartsListSource.push(item);
	}

	/**
	 * 更新购物车列表
	 *
	 * @param {Array<ICarts>} cartsList
	 * @memberof CartsStore
	 */
	@mutation
	public updateCarts(cartsList: Array<ICarts>): void {
		this.cartsListSource = cartsList;
	}

	/**
	 * 异步获取购物车物品数量,例如调用接口
	 *
	 * @returns {Promise<any>}
	 * @memberof CartsStore
	 */
	@action()
	public async getCartsListFromAsync(): Promise<any> {
		// const data: any = await axios.get('/carts.json');

		// test
		if (this.cartsListSource.length) {

			return {};
		}
		const data: any = [{
			id: '1',
			title: '进口香蕉',
			desc: '约250g，2根',
			price: 200,
			num: '1',
			thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg'
			// tslint:disable-next-line:align
		}, {
			id: '2',
			title: '陕西蜜梨',
			desc: '约600g',
			price: 690,
			num: '1',
			thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg'
			// tslint:disable-next-line:align
		}, {
			id: '3',
			title: '美国伽力果',
			desc: '约680g/3个',
			price: 2680,
			num: '1',
			thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg'
		}];

		while (data.length) {
			const item: any = data.shift();
			const cartItem: CartsVO = new CartsVO();

			cartItem.update(item);
			this.addCarts(cartItem);
		}
		// test

		return data;
	}
}

/** CartsStore */
export const carts: any = CartsStore.ExtractVuexModule(CartsStore);
