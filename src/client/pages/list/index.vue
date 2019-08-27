<template>
	<div>
		<Header :title="headerTitle"></Header>
		<van-pull-refresh v-model="loading" @refresh="onRefresh">
				<van-list
					v-model="loading"
					:finished="finished"
					finished-text="没有更多了"
					@load="onLoad"
					:error.sync="error"
					error-text="请求失败，点击重新加载"
				>
					<van-cell-group v-for="item in listData" :key="item.id">
						<van-cell :title="item.author.loginname" size="large">
						</van-cell>
						<van-card
							:num="item.reply_count"
							:price="item.reply_count"
							:desc="item.create_at"
							:title="item.title"
							:thumb="item.author.avatar_url"
							:origin-price="item.visit_count"
							@click="onCardClick(item)"
							>
							<div slot="tags">
								<van-tag plain type="danger">{{item.tab.toUpperCase()}}</van-tag>
								<van-tag plain type="danger">{{ item.top ? '上升' : '下降' }}</van-tag>
							</div>
						</van-card>
					</van-cell-group>
				</van-list>
			</van-pull-refresh>
		</van-pull-refresh>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import Header from '~/components/header.component.vue';
import { Toast } from 'vant';
import cnodeService from '~/service/cnode.service';
import localService from '~/service/local.service';
import Routers from '~/routers/routers';
import { BaseView } from '~/core/views/base.view';

/** 主题列表页 */
@Component({
	components: {
		Header
	}
})
export default class Index extends BaseView {
	/** 列表数据 */
	private listData: any = [];

	/** 页面显示标题 */
	private headerTitle: string = '';

	/** 加载中标记 */
	private loading: boolean = false;

	/** 是否已加载完成标记 */
	private finished: boolean = false;

	/** 错误信息 */
	private error: boolean = false;

	/** 页面TDK */
	private headerData: any = {
		title: 'List Page',
		meta: [{ hid: 'description', name: 'some seo description' }],
		noscript: [{ innerHTML: 'Body No Script', body: true }]
	};

	constructor() {
		super();
	}

	/** card点击 */
	private onCardClick(item: any): void {
		this.$router.push(`${Routers.CART_PAGE}?id=${item.id}`);
	}

	/** 异步数据 */
	public async asyncData({ req }: any): Promise<any> {
		// const data: any = await cnodeService.getTopics();
		const data: any = await localService.getListData();

		return { listData: data.data };
	}

	/** 下拉刷新 */
	private async onRefresh(): Promise<any> {
		const data: any = await localService.getListData();

		this.listData = data.data;
		this.loading = false;
	}

	/** 上拉分页刷新事件 */
	public async onLoad(): Promise<any> {
		const data: any = await localService.getListData();

		this.listData = this.listData.concat(data.data);
		this.loading = false;

		// 当最后一页时显示该标记
		// this.finished = true;
	}

	/** 自定义SEO头部数据 */
	public head(): any {
		return this.headerData;
	}

	/** 生命周期computed */
	private mounted(): void {
		this.headerTitle = this.headerData.title;
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
