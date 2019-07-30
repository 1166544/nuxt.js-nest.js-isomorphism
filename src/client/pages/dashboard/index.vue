<template>
  <div>
    <v-toolbar dense tabs color="primary" dark>
      <v-toolbar-title class="pl-2">Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tabs v-model="tabs" color="transparent" slider-color="white" slot="extension">
        <v-tab v-for="tabsItem in tabsItems" :key="tabsItem.id" :to="tabsItem.link">
          <span class="pl-2 pr-2">{{ tabsItem.title }}</span>
        </v-tab>
      </v-tabs>
    </v-toolbar>

    <v-container>
      <v-layout row>
        <v-flex xs12 md8 offset-md2>
          <nuxt-child />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

/** Dashboard class */
@Component({})
export default class Dashboard extends Vue {
	/** tabs */
	public tabs: any = null;

	/** tab items data */
	public get tabsItems(): Array<any> {
		return [
			{ id: 1, title: 'Overview', link: 'overview' },
			{ id: 2, title: 'Backup', link: 'backup' },
			{ id: 3, title: 'Logs', link: 'logs' }
		];
	}

	/** cutomer head data */
	public head(): any {
		return {
			title: 'Dashboard index page',
			meta: [
				{ name: 'description', content: 'summary description' },
				{
					name: 'keywords',
					content: 'Nuxt.js Nest.js combine together'
				}
			]
		};
	}
}
</script>
