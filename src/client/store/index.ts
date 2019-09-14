import Vue from 'vue';
import Vuex from 'vuex';
import { root, RootStore } from './modules/root';
import { carts, CartsStore } from './modules/carts';
import { auth, AuthStore } from './modules/auth';

Vue.use(Vuex);

/** store */
export const store: any = new Vuex.Store({
	modules: {
		root,
		carts,
		auth
	}
});

/** 注册store实例 */
Vue.prototype.$vxm = {
	root: RootStore.CreateProxy(store, RootStore),
	carts: CartsStore.CreateProxy(store, CartsStore),
	auth: CartsStore.CreateProxy(store, AuthStore)
};

/** 定义接口格式用于TS语法提示 */
declare module 'vue/types/vue' {

	/** define vue interface */
	// tslint:disable-next-line:interface-name
	interface Vue {
		$vxm: {
			root: RootStore;
			carts: CartsStore;
			auth: AuthStore;
		};
	}
}
