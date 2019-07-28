import Vuex from 'vuex';
import Vue from 'vue';
import { root, RootStore } from './root';

Vue.use(Vuex);

export const store = new Vuex.Store({
	modules: {
		root,
	},
});

Vue.prototype.$vxm = {
	root: RootStore.CreateProxy(store, RootStore),
};

declare module 'vue/types/vue' {
	interface Vue {
		$vxm: {
			root: RootStore;
		};
	}
}
