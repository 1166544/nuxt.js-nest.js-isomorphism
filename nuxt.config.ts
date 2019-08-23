import NuxtConfiguration from '@nuxt/config';
import nodeExternals from 'webpack-node-externals';
const isDev = !(process.env.NODE_ENV === 'production');

const config: NuxtConfiguration = {
	mode: 'universal',

	env: {
		host: 'localhost',
		port: '8088',
		baseUrl: process.env.BASE_URL || 'http://localhost:8088',
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
	loading: '~/components/Loading.vue',

	/*
	 ** Global CSS
	 */
	css: ['~/assets/style/app.styl'],

	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [
		{
			src: '~/plugins/vant.js',
			ssr: true
		},
		{
			src: '~/assets/amfe-flexible.js',
			ssr: false
		},
		{
			src: '~/plugins/axios',
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
		// debug: isDev,
		// proxy: false,
		// retry: { retries: 3 },
		// prefix: '/api',
		// credentials: true
	},
	/*
	 ** Axios proxy configuration
	 */
	proxy: [
		// ['http://127.0.0.1:8888', { changeOrigin: false, ws: false }],
		// ['/dog', { target: 'https://dog.ceo/', pathRewrite: { '^/dog': '/api/breeds/image/random' } }]
		// '/api/': { target: 'http://api.example.com', pathRewrite: { '^/api/': '' } }
	],
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
		extend(config, ctx) {
			if (process.server) {
				config.externals = [
					nodeExternals({
						whitelist: [/^vant/],
					}),
				];
			}
		},
	},

	router: {
		middleware: ['mobile']
	}
};

export default config;
