<template>
	<div>
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
		/>
	</div>
</template>

<script lang="ts">
import Logo from '~/components/Logo.vue';
import { Component, Vue } from 'nuxt-property-decorator';
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast } from 'vant';

/** 购物车页 */
@Component({
	components: {
		Logo,
		[Checkbox.name]: Checkbox,
		[CheckboxGroup.name]: CheckboxGroup,
		[Card.name]: Card,
		[SubmitBar.name]: SubmitBar,
		[Toast.name]: Toast
	}
})
export default class Index extends Vue {
	private checkedGoods: Array<string> = [];
	private goods: Array<any> = [];
	private totalPrice: number = 0;

	constructor() {
		super();
	}

	/** 异步数据 */
	public asyncData({ req }: any): any {
		const goods: Array<any> = [
			{
				id: '1',
				title: '进口香蕉',
				desc: '约250g，2根',
				price: 200,
				num: '1',
				thumb:
					'https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg'
			},
			{
				id: '2',
				title: '陕西蜜梨',
				desc: '约600g',
				price: 690,
				num: '1',
				thumb:
					'https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg'
			},
			{
				id: '3',
				title: '美国伽力果',
				desc: '约680g/3个',
				price: 2680,
				num: '1',
				thumb:
					'https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg'
			}
		];

		const checkedGoods: Array<any> = ['1', '2', '3'];

		return { checkedGoods, goods };
	}

	/** 自定义SEO头部数据 */
	public head(): any {
		return {
			title: 'Cart page',
			meta: [{ hid: 'description', name: 'some seo description' }],
			noscript: [{ innerHTML: 'Body No Script', body: true }],
			script: [
				{ src: '/head.js' },
				{ src: '/body.js', body: true },
				{ src: '/defer.js', defer: '' }
			]
		};
	}

	/** 生命周期computed */
	private mounted(): void {
		this.countTotalPrice();
	}

	/** 计算总价 */
	private countTotalPrice(): void {
		this.totalPrice = this.goods.reduce((total: any, item: any): any => {
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
		Toast('点击结算');
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
