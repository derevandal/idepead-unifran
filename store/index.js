import Vue from 'vue'
import Vuex from 'vuex'
import courses from '~/assets/data/courses.json'

// import axios from 'axios'

Vue.use(Vuex)

const removerAcentos = (string) => {
  const mapaAcentosHex = {
    a: /[\xE0-\xE6]/g,
    e: /[\xE8-\xEB]/g,
    i: /[\xEC-\xEF]/g,
    o: /[\xF2-\xF6]/g,
    u: /[\xF9-\xFC]/g,
    c: /\xE7/g
  }

  for (let letra in mapaAcentosHex) {
    var expressaoRegular = mapaAcentosHex[letra]
    string = string.replace(expressaoRegular, letra)
  }

  return string
}

const store = () => new Vuex.Store({
  state: {
    baseDomain: 'https://unifran.idepead.com.br',
    courses,
    searchWord: null,
    filteredCourses: null,
    course: null
  },
  getters: {
    allCourses: (state) => state.courses,

    getCourse: (state) => state.course,

    getSearchWord: (state) => state.searchWord,

    getFilteredCourses: (state) => state.filteredCourses
  },
  mutations: {
    SET_COURSE (state, course) {
      state.course = course
    },
    FILTERED_COURSES (state, word) {
      if (!(word) || word === '{}') {
        state.searchWord = null
        state.filteredCourses = null
      } else {
        state.searchWord = word
        word = removerAcentos(word.trim().toLowerCase())
        state.filteredCourses = state.courses.filter((course) => {
          return course.slug.toLowerCase().includes(word) || course.name.toLowerCase().includes(word) || course.type.toLowerCase().includes(word)
        })
      }
    }
  },
  actions: {
    SET_COURSE ({ commit }, course) {
      commit('SET_COURSE', course)
    },
    FILTERED_COURSES ({ commit }, word) {
      commit('FILTERED_COURSES', word)
    }
  }
})

export default store
