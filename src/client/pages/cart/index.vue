<template>
	<div>
		<Header :title="headerTitle"></Header>
		<van-checkbox-group class="card-goods" v-model="checkedGoods" @change="countTotalPrice">
			<van-checkbox
				class="card-goods__item"
				v-for="item in this.$vxm.carts.cartsList"
				:key="item.id"
				:name="item.id"
			>
				<van-card
					:title="item.title"
					:desc="item.desc"
					:num="item.num"
					:price="formatPrice(item.price)"
					:thumb="item.thumb"
				>
					<div slot="footer">
						<van-stepper v-model="item.num" min="1" max="100" />
					</div>
				</van-card>
			</van-checkbox>
		</van-checkbox-group>
		<van-submit-bar
			:price="totalPrice"
			:disabled="!checkedGoods.length"
			button-text="结算"
			@submit="onSubmit"
		>
			<span slot="tip">
				总共
				<span>{{checkedGoods.length}}</span>
				件，商品
			</span>
		</van-submit-bar>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { ICartsItem, CartsVO } from '~/models/ModelCarts';
import Header from '~/components/ComponentHeader.vue';
import { Toast } from 'vant';
import { BaseView } from '~/core/views/ViewBase';
import localService from '~/service/ServiceLocal';
import commonCart from '~/common/CommonCart';
import { HttpConst } from '~/core/consts/ConstHttp';
import IUser from '../../models/ModelUser';
import { getUser } from '~/common/CommonCookie';

/** 购物车页 */
@Component({
	components: {
		Header
	}
})
export default class Index extends BaseView {
	private checkedGoods: Array<string> = [];
	private totalPrice: number = 0;
	private headerTitle: string = '';
	private headerData: any = {
		title: '购物车',
		meta: [{ hid: 'description', name: 'some seo description' }],
		noscript: [{ innerHTML: 'Body No Script', body: true }],
		script: [
			{ src: '/head.js' },
			{ src: '/body.js', body: true },
			{ src: '/defer.js', defer: '' }
		]
	};

	/** 原始数据 */
	private sourceData: any;

	/**
	 * 用户数据
	 */
	private user: IUser;

	constructor() {
		super();
	}

	/** 异步数据 */
	public async asyncData({ params, app, req }: any): Promise<any> {
		const goods: Array<ICartsItem> = [];
		const checkedGoods: Array<any> = [];

		const user: IUser = getUser(req, app);
		const data: any = await localService.getGoodsListData(user._id);

		return { sourceData: data.data, checkedGoods, goods, user };
	}

	/** 自定义SEO头部数据 */
	public head(): any {
		return this.headerData;
	}

	/** 生命周期computed */
	private mounted(): void {
		// 更新用户数据
		this.$vxm.auth.setAuth(this.user);

		// 依据ID列表获取已存入购物车列表数据
		localService.getCartsListData(this.sourceData).then((data: any) => {
			const updatedCartsList: Array<any> = commonCart.getUpdatedCartsList(
				data.data.data,
				this.sourceData
			);
			this.$vxm.carts.getCartsListFromAsync(updatedCartsList);
		});

		this.headerTitle = this.headerData.title;
		this.countTotalPrice();
	}

	/** 计算总价 */
	private countTotalPrice(): void {
		this.totalPrice = this.$vxm.carts.cartsList.reduce(
			(total: any, item: ICartsItem): any => {
				const resultTotal: any =
					this.checkedGoods.indexOf(item.id) !== -1
						? item.price * item.num
						: 0;
				const cartItem: ICartsItem = new CartsVO();
				cartItem.update({
					id: item.id,
					num: item.num,
					userId: this.$vxm.auth.auth._id
				});

				// 更新更改数量入DB
				localService
					.addToCart(cartItem, CartsVO.FORCE_NUM)
					.then((e: any) => {
						console.log(e);
					});

				return total + resultTotal;
			},
			0
		);
	}

	/** 格式价格 */
	private formatPrice(price: number = 1): string {
		return commonCart.formatPrice(price);
	}

	/** on submit */
	private onSubmit(): void {
		Toast('TODO: 点击结算');
	}
}
</script>

<style lang="stylus" scoped>
.card-goods {
    padding: 20px 20px 0 20px;
    background-color: #fff;

    &__item {
        position: relative;
        background-color: #fafafa;

        .van-checkbox__label {
            width: 100%;
            height: auto; // temp
            padding: 0 10px 0 15px;
            box-sizing: border-box;
        }

        .van-checkbox__icon {
            top: 50%;
            left: 10px;
            z-index: 1;
            position: absolute;
            margin-top: -10px;
        }

        .van-card__price {
            color: #f44;
        }
    }
}
</style>
