<template>
	<v-layout column justify-center align-center>
		<v-flex xs12 sm8 md6>
			<v-card>
				<v-card-title class="headline">YES!</v-card-title>
				<v-card-text>
					<v-data-table :headers="headers" :items="friends" class="elevation-1">
						<template v-slot:items="props">
							<td>{{ props.item.id }}</td>
							<td>{{ props.item.name }}</td>
						</template>
          			</v-data-table>
        		</v-card-text>
      		</v-card>
    	</v-flex>
  	</v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({})
export default class Test extends Vue {
	// initial data
	msg = 123;

	get friends() {
		return this.$vxm.root.rFriends;
	}

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
	created() {}

	mounted() {
		this.$vxm.root.getFriends();

		console.log('mounted :D');
	}

	fetch() {}

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
