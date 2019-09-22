<template>
	<div class="container">
		<Header :title="headerTitle"></Header>
		<img
			class="user-poster"
			src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png"
		/>
		<van-row class="user-links">
			<van-col>
				<van-icon name="pending-payment" />请输入用户名、密码登录
			</van-col>
		</van-row>
		<van-panel title desc status="登录">
			<div>
				<van-cell-group>
					<van-field
						v-model="userName"
						required
						clearable
						label="用户名"
						border
						right-icon="question-o"
						placeholder="请输入用户名"
						@click-right-icon="$toast('question')"
					/>
					<van-field v-model="password" border type="password" label="密码" placeholder="请输入密码" required />
				</van-cell-group>
				<van-row class="user-links">
					<van-col>
						<van-icon name="pending-payment" />请输入用户名、密码登录
					</van-col>
				</van-row>
				<van-button round type="info" @click="postLogin" size="large">登录</van-button>
			</div>
		</van-panel>
		<van-cell-group>
			<van-cell title="说明:" value label="模拟用户登录，从服务端下发TOKEN至前端，请求时再从HEADER返回校验" />
		</van-cell-group>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import Cookie from 'js-cookie';
import Header from '~/components/ComponentHeader.vue';
import { BaseView } from '~/core/views/ViewBase';
import Routers from '~/routers/RoutersClient';
import localService from '~/service/ServiceLocal';
import md5 from 'md5';
import { HttpConst } from '~/core/consts/ConstHttp';
import { Toast } from 'vant';
import IUser from '../../../models/ModelUser';

/** LoginPage Layout */
@Component({
	components: {
		Header
	}
})
export default class LoginPage extends BaseView {
	private headerTitle: string = '';
	private headerData: any = {
		title: '欢迎你',
		meta: [{ hid: 'description', name: 'some seo description' }],
		noscript: [{ innerHTML: 'Body No Script', body: true }],
		script: [
			{ src: '/head.js' },
			{ src: '/body.js', body: true },
			{ src: '/defer.js', defer: '' }
		]
	};

	/** 原始数据 */
	private query: any;

	/** user name */
	private userName: string = 'test';

	/** password */
	private password: string = 'test';

	constructor() {
		super();
	}

	/** 异步数据 */
	public async asyncData({ req }: any): Promise<any> {
		if (process.server) {
			return { query: req.query || {} };
		} else {
			return { query: {} };
		}
	}

	/** 自定义SEO头部数据 */
	public head(): any {
		return this.headerData;
	}

	/** 生命周期mounted */
	public mounted(): void {
		this.headerTitle = this.headerData.title;
	}

	/** 登录 */
	private async postLogin(): Promise<any> {
		const loginResult: any = await localService.login(
			this.userName,
			md5(this.password)
		);

		if (loginResult && loginResult.data && loginResult.data.data) {
			const loginData: any = loginResult.data.data;

			switch (loginResult.data.code) {
				case HttpConst.STATUS_200:
					this.saveLoginData(loginData);
					break;
				case HttpConst.STATUS_401:
				case HttpConst.STATUS_403:
					Toast(loginData.message);
					break;
			}
		}
	}

	/** 保存登录信息 */
	private saveLoginData(auth: IUser): void {
		// 存入store和Cookie
		this.$vxm.auth.setAuth(auth); // 客户端渲染使用
		Cookie.set('auth', auth); // 服务端渲染使用

		// 存入axios头部拦截器
		localService.updateIntercept(auth);

		// 重定向
		const redirectUrl: string = this.query.uri || '/';
		this.$router.push(redirectUrl);
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
    visibility: hidden;
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
