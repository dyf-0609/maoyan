import Vue from 'vue'
import Vuex from 'vuex'
import movie from './modules/movie'
import video from './modules/video'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    movie,
    video
  }
})
