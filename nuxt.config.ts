import { ConfigDefault } from './config/default.config';
import NuxtConfiguration from '@nuxt/config';
import nodeExternals from 'webpack-node-externals';

const isDev = !(process.env.NODE_ENV === 'production');
const configDefault: ConfigDefault = new ConfigDefault();

const config: NuxtConfiguration = {
	mode: 'universal',

	env: {
		host: configDefault.serverAdderess,
		port: configDefault.port,
		baseUrl: process.env.BASE_URL || `http://${configDefault.serverAdderess}:${configDefault.port}`,
	},

	srcDir: './src/client/',
	dev: isDev,

	/*
	 ** Headers of the page
	 */
	head: {
		title: 'Nuxt.js bio project',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=0' },
			{ hid: 'description', name: 'description', content: 'meta description' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
		],
	},

	/** Render content */
	render: {
		ssrLog: 'collapsed'
	},

	/*
	 ** Customize the progress-bar
	 */
	loading: '~/components/loading.component.vue',

	/*
	 ** Global CSS
	 */
	css: ['~/assets/style/app.styl'],

	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [
		{
			src: '~/plugins/vant.plugins',
			ssr: true
		},
		{
			src: '~/plugins/flexible.plugins',
			ssr: false
		},
		{
			src: '~/plugins/axios.plugins',
			ssr: true
		}
	],

	/*
	 ** Nuxt.js modules
	 */
	modules: [
		'@nuxtjs/axios', // Doc: https://axios.nuxtjs.org/usage
		// '@nuxtjs/proxy'
	],
	/*
	 ** Axios module configuration
	 */
	axios: {
		// See https://github.com/nuxt-community/axios-module#options
		proxy: false,
		retry: { retries: 3 },
		credentials: true
	},
	/*
	 ** Build configuration
	 */
	build: {
		cache: true,
		postcss: {
			// 添加插件名称作为键，参数作为值,使用npm或yarn安装它们
			plugins: {
				'postcss-pxtorem': {
					rootValue: 37.5,
					propList: ['*']
				}
			}
		},
		babel: {
			plugins: [
				'@babel/plugin-transform-modules-commonjs',
				["@babel/plugin-proposal-decorators", { legacy: true }],
				["@babel/plugin-proposal-class-properties", { loose: true }]
			],
		},
		transpile: [],
		plugins: [],
		loaders: {
		},
		/*
		 ** You can extend webpack config here
		 */
		extend(config, { isClient }) {
			if (process.server) {
				config.externals = [
					nodeExternals({
						whitelist: [/^vant/],
					}),
				];
			}

			if (isClient) {
				config.devtool = '#source-map'
			}
		},
	},

	router: {
		middleware: [
			'mobile.middleware',
			'not-authenticated.middleware'
		]
	}
};

export default config;
