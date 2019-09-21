<template>
	<div>
		<van-row>
			<van-col span="8">span: 8</van-col>
			<van-col span="8">span: 8</van-col>
			<van-col span="8">span: 8</van-col>
		</van-row>

		<van-row>
			<van-col span="4">span: 4</van-col>
			<van-col span="10" offset="4">offset: 4, span: 10</van-col>
			<van-col span="6">span: 6</van-col>
		</van-row>

		<van-row>
			<van-col offset="12" span="12">offset: 12, span: 12</van-col>
		</van-row>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import { BaseView } from '~/core/views/ViewBase';

/** Inspire class */
@Component({
	props: {
		propMessage: String
	}
})
export default class Inspire extends BaseView {
	/** init data */
	public msg: number = 123;

	/** some data helloMsg */
	public helloMsg: string = 'Inspire,';

	/** lifecycle hook mounted */
	public mounted(): void {
		this.greet();
	}

	/** computed */
	public get computedMsg(): string {
		return 'Computed ' + this.msg;
	}

	/** method - greet */
	public greet(): void {
		alert('greeting: ' + this.msg);
	}
}
</script>
