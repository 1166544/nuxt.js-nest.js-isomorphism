import Vue from 'vue';
import {
	Button,
	Cell,
	CellGroup,
	Icon,
	Row,
	Col,
	Dialog,
	Toast,
	Skeleton,
	List,
	PullRefresh,
	NavBar,
} from 'vant';

import 'vant/lib/index.css';

// 注册通用底层组件
Vue.use(Button);
Vue.use(Cell).use(CellGroup);
Vue.use(Icon);
Vue.use(Row).use(Col);
Vue.use(Dialog);
Vue.use(Toast);
Vue.use(Skeleton);
Vue.use(List);
Vue.use(PullRefresh);
Vue.use(NavBar);
