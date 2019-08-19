<template>
	<div>
		<input v-model="msg" />
		<p>prop: {{propMessage}}</p>
		<p>msg: {{msg}}</p>
		<p>helloMsg: {{helloMsg}}</p>
		<p>computed msg: {{computedMsg}}</p>
		<button @click="greet">Greet</button>
		<van-button size="small" type="default">默认按钮</van-button>
		<van-button size="small" type="primary">主要按钮</van-button>
		<van-button size="small" type="info">信息按钮</van-button>
		<van-button size="small" type="warning">警告按钮</van-button>
		<van-button type="danger">危险按钮</van-button>
		<van-button type="primary" @click="showPopup">展示弹出层</van-button>

		<van-cell-group>
			<van-cell title="单元格" value="内容" />
			<van-cell title="单元格" value="内容" label="描述信息" />
			<van-skeleton title avatar :row="3" :loading="loading">
				<div>{{ip}}</div>
			</van-skeleton>
		</van-cell-group>
	</div>
</template>

<script lang="ts">
import {
	Component,
	Vue,
	Inject,
	Model,
	Prop,
	Provide,
	Watch,
	Emit
} from 'nuxt-property-decorator';
import TwitterHeadCard from '~/components/TwitterHeadCard.vue';

/** 测试用SYMBOL */
const symbol: any = Symbol('DemoTest');

/** 示例模块，例举所有可能用到语法和属性 */
@Component({
	components: {
		// 注册组件
		TwitterHeadCard
	}
})
export default class Demo extends Vue {
	// TODO: add following demo
	// Vue Property Decorator
	// Vue class component
	// Vuex Class
	// Nuxt Class Component

	public msg: number = 123;
	public helloMsg: string = `Hello, ${this.propMessage}`;

	/**
	 * 定义普通属性，相当于 data() {
	 * 	return {
	 * 		count: 0
	 * 	};
	 * } */
	public count: number = 0;

	// ============================= Inject() ====================================
	/**
	 * 注入属性，以下内容相当于:
	 * inject: {
	 * 		foo: 'foo',
	 * 		bar: 'bar',
	 * 		[symbol]: symbol
	 * }
	 */
	/** 注入属性foo */
	@Inject()
	public foo: string = 'foo';

	/** 注入属性bar */
	@Inject('bar')
	public bar: string;

	/** 注入符号symbol */
	@Inject(symbol)
	public symbolValue: string;
	// ==========================================================================

	// ============================= Model() ====================================
	/**
	 * Model定义，相当于:
	 * model: {
	 * 	prop: 'checked',
	 *  event: 'change'
	 * }
	 */
	@Model('change')
	public checked: boolean;
	// =========================================================================

	// ============================= Prop() ====================================
	/**
	 * Prop定义，以下代码相当于:
	 * props: {
	 *  propA: Number,
	 * 	propB: {
	 * 		type: String,
	 * 		defalut: 'default value'
	 * 	},
	 * 	propC: [String, Boolean],
	 * 	propD: { type: null }
	 * }
	 */
	@Prop()
	public propMessage: string;

	@Prop()
	public propA: number;

	@Prop({ default: 'default value' })
	private propB: string;

	@Prop([String, Boolean])
	protected propC: any;

	@Prop({ type: null })
	protected propD: any;
	// ============================================================================

	// ============================= Provide() ====================================
	/**
	 * Provide,以下代码相当于:
	 * data() {
	 * 	fooValue: 'foo',
	 *  baz: 'bar'
	 * },
	 * provide() {
	 * 	return {
	 * 		fooValue: this.fooValue,
	 * 		baz: this.baz
	 * 	}
	 * }
	 * */
	@Provide()
	public fooValue: string = 'foo';

	@Provide('bar')
	public baz: string = 'bar';
	// ==========================================================================

	// ============================= Watch() ====================================
	/**
	 * Watch 以下代码相当于:
	 * methods: {
	 * 	onChildChanged(val, oldVal) {},
	 *  onPersonChanged(val, oldVal) {}
	 * },
	 * watch: {
	 *	'child': {
	 *	 handler: 'onChildChanged',
	 *	 immediate: false,
	 *	 deep: false
	 * 	},
	 *	'person': {
	 *	 handler: 'onPersonChanged',
	 *	 immediate: true,
	 *	 deep: true
	 * 	}
	 * }
	 */
	/** watch */
	@Watch('child')
	public onChildChanged(val: string, oldVal: string): any {
		// hole
	}

	/** watch person */
	@Watch('person', { immediate: true, deep: true })
	public onPersonChanged(val: any, oldVal: any): any {
		// hole
	}
	// ==========================================================================

	// ============================= Emit() =====================================
	/**
	 * Emit,以下代码相当于:
	 * data() {
	 * 	return {
	 * 		count: 0
	 * 	}
	 * },
	 * methods: {
	 * 	addToCount(n) {
	 * 		this.count += n;
	 * 		this.$emit('add-to-count', n);
	 * 	},
	 * 	resetCount() {
	 * 		this.count = 0;
	 * 		this.$emit('reset');
	 * 	},
	 * 	returnValue() {
	 * 		this.$emit('return-value', 10);
	 * 	},
	 * 	onInputChange(e) {
	 * 		this.$emit('on-input-change'm e.target.value, e);
	 * 	},
	 * 	promise() {
	 * 		const promise = new Promise(resolve => {
	 * 			setTimeout(() => {
	 * 				resolve(20)
	 * 			}, 0)
	 * 		})
	 *
	 * 		promise.then(value => {
	 * 			this.$emit('promise', value);
	 * 		});
	 * 	}
	 * }
	 * */
	@Emit()
	public addToCount(n: number): void {
		this.count += n;
	}

	/** reset count emit */
	@Emit('reset')
	public resetCount(): void {
		this.count = 0;
	}

	/** return value emit */
	@Emit()
	public returnValue(): number {
		return 10;
	}

	/** on input change emit */
	@Emit()
	public onInputChange(e: any): any {
		return e.target.value;
	}

	/** promise emit */
	@Emit()
	public promise(): Promise<any> {
		return new Promise((resolve: any, reject: any): any => {
			const NUM_20: number = 20;
			setTimeout(() => {
				resolve(NUM_20);
			}, 0);
		});
	}
	// ==========================================================================

	/** 普通勾子函数，像正常函数一样重写 */
	public beforeRouteLeave(to: any, from: any, next: any): void {
		// called when the route that renders this component is about to
		// be navigated away from.
		// has access to `this` component instance.
		console.log('beforeRouteLeave called.');
	}

	/** 普通勾子函数mounted */
	public mounted(): void {
		this.greet();
	}

	/** get computed return string value */
	public get computedMsg(): string {
		return `computed ${this.msg}`;
	}

	/** 普通方法 */
	private greet(): void {
		console.log('greeting: ', this.msg);
	}
}
</script>
