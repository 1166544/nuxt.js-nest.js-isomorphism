import {
	VuexModule,
	mutation,
	action,
	getter,
	Module,
} from 'vuex-class-component';
import { axios } from '~/plugins/axiosInstance';

@Module({ namespacedPath: 'root/' })
export class RootStore extends VuexModule {
	public friends = [];

	@mutation
	setFriends(friends) {
		this.friends = friends;
	}

	get rFriends() {
		return this.friends;
	}

	@action()
	async getFriends() {
		console.log('root friends right?');
		const data = await axios.get('/friends.json');

		this.setFriends(data.data.friends);
	}
}

export const root = RootStore.ExtractVuexModule(RootStore);
