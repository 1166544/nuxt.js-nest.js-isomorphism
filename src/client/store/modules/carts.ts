import {
	action,
	Module,
	mutation,
	VuexModule
} from 'vuex-class-component';
import { ICartsItem, CartsVO } from '~/models/carts';
// import { axios } from '~/plugins/axios.plugins';

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
	 * @type {Array<ICartsItem>}
	 * @memberof CartsStore
	 */
	private cartsListSource: Array<ICartsItem> = [];

	/**
	 * 获取购物车物品数量
	 *
	 * @readonly
	 * @type {*}
	 * @memberof CartsStore
	 */
	public get cartsList(): Array<ICartsItem> {
		return this.cartsListSource;
	}

	/**
	 * 获取购物车列表数据
	 *
	 * @readonly
	 * @type {number}
	 * @memberof CartsStore
	 */
	public get cartsNum(): number {
		return this.cartsListSource.length;
	}

	/**
	 * 设置购物车物品
	 *
	 * @param {*} friends
	 * @memberof CartsStore
	 */
	@mutation
	public addCarts(item: ICartsItem): void {
		this.cartsListSource.push(item);
	}

	/**
	 * 更新购物车列表
	 *
	 * @param {Array<ICartsItem>} cartsList
	 * @memberof CartsStore
	 */
	@mutation
	public updateCarts(cartsList: Array<ICartsItem>): void {
		this.cartsListSource = cartsList;
	}

	/**
	 * 异步获取购物车物品,例如调用接口
	 *
	 * @returns {Promise<any>}
	 * @memberof CartsStore
	 */
	@action()
	public async getCartsListFromAsync(sourceData: any): Promise<any> {
		if (this.cartsNum) {
			return '';
		}

		let data: Array<any>;

		if (sourceData) {
			// 页面渲染时已初始化
			if (sourceData && sourceData.length) {
				data = sourceData;
			}
		} else {
			// 页面渲染时未初始化
			/* const dataValue: any = await axios.get('/carts.json');
			let data: any = '';

			if (dataValue && dataValue.data) {
				if (dataValue.data.list) {
					data = dataValue.data.list;
				} else {
					data = JSON.parse(dataValue.data);
				}
			} */
		}

		while (data.length) {
			const item: any = data.shift();
			const cartItem: CartsVO = new CartsVO();

			cartItem.update(item);
			this.addCarts(cartItem);
		}

		return data;
	}
}

/** CartsStore */
export const carts: any = CartsStore.ExtractVuexModule(CartsStore);
