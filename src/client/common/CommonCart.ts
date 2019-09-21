/**
 * 购物车公用逻辑
 */
class CommonCart {
	constructor() {
		// hole
	}

	/** 更新用户已添加入购物车数量 */
	public getUpdatedCartsList(
		list: Array<any>,
		sourceData: Array<any>
	): Array<any> {
		for (let indexList: number = 0; indexList < list.length; indexList++) {
			const element: any = list[indexList];

			for (let index: number = 0; index < sourceData.length; index++) {
				const item: any = sourceData[index];

				if (element._id === item.id) {
					element.num = item.num;
					break;
				}
			}
		}

		return list;
	}

	/** 格式价格 */
	public formatPrice(price: number = 1): string {
		return (price / 100).toFixed(2);
	}
}

export default new CommonCart();
