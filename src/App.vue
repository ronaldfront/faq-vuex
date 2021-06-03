<template>
  <section class="container-app">
    <div class="container-component radius-default">
      <component :is="$currentComponent" />
    </div>
  </section>
</template>

<script>
import FaqCategories from './components/FaqCategories.vue'

export default {
  components: {
    FaqCategories
  },

  computed: {
    $currentComponent() {
      return this.$store.getters.$currentComponent
    }
  }
}
</script>

<style scoped>
.container-app {
  height: 100vh;
  background: #f5f6f8;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-component {
  width: 305px;
  height: 480px;
  background: transparent linear-gradient(180deg, #404451 0%, #26282c 100%) 0%
    0% no-repeat padding-box;
  margin: 1rem;
  box-shadow: 0px 10px 30px #3f445266;
  padding: 1.5rem 0.25rem 0.5rem 0.25rem;
  
}
</style>
