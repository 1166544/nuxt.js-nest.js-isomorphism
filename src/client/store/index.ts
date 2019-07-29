import Vue from 'vue';
import Vuex from 'vuex';
import { root, RootStore } from './root';

Vue.use(Vuex);

/** store */
export const store: any = new Vuex.Store({
	modules: {
		root
	}
});

Vue.prototype.$vxm = {
	root: RootStore.CreateProxy(store, RootStore)
};

/** declear */
declare module 'vue/types/vue' {

	/** define vue interface */
	// tslint:disable-next-line:interface-name
	interface Vue {
		$vxm: {
			root: RootStore;
		};
	}
}
