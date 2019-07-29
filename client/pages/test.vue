<template>
  <div>
    <span>{{ computedMsg }} - {{ msg }}</span>
    <v-data-table :headers="headers" :items="friends" class="elevation-1">
      <template v-slot:items="props">
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.name }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { State } from 'vuex-class';

/** 测试模块 */
@Component({})
export default class Test extends Vue {
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
