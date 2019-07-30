<template>
  <span v-if="false"></span>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

/** TwitterHeadCard Component */
@Component({})
export default class TwitterHeadCard extends Vue {
	public href: string =
		'https://twitter.com/intent/tweet?url=' +
		encodeURIComponent('https://head-elements.now.sh/about');
}
</script>
