<template>
  <v-app>
    <v-navigation-drawer
      width="250"
      class="blue-grey darken-4"
      dark
      persistent
      :mini-variant="miniVariant"
      v-model="drawer"
      fixed
      app
    >
      <v-toolbar flat class="transparent" dense>
        <v-list class="pa-0" :class="{'list-border-bottom' : miniVariant}">
          <v-list-tile>
            <v-list-tile-action v-if="!miniVariant">
              <v-icon large color="orange">invert_colors</v-icon>
            </v-list-tile-action>
            <v-list-tile-content v-if="!miniVariant">
              <v-list-tile-title>
                <h2 v-text="appName"></h2>
              </v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon @click.stop="miniVariant = !miniVariant">
                <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>

      <v-tooltip right :disabled="!miniVariant">
        <v-toolbar flat class="transparent" dense slot="activator">
          <v-list class="pa-0" :class="{'list-border-bottom' : miniVariant}">
            <v-list-tile to="/" exact>
              <v-list-tile-action>
                <v-icon>home</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Project Overview</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-toolbar>
        <span>Project Overview</span>
      </v-tooltip>
      <v-divider></v-divider>

      <v-list subheader :class="{'list-border-bottom' : miniVariant}">
        <v-subheader>ANALYTICS</v-subheader>
        <template v-for="item in analyticsItems">
          <v-tooltip right :disabled="!miniVariant" :key="item.icon">
            <v-list-tile :to="item.link" exact slot="activator">
              <v-list-tile-action>
                <v-icon v-html="item.icon"></v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title v-text="item.title"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <span v-text="item.title"></span>
          </v-tooltip>
        </template>
      </v-list>
      <v-divider></v-divider>

      <v-list subheader>
        <v-subheader>DEVELOP</v-subheader>
        <template v-for="item in developItems">
          <v-tooltip right :disabled="!miniVariant" :key="item.icon">
            <v-list-tile :to="item.link" exact slot="activator">
              <v-list-tile-action>
                <v-icon v-html="item.icon"></v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title v-text="item.title"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <span v-text="item.title"></span>
          </v-tooltip>
        </template>
      </v-list>
      <!--<v-divider></v-divider>-->
    </v-navigation-drawer>

    <v-toolbar app flat dense color="primary" dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-lg-and-up" />
      <v-menu :nudge-width="100" offset-y>
        <v-toolbar-title slot="activator" class="pl-2">
          <span>{{ menuItems[0] }}</span>
          <v-icon>arrow_drop_down</v-icon>
        </v-toolbar-title>
        <v-list light>
          <v-list-tile v-for="item in menuItems" :key="item">
            <v-list-tile-title v-text="item"></v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-spacer></v-spacer>

      <v-tooltip bottom>
        <v-btn icon @click.stop="rightDrawer = !rightDrawer" slot="activator">
          <v-badge color="red" overlap>
            <span slot="badge">2</span>
            <v-icon>notifications</v-icon>
          </v-badge>
        </v-btn>
        <span>2 unread notifications</span>
      </v-tooltip>

      <v-menu offset-y>
        <v-btn icon slot="activator">
          <v-avatar class="white" size="32">
            <v-icon color="primary">person</v-icon>
          </v-avatar>
        </v-btn>
        <v-list class="pa-0" light>
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <v-avatar class="primary" size="48px">
                <v-icon dark>person</v-icon>
              </v-avatar>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>John Doe</v-list-tile-title>
              <v-list-tile-sub-title>Administrator</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider>

          <v-list-tile key="profile">
            <v-list-tile-action>
              <v-icon>person</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>My Profile</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider>

          <v-list-tile key="lock_open">
            <v-list-tile-action>
              <v-icon>lock_open</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Logout</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>

    <v-content>
      <nuxt />
    </v-content>

    <v-navigation-drawer temporary :right="right" v-model="rightDrawer" fixed app>
      <v-toolbar flat prominent dark class="primary">
        <v-toolbar-title>Notifications</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click.stop="rightDrawer = false">
          <v-icon>close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-list subheader dense>
        <v-subheader>All notifications</v-subheader>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>person_add</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>12 new users registered</v-list-tile-title>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>data_usage</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>DB overloaded 80%</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-app>
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
