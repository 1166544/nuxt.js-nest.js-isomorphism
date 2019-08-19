<template>
	<div>
		<nuxt />
	</div>
</template>
<script lang="ts">
import { Component, Inject, Vue } from 'nuxt-property-decorator';

/** default layout */
@Component({})
export default class DefaultLayout extends Vue {
	public appName: string = 'Bios';
	public drawer: boolean = true;
	public fixed: boolean = false;
	public miniVariant: boolean = false;
	public right: boolean = true;
	public rightDrawer: boolean = false;
	public tabs: any = null;
	private menuItems: Array<any> = ['Vue', 'NodeJS', 'Laravel'];

	public tabsItems: Array<any> = [
		{
			id: 1,
			title: 'Indicators',
			link: 'indicators'
		},
		{
			id: 2,
			title: 'Backup',
			link: 'backup'
		},
		{
			id: 3,
			title: 'Logs',
			link: 'logs'
		}
	];

	public analyticsItems: Array<any> = [
		{
			icon: 'dashboard',
			title: 'Dashboard',
			link: '/dashboard/overview'
		},
		{
			icon: 'event',
			title: 'Events',
			link: '/dashboard'
		},
		{
			icon: 'comment',
			title: 'Notifications',
			link: '/inspire'
		}
	];

	public developItems: Array<any> = [
		{
			icon: 'supervisor_account',
			title: 'Authentification',
			link: '/test'
		},
		{
			icon: 'storage',
			title: 'Database',
			link: '/test'
		},
		{
			icon: 'perm_media',
			title: 'Storage',
			link: '/test'
		},
		{
			icon: 'public',
			title: 'Hosting',
			link: '/test'
		},
		{
			icon: 'functions',
			title: 'Functions',
			link: '/test'
		}
	];
}
</script>
