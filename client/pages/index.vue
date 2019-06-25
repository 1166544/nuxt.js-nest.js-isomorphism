<template>
  <section class="container">
    <h1>The Best Nuxt</h1>
    <p class="subheading">We've got the best nuxt's.</p>

    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates sed tenetur quas! Laudantium odio consectetur, quia dolore veritatis quae quam nobis aperiam saepe, modi quibusdam facere tenetur omnis earum molestiae.</p>
  </section>
</template>

<script>
/** 首页面 */
export default {
    head() {
        return {
            title: 'NUXT Home',
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
