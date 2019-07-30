<template>
  <v-layout>
    <v-flex text-xs-center>
      <img src="/v.png" alt="Vuetify.js" class="mb-5" />

      <input v-model="msg" />
      <p>prop: {{propMessage}}</p>
      <p>msg: {{msg}}</p>
      <p>helloMsg: {{helloMsg}}</p>
      <p>computed msg: {{computedMsg}}</p>
      <button @click="greet">Greet</button>

      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;</em>
          </small>
        </footer>
      </blockquote>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

/** Inspire class */
@Component({
	props: {
		propMessage: String
	}
})
export default class Inspire extends Vue {
	/** init data */
	public msg: number = 123;

	/** some data helloMsg */
	public helloMsg: string = 'Inspire,';

	/** lifecycle hook mounted */
	public mounted(): void {
		this.greet();
	}

	/** computed */
	public get computedMsg(): string {
		return 'Computed ' + this.msg;
	}

	/** method - greet */
	public greet(): void {
		alert('greeting: ' + this.msg);
	}
}
</script>
