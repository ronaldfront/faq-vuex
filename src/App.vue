<template>
  <section class="container">
    <Categories />
  </section>
</template>

<script>
import Categories from './components/Categories.vue'

export default {
  components: {
    Categories
  }
}
</script>

<style scoped>
.container {
  height: 100vh;
  background: rgb(197, 197, 197);
}
</style>
