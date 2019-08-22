<template>
	<div>
		<Header :title="headerData.title"></Header>
		<van-checkbox-group class="card-goods" v-model="checkedGoods">
			<van-checkbox class="card-goods__item" v-for="item in goods" :key="item.id" :name="item.id">
				<van-card
					:title="item.title"
					:desc="item.desc"
					:num="item.num"
					:price="formatPrice(item.price)"
					:thumb="item.thumb"
				/>
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
import { ICarts } from '~/models/carts';
import Header from '~/components/Header';

/** 购物车页 */
@Component({
	components: {
		Header
	}
})
export default class Index extends Vue {
	private checkedGoods: Array<string> = [];
	private goods: Array<any> = [];
	private totalPrice: number = 0;
	private headerData: any = {
		title: 'Cart Page',
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

	/** 异步数据 */
	public asyncData({ req }: any): any {
		const goods: Array<ICarts> = [];
		const checkedGoods: Array<any> = ['1', '2', '3'];

		return { checkedGoods, goods };
	}

	/** 自定义SEO头部数据 */
	public head(): any {
		return this.headerData;
	}

	/** 生命周期computed */
	private mounted(): void {
		this.goods = this.$vxm.carts.cartsList;
		this.countTotalPrice();
	}

	/** 计算总价 */
	private countTotalPrice(): void {
		this.totalPrice = this.goods.reduce((total: any, item: ICarts): any => {
			const resultTotal: any =
				this.checkedGoods.indexOf(item.id) !== -1 ? item.price : 0;

			return total + resultTotal;
		}, 0);
	}

	/** 格式价格 */
	private formatPrice(price: number = 1): string {
		console.log('format');

		return (price / 100).toFixed(2);
	}

	/** on submit */
	private onSubmit(): void {
		console.log('点击结算');
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
