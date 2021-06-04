<template>
  <section class="container">
    <div class="on">
      <div class="arrow-return">
        <img
          src="../assets/images/arrow-left.svg"
          alt="Return"
          class="return"
        />
      </div>
      <div class="question">{{ $singleQuestion.title }}</div>
    </div>
    <div class="response" v-html="$singleQuestion.content"></div>
  </section>
</template>

<script>
export default {
  computed: {
    $singleQuestion() {
      return this.$store.getters.$singleQuestion
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
  margin-left: 3rem;
}

.question {
  margin-left: 1rem;
}
</style>
