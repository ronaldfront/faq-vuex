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
      <div class="title">
        <p class="big-font">{{ $singleCategory.title }}</p>
        <small class="small-font">Selecione uma pergunta</small>
      </div>
      <img :src="getIcon($singleCategory)" alt="" class="mini-icons" />
    </div>

    <div class="questions">
      <ul>
        <li
          v-for="singleQuestion in $singleQuestions"
          :key="singleQuestion.id"
          @click="toggleComponent(singleQuestion)"
        >
          <p class="medium-font">{{ singleQuestion.title }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    $singleCategory() {
      return this.$store.getters.$singleCategory
    },

    $singleQuestions() {
      return this.$store.getters.$singleCategory.questions
    }
  },

  methods: {
    getIcon(item) {
      return require(`../assets/images/${item.icon}`)
    },

    toggleComponent(question) {
      this.$store.dispatch('getSingleQuestion', question)
      this.$store.dispatch('nextComponent')
      this.$store.dispatch('getCurrentComponent', 'Answer')
    },

    returnComponent() {
      this.$store.dispatch('returnComponent')
      this.$store.dispatch('getCurrentComponent', 'FaqCategories')
      console.log(this.$store.getters.$transitionDepth)
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

li {
  display: flex;
  flex: 1;
  margin: 0 1px 3px 1px;
  height: 53px;
  justify-content: left;
  align-items: center;
  cursor: pointer;
  transition: 0.2s;
  padding-left: 0.7rem;
}

ul {
  margin: 0.7rem 0.8rem 0.5rem 0.9rem;
}

li:hover {
  background: #3f4452b3 0% 0% no-repeat padding-box;
  border-radius: 5px;
}

.on {
  border-bottom: 1px solid #404451;
  padding-top: 2rem;
  margin: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.5rem;
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
  margin-left: 0.5rem;
}

.title {
  margin-left: -1rem;
}
</style>
