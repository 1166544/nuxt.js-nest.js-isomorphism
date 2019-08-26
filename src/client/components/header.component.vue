<template>
	<div>
		<van-nav-bar :title="title" left-arrow @click-left="onClickLeft" />
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

/** Header Component */
@Component({})
export default class Header extends Vue {
	@Prop()
	public title: string = '';

	/** 点击返回 */
	private onClickLeft(): void {
		if (history) {
			history.back();
		}
	}
}
</script>

<style lang="stylus" scoped>
.van-nav-bar .van-icon {
  color: #999 !important;
}
</style>
