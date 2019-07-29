<template>
  <div v-if="loading" class="loading-page">
    <p>Loading...</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

/** Loading Component */
@Component({})
export default class Loading extends Vue {
	/** LOADING中标识 */
	public loading: boolean = false;

	/** 开始显示LOADING */
	public start(): void {
		this.loading = true;
	}

	/** 结束显示LOADING */
	public finish(): void {
		this.loading = false;
	}
}
</script>

<style scoped>
.loading-page {
	position: fixed;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	background: rgba(255, 255, 255, 0.8);
	text-align: center;
	padding-top: 200px;
	font-size: 30px;
	font-family: sans-serif;
}
</style>

