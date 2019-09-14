<template>
	<div class="container">
		<Header :title="headerTitle"></Header>
		<h1>Sign in to access the secret page</h1>
		<div>
			<label for="email">
				<input id="email" type="email" value="test" />
			</label>
			<label for="password">
				<input id="password" type="password" value="test" />
			</label>
			<button @click="postLogin">login</button>
			<p>The credentials are not verified for the example purpose.</p>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import Cookie from 'js-cookie';
import Header from '~/components/header.component.vue';
import { BaseView } from '~/core/views/base.view';
import Routers from '~/routers/routers';

/** LoginPage Layout */
@Component({
	components: {
		Header
	}
})
export default class LoginPage extends BaseView {
	private headerTitle: string = '';
	private headerData: any = {
		title: 'Login Page',
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
	private postLogin(): void {
		setTimeout(() => {
			// we simulate the async request with timeout.
			const auth: any = {
				userId: 'gGotFromApiServi',
				userName: 'james',
				accessToken: 'someStringGotFromApiServiceWithAjax'
			};

			// 存入store和Cookie
			this.$vxm.auth.setAuth(auth); // mutating to store for client rendering
			Cookie.set('auth', auth); // saving token in cookie for server rendering

			// 重定向
			const redirectUrl: string = this.query.uri || '/';
			this.$router.push(redirectUrl);
		}, 1000);
	}
}
</script>

<style lang="stylus" scoped></style>
