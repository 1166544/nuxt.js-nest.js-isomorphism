import NuxtConfiguration from '@nuxt/config';
import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin';
import nodeExternals from 'webpack-node-externals';
const isDev = !(process.env.NODE_ENV === 'production');

const config: NuxtConfiguration = {
	mode: 'universal',

	env: {
		host: 'localhost',
		port: '8088',
		baseUrl: process.env.BASE_URL || 'http://localhost:8088',
	},

	srcDir: './client/',
	dev: isDev,

	/*
	 ** Headers of the page
	 */
	head: {
		title: 'Nuxt and Nest bio project',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'description' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{
				rel: 'stylesheet',
				href:
					'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons',
			},
		],
	},

	/*
	 ** Customize the progress-bar color
	 */
	loading: { color: '#3B8070' },

	/*
	 ** Global CSS
	 */
	css: ['~/assets/style/app.styl'],

	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: ['@/plugins/vuetify', '@/plugins/axiosInstance.ts'],

	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
	],
	/*
	 ** Axios module configuration
	 */
	axios: {
		// See https://github.com/nuxt-community/axios-module#options
		debug: isDev,
	},

	/*
	 ** Build configuration
	 */
	build: {
		cache: true,
		babel: {
			plugins: ['@babel/plugin-transform-modules-commonjs'],
		},
		transpile: ['vuetify/lib'],
		plugins: [new VuetifyLoaderPlugin()],
		loaders: {
			stylus: {
				import: ['~assets/style/variables.styl'],
			},
		},
		/*
		 ** You can extend webpack config here
		 */
		extend(config, ctx) {
			if (process.server) {
				config.externals = [
					nodeExternals({
						whitelist: [/^vuetify/],
					}),
				];
			}
		},
	},
};

export default config;
