import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
    weektasks: [],
    weektask: {},
    students: [],
    student: {}
  },
  mutations: {
    SET_COUNTER(state, newCount) {
      state.counter = newCount
    },
    SET_WEEKTASKS(state, data) {
      state.weektasks = data
    },
    SET_WEEKTASK(state, data) {
      state.weektask = data
    },
    SET_STUDENTS(state, data) {
      state.students = data
    },
    SET_STUDENT(state, data) {
      state.student = data
    }
    
  },
  actions: {
    incrementCounter({ commit, state }) {
      const newCount = state.counter + 1
      commit('SET_COUNTER', newCount)
    },
    async fetchWeektasks({ commit }) {
      const result = await axios.get(`${process.env.VUE_APP_API_URL}/weektask/all/json`)
      commit('SET_WEEKTASKS', result.data)
    },
    async fetchWeektask({ commit }, id) {
      const result = await axios.get(`${process.env.VUE_APP_API_URL}/weektask/${id}/json`)
      commit('SET_WEEKTASK', result.data)
    },
    async fetchStudents({ commit }) {
      const result = await axios.get(`${process.env.VUE_APP_API_URL}/student/all/json`)
      commit('SET_STUDENTS', result.data)
    },
    async fetchStudent({ commit }, id) {
      const result = await axios.get(`${process.env.VUE_APP_API_URL}/student/${id}/json`)
      commit('SET_STUDENT', result.data)
    }
  },
  modules: {
  }
})