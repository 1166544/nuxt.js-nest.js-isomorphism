<template>
  <section class="container">
    <h1>The Vue.js Framework</h1>
    <p class="subheading">For Static Generated Applications.</p>

    <p>
        Nuxt.js presets all the configuration needed to make your development of a Vue.js application enjoyable.<br/>
        Nuxt.js is a framework for creating Vue.js applications. Its goal is to help Vue developers take advantage of top-notch
        technologies and features in a fast, easy and organized way.
    </p>
  </section>
</template>

<script>
/** 关于页面 */
export default {
    head() {
        return {
            title: 'About Nuxt',
            meta: [
                { name: 'description', content: 'This is my about description here.'},
                { name: 'keywords', content: 'about nuxt, nuxt info'},
            ]
        }
    }
}
</script>

<style scoped lang="scss">

</style>
