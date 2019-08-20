<template>
	<div>
		<img src="https://hellorfimg.zcool.cn/preview260/650151028.jpg" class="user-poster" />

		<van-row class="user-links">
			<van-col span="6">
				<van-icon name="pending-payment" />待付款
			</van-col>
			<van-col span="6">
				<van-icon name="records" />待接单
			</van-col>
			<van-col span="6">
				<van-icon name="tosend" />待发货
			</van-col>
			<van-col span="6">
				<van-icon name="logistics" />已发货
			</van-col>
		</van-row>

		<van-cell-group class="user-group">
			<van-cell icon="records" title="全部订单" is-link />
		</van-cell-group>

		<van-cell-group>
			<van-cell icon="points" title="我的积分" is-link />
			<van-cell icon="gold-coin-o" title="我的优惠券" is-link />
			<van-cell icon="gift-o" title="我的礼物" is-link />
		</van-cell-group>
	</div>
</template>

<script lang="ts">
import Logo from '~/components/Logo.vue';
import TwitterHeadCard from '~/components/TwitterHeadCard.vue';
import { Component, Vue } from 'nuxt-property-decorator';

/** 首页 */
@Component({
	components: {
		Logo,
		TwitterHeadCard
	}
})
export default class Index extends Vue {
	constructor() {
		super();
	}

	/** custom head data */
	public head(): any {
		return {
			title: 'Isomorphism home page',
			meta: [{ hid: 'description', name: 'some seo description' }],
			noscript: [{ innerHTML: 'Body No Script', body: true }],
			script: [
				{ src: '/head.js' },
				{ src: '/body.js', body: true },
				{ src: '/defer.js', defer: '' }
			]
		};
	}
}
</script>

<style lang="stylus" scoped>
.user {
  &-poster {
    width: 100%;
    height: 53vw;
    display: block;
  }

  &-group {
    margin-bottom: 15px;
  }

  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;

    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
</style>
