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
	Tag,
	PullRefresh,
	NavBar,
	Checkbox,
	CheckboxGroup,
	Card,
	SubmitBar,
	Swipe,
	SwipeItem,
	GoodsAction,
	GoodsActionIcon,
	GoodsActionButton,
	Stepper
} from 'vant';

import 'vant/lib/index.css';

// 注册通用底层组件
Vue.use(Button);
Vue.use(Cell).use(CellGroup);
Vue.use(Icon);
Vue.use(Row).use(Col);
Vue.use(Dialog);
Vue.use(Skeleton);
Vue.use(List);
Vue.use(PullRefresh);
Vue.use(NavBar);
Vue.use(Tag);
Vue.use(Col);
Vue.use(Icon);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(GoodsAction);
Vue.use(GoodsActionIcon);
Vue.use(GoodsActionButton);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Card);
Vue.use(SubmitBar);
Vue.use(Toast);
Vue.use(Stepper);
