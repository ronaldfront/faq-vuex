<template>
  <section class="container-app">
    <div class="container-component radius-default">
      <transition class="slider" :name="transitionType" mode="out-in">
        <component :is="$currentComponent" />
      </transition>
    </div>
  </section>
</template>

<script>
import FaqCategories from './components/FaqCategories.vue'
import Categorie from './components/Categorie.vue'
import Answer from './components/Answer.vue'
import 'animate.css'

export default {
  components: {
    FaqCategories,
    Categorie,
    Answer
  },

  data() {
    return {
      transitionType: 'slide-left'
    }
  },

  computed: {
    $currentComponent() {
      return this.$store.getters.$currentComponent
    },

    $transitionDepth() {
      return this.$store.getters.$transitionDepth
    }
  },

  watch: {
    $transitionDepth(newValue, oldValue) {
      if (newValue > oldValue) {
        this.transitionType = 'slide-left'
      } else {
        this.transitionType = 'slide-right'
      }
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
}
</style>

<style>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.3s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(1.38em, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-1.5em, 0);
}
.slide-right-enter-active {
  opacity: 0;
  animation: fade 300ms ease;
}
.slide-left-enter-active {
  opacity: 0;
  animation: fade 300ms ease;
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
