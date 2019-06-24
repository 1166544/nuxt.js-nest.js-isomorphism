<template>
  <section class="container">
    <h1>About our Nuxt's</h1>
    <p class="subheading">They're juicy and stuff.</p>

    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates sed tenetur quas! Laudantium odio consectetur, quia dolore veritatis quae quam nobis</p>
  </section>
</template>

<script>
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
