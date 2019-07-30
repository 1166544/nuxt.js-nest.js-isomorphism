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

	public head: any = {
		meta: [
			{ name: 'twitter:card', content: 'summary' },
			{ name: 'twitter:site', content: '@nuxt_js' },
			{ name: 'twitter:title', content: 'Nuxt.js Twitter Card' },
			{
				name: 'twitter:description',
				content:
					'Nuxt.js lets you handle custom headers for your app with vue-meta'
			},
			{
				name: 'twitter:image',
				content: 'https://avatars0.githubusercontent.com/u/23360933?v=3'
			},
			{ name: 'twitter:image:alt', content: 'Nuxt.js logo' }
		]
	};
}
</script>
