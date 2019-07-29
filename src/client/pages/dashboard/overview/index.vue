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

/** Test class */
@Component({})
export default class Test extends Vue {
	/** initial data */
	public msg: number = 123;

	/** get friends */
	public get friends(): any {
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
		this.$vxm.root.getFriends();

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
	public get computedMsg(): string {
		return 'computed ' + this.msg;
	}

	/** method */
	public greet(): void {
		alert('greeting: ' + this.msg);
	}
}
</script>
