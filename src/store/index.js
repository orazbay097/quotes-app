import Vue from 'vue'
import Vuex from 'vuex'
import quotesService from "@/services/quotes.service";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    quotes: [],
    loading: false,
    maxQuotesCount: 10
  },
  getters: {
    canAddNew(state) {
      return state.quotes.length < state.maxQuotesCount
    }
  },
  mutations: {
    setQuotes(state, quotes) {
      state.quotes = quotes
    },
    setLoading(state, loading) {
      state.loading = loading
    }
  },
  actions: {
    async getAll({ commit }) {
      try {
        commit("setLoading", true)
        commit("setQuotes", quotesService.getAll())
      } catch (e) {
        console.log(e)
      } finally {
        commit("setLoading", false)
      }
    },
    async add({  commit }, text) {
      try {
        commit("setLoading", true)
        commit("setQuotes",quotesService.add(text,+new Date()))
      } catch (e) {
        console.log(e)
      } finally {
        commit("setLoading", false)
      }
    },
    async delete({  commit }, id) {
      try {
        commit("setLoading", true)
        commit("setQuotes",quotesService.delete(id))
      } catch (e) {
        console.log(e)
        return false
      } finally {
        commit("setLoading", false)
      }
    }
  }
})
