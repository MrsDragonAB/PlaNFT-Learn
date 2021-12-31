import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    walletInfo: ''
  },
  mutations: {
    SET_USER_WALLETINFO(state, data) {
      state.walletInfo = data
    },
    increment(state) {
      state.count++
    },
    reduce(state) {
      state.count--
    }
  },
  actions: {
  },
  modules: {
  }
})
