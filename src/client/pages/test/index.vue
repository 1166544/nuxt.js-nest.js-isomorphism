<template>
	<div>
		<span>{{ computedMsg }} - {{ msg }}</span>
		<van-button type="default" :headers="headers" :items="friends" class="elevation-1">
			<template v-slot:items="props">
				<div>{{ props.item.id }}</div>
				<div>{{ props.item.name }}</div>
			</template>
		</van-button>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { State } from 'vuex-class';
import { BaseView } from '~/core/views/base.view';

/** 测试模块 */
@Component({})
export default class Test extends BaseView {
	/** friends data */
	@State
	public friends: any;

	/** initial data msg */
	public msg: any = 123;

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

	/** lifecycle hooks created */
	public created(): void {
		console.log('created');
	}

	/** mounted */
	public mounted(): void {
		console.log('mounted :D');
	}

	/** fetch */
	public fetch(): void {
		console.log('fetch');
	}

	/** fecth async data */
	public async asyncData(): Promise<any> {
		console.log('async');
	}

	/** computed msg */
	public get computedMsg(): string {
		return 'computed ' + this.msg;
	}

	/** custom method greet */
	public greet(): void {
		alert('greeting: ' + this.msg);
	}
}
</script>
