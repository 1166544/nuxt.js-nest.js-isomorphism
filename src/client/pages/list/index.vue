<template>
	<div>
		<Header :title="headerTitle"></Header>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import Header from '~/components/Header.vue';
import { Toast } from 'vant';
import cnodeService from '~/service/cnode.service';

/** 主题列表页 */
@Component({
	components: {
		Header
	}
})
export default class Index extends Vue {
	private listData: any = [
		{
			id: '5d5cbb25421846662d983a25',
			author_id: '5d5104cc697873456c6bca69',
			tab: 'share',
			content:
				'<p><strong>Nebulan Graph 捉虫计划</strong> 是开源的分布式图数据库 —— Nebula 发起的「找 Bug」活动，旨在发动开源社区的力量共建图数据库 Nebula。',
			title: '众测图数据库 Nebula Graph | 捉虫计划已开启，这项有礼',
			last_reply_at: '2019-08-23T14:56:12.364Z',
			good: false,
			top: true,
			reply_count: 3,
			visit_count: 1531,
			create_at: '2019-08-21T03:31:49.789Z',
			author: {
				loginname: 'QingZ11',
				avatar_url:
					'https://avatars0.githubusercontent.com/u/38887077?v=4&s=120'
			}
		}
	];

	/** 页面显示标题 */
	private headerTitle: string = '';

	/** 页面TDK */
	private headerData: any = {
		title: 'List Page',
		meta: [{ hid: 'description', name: 'some seo description' }],
		noscript: [{ innerHTML: 'Body No Script', body: true }]
	};

	constructor() {
		super();
	}

	/** 异步数据 */
	public async asyncData({ req }: any): Promise<any> {
		const data: any = await cnodeService.getTopics();

		return { listData: data.data.data };
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
