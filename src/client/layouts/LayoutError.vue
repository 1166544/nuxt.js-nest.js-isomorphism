<template>
	<div class="container">
		<h1 v-if="error.statusCode === 404">Page not found</h1>
		<h1 v-else>An error occurred</h1>
		<NuxtLink to="/">Home page</NuxtLink>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

/** ErrorPage Layout */
@Component({})
export default class ErrorPage extends Vue {
	/** 定义模板 */
	public layout({ isMobile }: any): string {
		return 'LayoutDefault';
	}

	/** error数据 */
	@Prop()
	public error: any = {
		type: Object,
		default: null
	};
}
</script>

<style lang="stylus" scoped>
.container {
  font-family: sans-serif;
  padding-top: 10%;
  text-align: center;
}

h1 {
  font-size: 20px;
}
</style>
