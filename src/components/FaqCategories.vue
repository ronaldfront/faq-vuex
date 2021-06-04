<template>
  <section class="container">
    <img
      class="astronaut"
      src="../assets/images/astronaut.svg"
      alt="Astronaut"
    />
    <div class="title">
      <h2 class="big-font">Perguntas frequentes</h2>
      <small class="small-font">Escolha a categoria desejada</small>
    </div>
    <ul>
      <li
        @click="toggleComponent(faqCategorie)"
        v-for="faqCategorie in $faqCategories"
        :key="faqCategorie.id"
      >
        <img
          class="mini-icons"
          :src="getIcon(faqCategorie)"
          :alt="`Image ${faqCategorie.title}`"
        />
        <p class="medium-font">{{ faqCategorie.title }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  created() {
    const component = 'FaqCategories'
    this.$store.dispatch('fetchData')
    this.$store.dispatch('getCurrentComponent', component)
  },

  computed: {
    $faqCategories() {
      return this.$store.getters.$faqCategories
    }
  },

  methods: {
    getIcon(item) {
      return require(`../assets/images/${item.icon}`)
    },

    toggleComponent(name) {
      this.$store.dispatch('getSingleCategory', name)
      this.$store.dispatch('nextComponent')
      this.$store.dispatch('getCurrentComponent', 'Categorie')
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
  justify-content: space-between;
}

.title {
  display: flex;
  flex-direction: column;
  margin-left: 1.85rem;
  margin-top: 0.5rem;
}

.title small {
  margin-top: 0.5rem;
}

li {
  display: flex;
  flex: 1;
  width: 270px;
  margin: 0 0px 3px 0px;
  height: 53px;
  justify-content: left;
  align-items: center;
  cursor: pointer;
  transition: 0.2s;
}

ul {
  margin: 1rem 0.8rem 0.5rem 1rem;
}

li:hover {
  background: #3f4452b3 0% 0% no-repeat padding-box;
  border-radius: 5px;
}

img,
p {
  margin-left: 1.15rem;
}

.astronaut {
  max-width: 242px;
  margin: 0 auto;
  margin-top: 2rem;
}
</style>
