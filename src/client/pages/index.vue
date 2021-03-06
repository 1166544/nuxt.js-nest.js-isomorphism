<template>
	<div>
		<img
			class="user-poster"
			src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png"
		/>

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
			<van-cell icon="gift-o" title="我的礼物" is-link @click="gotoList" />
			<van-cell class="cell-line" icon="shopping-cart-o" title="我的购物车" is-link @click="gotoCart">
				<div v-if="this.$vxm.carts.cartsNum > 0" class="badge">{{ this.$vxm.carts.cartsNum }}</div>
			</van-cell>
			<van-cell icon="coupon-o" title="我的货品" is-link @click="gotoGoods" />
			<van-cell icon="coupon-o" title="退出登录" is-link @click="logout" />
		</van-cell-group>
	</div>
</template>

<script lang="ts">
import Logo from '~/components/ComponentLogo.vue';
import TwitterHeadCard from '~/components/ComponentTwitter.vue';
import { Component, Vue } from 'nuxt-property-decorator';
import Routers from '~/routers/RoutersClient';
import localService from '~/service/ServiceLocal';
import { BaseView } from '~/core/views/ViewBase';
import commonCart from '~/common/CommonCart';
import Cookie from 'js-cookie';
import IUser from '~/models/ModelUser';
import { getUser } from '~/common/CommonCookie';

/** 首页 */
@Component({
	components: {
		Logo,
		TwitterHeadCard
	}
})
export default class Index extends BaseView {
	/** 原始数据 */
	private sourceData: any;

	/**
	 * 用户数据
	 */
	private user: IUser;

	constructor() {
		super();
	}

	/** ssr远程调用 */
	public async asyncData({ params, app, req }: any): Promise<any> {
		const user: IUser = getUser(req, app);
		const data: any = await localService.getGoodsListData(user._id);

		return { sourceData: data.data, title: data.data.length, user };
	}

	/** 生命周期mounted, 初始化页面后获取从服务端已获取好的数据，存入store */
	public mounted(): void {
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

	/** custom head data */
	public head(): any {
		return {
			title: 'Isomorphism home page ' + this.title,
			meta: [{ hid: 'description', name: 'some seo description' }],
			noscript: [{ innerHTML: 'Body No Script', body: true }],
			script: [
				{ src: '/head.js' },
				{ src: '/body.js', body: true },
				{ src: '/defer.js', defer: '' }
			]
		};
	}

	/** 跳转至购物车页 */
	private gotoCart(): void {
		this.$router.push(Routers.CART_PAGE);
	}

	/** 跳转至商品页 */
	private gotoGoods(): void {
		this.$router.push(Routers.GOODS_PAGE);
	}

	/** 跳转至列表页 */
	private gotoList(): void {
		this.$router.push(Routers.LIST_PAGE);
	}

	/** 退出登录 */
	private logout(): void {
		Cookie.remove('auth');
		this.$vxm.auth.setAuth(null);
		this.$router.push(Routers.LOGIN_PAGE);
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

/deep/ .cell-line {
  .van-cell__value {
    flex: none;
    margin-top: 3px;
  }
}

.badge {
  background-color: red;
  width: 18px;
  height: 18px;
  vertical-align: middle;
  line-height: 18px;
  margin: 0 3px 0 0;
  border-radius: 10px;
  color: #fff;
  text-align: center;
}
</style>
