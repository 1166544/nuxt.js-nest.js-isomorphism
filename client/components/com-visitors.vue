<template>
  <ul>
    <li v-for="(visit, index) in visits" :key="index">
      <i>{{ visit.date | hours }}</i> - {{ visit.path }}
    </li>
  </ul>
</template>

<script>
export default {
  filters: {
    hours(date) {
      return date.split('T')[1].split('.')[0]
    }
  },
  computed: {
    visits() {
      return this.$store.state.visitors.slice().reverse()
    }
  }
}
</script>

<style scoped>
ul {
  position: relative;
  top: 20px;
  right: 20px;
  margin: 0;
  padding: 0;
  list-style-type: none;
}
ul li {
  padding: 2px 0;
}
ul li i {
  color: gray;
  font-style: normal;
}
</style>
