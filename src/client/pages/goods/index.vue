<template>
	<div class="goods">
		<Header :title="headerTitle"></Header>
		<van-swipe class="goods-swipe" :autoplay="30000">
			<van-swipe-item v-for="thumb in goods.thumbList" :key="thumb">
				<img :src="thumb" />
			</van-swipe-item>
		</van-swipe>

		<van-cell-group>
			<van-cell>
				<div class="goods-title">{{ goods.title }}</div>
				<div class="goods-price">{{ formatPrice(goods.price) }}</div>
			</van-cell>
			<van-cell class="goods-express">
				<van-col span="10">运费: {{ goods.express }}</van-col>
				<van-col span="14">剩余: {{ goods.remain }}</van-col>
			</van-cell>
		</van-cell-group>

		<van-cell-group class="goods-cell-group">
			<van-cell value="进入店铺" icon="shop-o" is-link @click="noneMethod">
				<template slot="title">
					<span class="van-cell-text">腾源豆腐店</span>
					<van-tag click="goods-tag" type="danger">自营</van-tag>
				</template>
			</van-cell>
			<van-cell title="线下门店" icon="location-o" is-link @click="noneMethod"></van-cell>
		</van-cell-group>

		<van-cell-group class="goods-cell-group">
			<van-cell title="查看商品详情" is-link @click="noneMethod"></van-cell>
		</van-cell-group>

		<van-goods-action>
			<van-goods-action-icon icon="chat-o" @click="noneMethod">客服</van-goods-action-icon>
			<van-goods-action-icon icon="cart-o" :info="this.$vxm.carts.cartsNum" @click="onClickCart">购物车</van-goods-action-icon>
			<van-goods-action-button type="warning" @click="addToCart">加入购物车</van-goods-action-button>
			<van-goods-action-button type="danger" @click="onClickCart">立即购买</van-goods-action-button>
		</van-goods-action>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Getter } from 'nuxt-property-decorator';
import Routers from '~/routers/RoutersClient';
import Header from '~/components/ComponentHeader.vue';
import { ICartsItem, CartsVO } from '~/models/ModelCarts';
import { Toast } from 'vant';
import localService from '~/service/ServiceLocal';
import { BaseView } from '~/core/views/ViewBase';
import { HttpConst } from '~/core/consts/ConstHttp';
import commonCart from '~/common/CommonCart';
import IUser from '~/models/ModelUser';
import { getUser } from '~/common/CommonCookie';

/** 产品页 */
@Component({
	components: {
		Header
	}
})
export default class Index extends BaseView {
	private headerTitle: string = '';
	private headerData: any = {
		title: '商品信息',
		meta: [{ hid: 'description', name: 'some seo description' }],
		noscript: [{ innerHTML: 'Body No Script', body: true }],
		script: [
			{ src: '/head.js' },
			{ src: '/body.js', body: true },
			{ src: '/defer.js', defer: '' }
		]
	};

	constructor() {
		super();
	}

	/** 页面商品数据 */
	private goods: any;

	/** 原始数据 */
	private sourceData: any;

	/**
	 * 用户数据
	 */
	private user: IUser;

	/** 初始化前将页面数据提取 */
	public async asyncData({ params, app, req }: any): Promise<any> {
		const goodsData: any = await localService.getGoodsData();
		const user: IUser = getUser(req, app);
		const sourceDta: any = await localService.getGoodsListData(user._id);

		return { sourceData: sourceDta.data, goods: goodsData.data.data, user };
	}

	/** 生命周期mounted */
	public mounted(): void {
		this.headerTitle = this.headerData.title;

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
	}

	/** 自定义SEO头部数据 */
	public head(): any {
		return this.headerData;
	}

	/** 格式化货币单位 */
	private formatPrice(): string {
		return '¥' + commonCart.formatPrice(this.goods.price);
	}

	/** 点击路由跳转 */
	private onClickCart(e: any): void {
		this.$router.push(Routers.CART_PAGE);
	}

	/** 加入购物车 */
	private async addToCart(): Promise<any> {
		const cartItem: ICartsItem = new CartsVO();
		cartItem.update(this.goods);
		cartItem.userId = this.$vxm.auth.auth._id;

		const addToCartResult: any = await localService.addToCart(cartItem);

		if (
			addToCartResult &&
			addToCartResult.status === HttpConst.STATUS_200
		) {
			this.$vxm.carts.updateCartsNum(cartItem);
			Toast('添加成功');
		}
	}

	/** 空方法处理 */
	private noneMethod(): void {
		console.log('Hole..');
	}
}
</script>

<style lang="stylus" scoped>
.goods {
    padding-bottom: 50px;

    &-swipe {
        img {
            width: 100%;
            display: block;
        }
    }

    &-title {
        font-size: 16px;
    }

    &-price {
        color: #f44;
    }

    &-express {
        color: #999;
        font-size: 12px;
        padding: 5px 15px;
    }

    &-cell-group {
        margin: 15px 0;

        .van-cell__value {
            color: #999;
        }
    }

    &-tag {
        margin-left: 5px;
    }
}
</style>
