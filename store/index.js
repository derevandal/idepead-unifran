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
    domain: {
      base: 'https://unifran.idepead.com.br',
      params: '/'
    },
    seo: {
      title: 'Programa de Bolsas'
    },
    courses,
    searchWord: null,
    filteredCourses: null,
    filteredCourse: null
  },
  getters: {

    getFullDomain: (state) => (state.domain.base + state.domain.params),

    getTitle: (state) => state.seo.title,

    allCourses: (state) => state.courses,

    getSearchWord: (state) => state.searchWord,

    getFilteredCourses: (state) => state.filteredCourses,

    getFilteredCourse: (state) => state.filteredCourse
  },
  mutations: {
    SET_COURSE (state, course) {
      state.course = course
    },
    FILTER_COURSES (state, word) {
      if (!(word) || word === '{}') {
        state.searchWord = null
        state.filteredCourses = null
      } else {
        state.searchWord = word
        word = removerAcentos(word.trim().toLowerCase())
        state.filteredCourses = state.courses.filter((course) => {
          return course.slug.includes(word) || course.name.toLowerCase().includes(word) || course.type.includes(word)
        })
      }
    },
    FILTERCOURSES_BY_SLUG (state, slug) {
      slug = slug.trim().toLowerCase()
      state.filteredCourse = Object.assign({}, ...state.courses.filter((course) => {
        if (course.slug === slug) {
          return course
        }
      }))
    },
    SET_DOMAIN (state, params) {
      state.domain.params = params
    },
    SET_TITLE (state, title) {
      state.seo.title = title
    }
  },
  actions: {
    SET_COURSE ({ commit }, course) {
      commit('SET_COURSE', course)
    },
    FILTER_COURSES ({ commit }, word) {
      commit('FILTER_COURSES', word)
    },
    FILTERCOURSES_BY_SLUG ({ commit }, slug) {
      commit('FILTERCOURSES_BY_SLUG', slug)
    },
    SET_DOMAIN ({ commit }, domain) {
      commit('SET_DOMAIN', domain)
    },
    SET_TITLE ({ commit }, title) {
      commit('SET_TITLE', title)
    }
  }
})

export default store
