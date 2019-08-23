import {
	action,
	Module,
	mutation,
	VuexModule
} from 'vuex-class-component';
import { axios } from '~/plugins/axios';

/**
 * RootStore define
 *
 * @export
 * @class RootStore
 * @extends {VuexModule}
 */
@Module({ namespacedPath: 'root/' })
export class RootStore extends VuexModule {
	public friends: any = [];

	/**
	 * set friends
	 *
	 * @param {*} friends
	 * @memberof RootStore
	 */
	@mutation
	public setFriends(friends: any): void {
		this.friends = friends;
	}

	/**
	 * 获取列表 get
	 *
	 * @readonly
	 * @type {*}
	 * @memberof RootStore
	 */
	public get rFriends(): any {
		return this.friends;
	}

	/**
	 * 获取列表
	 *
	 * @returns {Promise<any>}
	 * @memberof RootStore
	 */
	@action()
	public async getFriends(): Promise<any> {
		console.log('root friends right?');
		const data: any = await axios.get('/friends.json');

		this.setFriends(data.data.friends);
	}
}

/** RootStore */
export const root: any = RootStore.ExtractVuexModule(RootStore);
