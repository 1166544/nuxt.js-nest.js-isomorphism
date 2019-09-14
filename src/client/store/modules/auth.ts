import {
	action,
	Module,
	mutation,
	VuexModule
} from 'vuex-class-component';
// import { axios } from '~/plugins/axios.plugins';

/**
 * RootStore define
 *
 * @export
 * @class RootStore
 * @extends {VuexModule}
 */
@Module({ namespacedPath: 'auth/' })
export class AuthStore extends VuexModule {
	private authData: any = null;

	/**
	 * set auth
	 *
	 * @param {*} authData
	 * @memberof RootStore
	 */
	@mutation
	public setAuth(authData: any): void {
		this.authData = authData;
	}

	/**
	 * 获取auth
	 *
	 * @readonly
	 * @type {*}
	 * @memberof RootStore
	 */
	public get auth(): any {
		return this.authData;
	}

	/**
	 * 获取auth(异步方式)
	 *
	 * @returns {Promise<any>}
	 * @memberof RootStore
	 */
	@action()
	public async getAuth(): Promise<any> {
		// const data: any = await axios.get('/friends.json');
		// this.setAuth(data.data.data);
		// hole
	}
}

/** AuthStore */
export const auth: any = AuthStore.ExtractVuexModule(AuthStore);
