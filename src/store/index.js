import Vue from 'vue'
import Vuex from 'vuex'
import apiService from "@/services/api.service";

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
        const res = (await apiService.getAll()).data;
        commit("setQuotes", res.success ? res.data : [])
      } catch (e) {
        console.log(e)
      } finally {
        commit("setLoading", false)
      }
    },
    async add({ state, commit }, text) {
      try {
        commit("setLoading", true)
        const p = { text, id: +new Date() }
        const res = (await apiService.add(p.text,p.id)).data;
        if (res.success) state.quotes.push(p)
        return res.success
      } catch (e) {
        console.log(e)
        return false
      } finally {
        commit("setLoading", false)
      }
    },
    async delete({ state, commit }, id) {
      try {
        commit("setLoading", true)
        const res = (await apiService.delete(id)).data;
        if (res.success) state.quotes.splice(state.quotes.findIndex(quote=>quote.id===id), 1)
        return res.success
      } catch (e) {
        console.log(e)
        return false
      } finally {
        commit("setLoading", false)
      }
    }
  }
})
