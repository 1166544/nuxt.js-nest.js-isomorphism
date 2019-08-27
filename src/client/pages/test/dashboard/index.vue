<template>
	<div>
		<van-button type="default">Default</van-button>
		<van-button type="primary">Primary</van-button>
		<van-button type="info">Info</van-button>
		<van-button type="danger">Danger</van-button>
		<van-button type="warning">Warning</van-button>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { BaseView } from '~/core/views/base.view';

/** Dashboard class */
@Component({})
export default class Dashboard extends BaseView {
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
