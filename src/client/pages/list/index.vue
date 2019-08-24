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
	private listData: any;
	private headerTitle: string = '';
	private headerData: any = {
		title: 'List Page',
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
	public async asyncData({ req }: any): Promise<any> {
		const data: any = await cnodeService.getTopics();

		return { listData: data.data };
	}

	/** 自定义SEO头部数据 */
	public head(): any {
		return this.headerData;
	}

	/** 生命周期computed */
	private mounted(): void {
		this.headerTitle = this.headerData.title;
		console.log(this.listData);
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
