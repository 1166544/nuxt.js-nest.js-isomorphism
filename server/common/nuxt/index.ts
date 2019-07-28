import { Builder } from '@nuxt/builder';
import { Nuxt } from '@nuxt/core';
import { BundleBuilder } from '@nuxt/webpack';
import config from '../../../nuxt.config';

/**
 * NUXT服务
 *
 * @export
 * @class NuxtServer
 */
// tslint:disable-next-line: no-default-export
export default class NuxtServer {
	private static instance: NuxtServer;
	public nuxt: Nuxt;

	/**
	 * RUN
	 *
	 * @param {boolean} [shouldBuild=true]
	 * @returns {Nuxt}
	 * @memberof NuxtServer
	 */
	public async run(shouldBuild: boolean = true): Nuxt {
		const nuxt: any = new Nuxt(config);

		// Build only in dev mode
		if (config.dev && shouldBuild) {
			const builder: any = new Builder(nuxt, BundleBuilder);
			const res: any = await builder.build();

			this.nuxt = res.nuxt;

			return res.nuxt;
		}

		if (this.nuxt) {
			return this.nuxt;
		}

		return nuxt;
	}

	/**
	 * 单例模式
	 *
	 * @static
	 * @returns {NuxtServer}
	 * @memberof NuxtServer
	 */
	public static getInstance(): NuxtServer {
		if (this.instance) {
			return this.instance;
		} else {
			this.instance = new NuxtServer();

			return this.instance;
		}
	}
}
