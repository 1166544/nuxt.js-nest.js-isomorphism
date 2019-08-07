import { Component, Vue } from 'nuxt-property-decorator';

/** Mixin demo */
@Component({})
export default class Mixin extends Vue {
	/** Mixin示例 */
	public mixinValue: string = 'Mixin value demo';
}

