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
	constructor() {
		super();
	}

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
