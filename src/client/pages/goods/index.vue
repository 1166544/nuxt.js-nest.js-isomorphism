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
			<van-goods-action-icon icon="cart-o" :info="cartsCount" @click="onClickCart">购物车</van-goods-action-icon>
			<van-goods-action-button type="warning" @click="addToCart">加入购物车</van-goods-action-button>
			<van-goods-action-button type="danger" @click="onClickCart">立即购买</van-goods-action-button>
		</van-goods-action>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import Routers from '~/routers/routers';
import Header from '~/components/Header';
import { ICarts, CartsVO } from '~/models/carts';
import { Toast } from 'vant';

/** 产品页 */
@Component({
	components: {
		Header
	}
})
export default class Index extends Vue {
	/** 购物车数量 */
	private cartsCount: number = 0;
	private headerTitle: string = '';
	private headerData: any = {
		title: 'Goods Page',
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
	private goods: any = {
		title: '美国伽力果（约680g/3个）',
		price: 2680,
		express: '免邮',
		remain: 19,
		desc: '约680g/3个',
		num: '1',
		thumb:
			'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
		thumbList: [
			'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
			'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg'
		]
	};

	/** 生命周期mounted */
	public mounted(): void {
		this.cartsCount = this.$vxm.carts.cartsList.length;
		this.headerTitle = this.headerData.title;
	}

	/** 自定义SEO头部数据 */
	public head(): any {
		return this.headerData;
	}

	/** 格式化货币单位 */
	private formatPrice(): string {
		return '¥' + (this.goods.price / 100).toFixed(2);
	}

	/** 点击路由跳转 */
	private onClickCart(e: any): void {
		this.$router.push(Routers.CART_PAGE);
	}

	/** 加入购物车 */
	private addToCart(): void {
		const cartItem: ICarts = new CartsVO();
		cartItem.update(this.goods);

		this.$vxm.carts.addCarts(cartItem);
		Toast('添加成功');
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
