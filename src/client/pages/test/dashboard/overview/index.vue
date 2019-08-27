<template>
	<div>
		<!-- fade in  -->
		<transition name="van-fade">
			<div v-show="visible">Fade</div>
		</transition>

		<!-- slide up -->
		<transition name="van-slide-up">
			<div v-show="visible">Slide Up</div>
		</transition>

		<!-- slide down -->
		<transition name="van-slide-down">
			<div v-show="visible">Slide Down</div>
		</transition>

		<!-- slide left -->
		<transition name="van-slide-left">
			<div v-show="visible">Slide Left</div>
		</transition>

		<!-- slide right -->
		<transition name="van-slide-right">
			<div v-show="visible">Slide Right</div>
		</transition>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { BaseView } from '~/core/views/base.view';

/** Test class */
@Component({})
export default class Test extends BaseView {
	constructor() {
		super();
	}

	public visible: boolean = true;

	/** initial data */
	public msg: number = 123;

	/** get friends */
	public friends(): any {
		return this.$vxm.root.rFriends;
	}

	/** header data */
	public headers: any = [
		{
			text: 'Id',
			value: 'id'
		},
		{
			text: 'Name',
			value: 'name'
		}
	];

	/** lifecycle hooks */
	public created(): void {
		// hole
	}

	/** mounted data */
	public mounted(): void {
		// this.$vxm.root.getFriends();

		console.log('mounted :D');
	}

	/** fetch */
	public fetch(): void {
		// hole
	}

	/** fetch data by async */
	public async asyncData(): Promise<any> {
		console.log('async');
	}

	/** computed mgs */
	public computedMsg(): string {
		return 'computed ' + this.msg;
	}

	/** method */
	public greet(): void {
		console.log('greeting: ' + this.msg);
	}

	/** cutomer head data */
	public head(): any {
		return {
			title: 'Dashboard overview',
			meta: [
				{ name: 'twitter:card', content: 'summary' },
				{ name: 'twitter:site', content: '@nuxt_js' },
				{ name: 'twitter:title', content: 'Nuxt.js Twitter Card' },
				{
					name: 'twitter:description',
					content:
						'Nuxt.js lets you handle custom headers for your app with vue-meta'
				},
				{
					name: 'twitter:image',
					content:
						'https://avatars0.githubusercontent.com/u/23360933?v=3'
				},
				{ name: 'twitter:image:alt', content: 'Nuxt.js logo' }
			]
		};
	}
}
</script>
