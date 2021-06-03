import { createStore } from 'vuex'
import { faqCategories } from '../utils/db.json'

export default createStore({
  state: {
    faqCategories: [],
    singleCategory: faqCategories.singleCategory,
    singleQuestion: {},
    currentComponent: 'FaqCategories',
    transitionDepth: 1
  },
  mutations: {
    FAQ_CATEGORIES(state, payload) {
      state.faqCategories = payload
    },

    SET_CURRENT_COMPONENT(state, payload) {
      state.currentComponent = payload
    },

    SET_SINGLE_CATEGORY(state, payload) {
      state.singleCategory = payload
    },

    SET_SINGLE_QUESTION(state, payload) {
      state.singleQuestion = payload
    },

    SET_NEXT_TRANSITION_DEPTH(state) {
      state.transitionDepth++
    },

    SET_RETURN_TRANSITION_DEPTH(state) {
      state.transitionDepth--
    }
  },

  actions: {
    fetchData({ commit }) {
      const data = faqCategories
      commit('FAQ_CATEGORIES', data)
    },

    getCurrentComponent({ commit }, payload) {
      const component = payload
      commit('SET_CURRENT_COMPONENT', component)
    },

    getSingleCategory({ commit }, payload) {
      const singleCategory = payload
      commit('SET_SINGLE_CATEGORY', singleCategory)
    },

    getSingleQuestion({ commit }, payload) {
      const singleQuestion = payload
      commit('SET_SINGLE_QUESTION', singleQuestion)
    },

    nextComponent({ commit }) {
      commit('SET_NEXT_TRANSITION_DEPTH')
    },

    returnComponent({ commit }) {
      commit('SET_RETURN_TRANSITION_DEPTH')
    }
  },
  getters: {
    $faqCategories(state) {
      return state.faqCategories
    },

    $singleCategory(state) {
      return state.singleCategory
    },

    $singleQuestion(state) {
      return state.singleQuestion
    },

    $currentComponent(state) {
      return state.currentComponent
    },

    $transitionDepth(state) {
      return state.transitionDepth
    }
  }
})
