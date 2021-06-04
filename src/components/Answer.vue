<template>
  <section class="container">
    <div class="on">
      <div class="arrow-return" @click="returnComponent">
        <img
          src="../assets/images/arrow-left.svg"
          alt="Return"
          class="return"
        />
      </div>
      <div class="question">
        <p class="medium-font">{{ $singleQuestion.title }}</p>
      </div>
    </div>
    <div class="response small-font" v-html="$singleQuestion.content"></div>
  </section>
</template>

<script>
export default {
  computed: {
    $singleQuestion() {
      return this.$store.getters.$singleQuestion
    }
  },

  methods: {
    returnComponent() {
      this.$store.dispatch('getCurrentComponent', 'Categorie')
      this.$store.dispatch('returnComponent')
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.on {
  display: flex;
  margin: 1.9rem 0 0 3rem;
  align-items: center;
}

.question {
  margin-left: 1rem;
  max-width: 180px;
}

.response {
  margin: 2rem;
  line-height: 1.3rem;
}

.arrow-return:hover {
  background: #26282c;
}

.return {
  width: 22px;
  padding: 0.1rem;
}

.arrow-return {
  padding: 0.4rem 0.6rem 0.2rem 0.6rem;
  border-radius: 8px;
  transition: 0.2s;
  cursor: pointer;
  margin-left: -1.7rem;
}
</style>
