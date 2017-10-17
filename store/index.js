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
      title: 'Programa de Bolsas',
      description: 'Inicie sua graduação aproveitando o Programa de Bolsas oferecido pelo IDEPead em conjunto com a UNIFRAN.'
    },
    courses,
    searchWord: null,
    filteredCourses: null,
    filteredCourse: null,
    inscription: {
      name: null,
      email: null,
      phone: null,
      course: 1,
      agreed: true,
      token: null
    },
    axiosErrors: {}
  },
  getters: {

    getFullDomain: (state) => (state.domain.base + state.domain.params),

    getTitle: (state) => state.seo.title,

    getFullDescription: (state) => state.seo.description,

    allCourses: (state) => state.courses,

    getSearchWord: (state) => state.searchWord,

    getFilteredCourses: (state) => state.filteredCourses,

    getFilteredCourse: (state) => state.filteredCourse,

    getInscription: (state) => state.inscription,

    getInscriptionName: (state) => state.inscription.name,
    getInscriptionEmail: (state) => state.inscription.email,
    getInscriptionPhone: (state) => state.inscription.phone,
    getInscriptionCourse: (state) => state.inscription.course,
    getInscriptionAgreed: (state) => state.inscription.agreed,
    getInscriptionToken: (state) => state.inscription.token,

    getAxiosErros: (state) => state.axiosErrors
  },
  mutations: {
    SET_COURSE (state, course) {
      state.course = course
    },

    SET_AXIOS_ERRORS (state, errors) {
      state.axiosErrors = errors
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
    },
    SET_INSCRIPTION_NAME (state, name) {
      state.inscription.name = name
    },
    SET_INSCRIPTION_EMAIL (state, email) {
      state.inscription.email = email
    },
    SET_INSCRIPTION_PHONE (state, phone) {
      state.inscription.phone = phone
    },
    SET_INSCRIPTION_COURSE (state, course) {
      state.inscription.course = course
    },
    SET_INSCRIPTION_AGREED (state, agreed) {
      state.inscription.agreed = agreed
    },
    SET_INSCRIPTION_TOKEN (state, token) {
      state.inscription.token = token
    },
    CLEAR_INSCRIPTION (state) {
      state.inscription.name = null
      state.inscription.email = null
      state.inscription.phon = null
      state.inscription.course = 1
      state.inscription.agreed = true
      state.inscription.token = null
    }
  },
  actions: {
    SET_COURSE ({ commit }, course) {
      commit('SET_COURSE', course)
    },
    SET_AXIOS_ERRORS ({ commit }, errors) {
      commit('SET_AXIOS_ERRORS', errors)
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
    },
    SET_INSCRIPTION_NAME ({ commit }, title) {
      commit('SET_INSCRIPTION_NAME', title)
    },
    SET_INSCRIPTION_EMAIL ({ commit }, title) {
      commit('SET_INSCRIPTION_EMAIL', title)
    },
    SET_INSCRIPTION_PHONE ({ commit }, title) {
      commit('SET_INSCRIPTION_PHONE', title)
    },
    SET_INSCRIPTION_COURSE ({ commit }, title) {
      commit('SET_INSCRIPTION_COURSE', title)
    },
    SET_INSCRIPTION_AGREED ({ commit }, title) {
      commit('SET_INSCRIPTION_AGREED', title)
    },
    SET_INSCRIPTION_TOKEN ({ commit }, title) {
      commit('SET_INSCRIPTION_TOKEN', title)
    },
    SET_INSCRIPTION_SUBMITTED ({ commit }, title) {
      commit('SET_INSCRIPTION_SUBMITTED', title)
    },
    CLEAR_INSCRIPTION ({ commit }) {
      commit('CLEAR_INSCRIPTION')
    }
  }
})

export default store
