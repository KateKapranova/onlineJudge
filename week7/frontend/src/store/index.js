import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    weektasks: []
  },
  mutations: {
    SET_WEEKTASKS(state, data){
      state.weektasks = data
    }
  },
  actions: {
    async fetchWeektasks( {commit} ){
      const result = await axios.get('http://localhost:3000/weektask/all/json')
      commit("SET_WEEKTASKS", result.data)
    }
  },
  modules: {
  }
})
