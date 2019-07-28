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

@Component({})
export default class Test extends Vue {
	@State friends;

	// initial data
	msg = 123;

	headers = [
		{
			text: 'Id',
			value: 'id',
		},
		{
			text: 'Name',
			value: 'name',
		},
	];

	// lifecycle hooks
	created() {
		console.log('created');
	}

	mounted() {
		console.log('mounted :D');
	}

	fetch() {
		console.log('fetch');
	}

	async asyncData() {
		console.log('async');
	}

	// computed
	get computedMsg() {
		return 'computed ' + this.msg;
	}

	// method
	greet() {
		alert('greeting: ' + this.msg);
	}
}
</script>
