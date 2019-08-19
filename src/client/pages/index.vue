<template>
	<div>Test</div>
</template>

<script lang="ts">
import Logo from '~/components/Logo.vue';
import TwitterHeadCard from '~/components/TwitterHeadCard.vue';
import { Component, Vue } from 'nuxt-property-decorator';

/** Index page */
@Component({
	components: {
		Logo,
		TwitterHeadCard
	}
})
export default class Index extends Vue {
	constructor() {
		super();
	}

	/** custom head data */
	public head(): any {
		return {
			title: 'Isomorphism home page',
			meta: [{ hid: 'description', name: 'some seo description' }],
			noscript: [{ innerHTML: 'Body No Script', body: true }],
			script: [
				{ src: '/head.js' },
				{ src: '/body.js', body: true },
				{ src: '/defer.js', defer: '' }
			]
		};
	}
}
</script>
