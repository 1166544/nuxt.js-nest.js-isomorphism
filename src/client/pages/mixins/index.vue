<template>
  <div>{{mixinValue}}</div>
</template>

<script lang="ts">
import { Component, Vue, mixins } from 'nuxt-property-decorator';
import MixinSample from './components/mixins-sample';

/** Use Mixin demo */
@Component({})
export default class Mixin extends mixins(MixinSample) {
	/** 重写created勾子函数 */
	public created(): void {
		console.log(this.mixinValue);
	}
}
</script>

