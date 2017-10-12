import Vue from 'vue'
import Vuex from 'vuex'
import courses from '~/assets/data/courses.json'

// import axios from 'axios'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    searchWord: null,
    baseDomain: 'https://unifran.idepead.com.br',
    course: {},
    filteredCourses: null,
    courses
  },
  getters: {
    allCourses: (state) => state.courses,

    getCourse: (state) => state.course,

    getSearchWord: (state) => state.searchWord,

    filteredCourse: (state) => {
      console.log(state.filteredCourses)
      return state.filteredCourses
    }
  },
  mutations: {
    SET_COURSE (state, course) {
      state.course = course
    },
    FILTERED_COURSES (state, word) {
      try {
        state.searchWord = word
        word = word.toLowerCase()
        if (word === '{}') {
          state.filteredCourses = word
        }
        state.filteredCourses = state.courses.filter((course) => {
          return course.slug.toLowerCase().includes(word) || course.name.toLowerCase().includes(word) || course.type.toLowerCase().includes(word)
        })
      } catch (e) {
        return state.courses
      }
    }
    // ADD_TODO (state, todo) {
    //   state.todos.push(todo)
    // },
    // REMOVE_TODO (state, todo) {
    //   var i = state.todos.indexOf(todo)
    //   state.todos.splice(i, 1)
    // },
    // FILTER_TODOS (state, value) {
    //   state.courses.forEach((course) => {
    //     course.type = !value
    //   })
    // }
  },
  actions: {
    // addTodo ({ commit }, todo) {
    //   commit('ADD_TODO', todo)
    // },
    SET_COURSE ({ commit }, course) {
      commit('SET_COURSE', course)
    },
    FILTERED_COURSES ({ commit }, word) {
      commit('FILTERED_COURSES', word)
    }
    // removeTodo ({ commit }, todo) {
    //   commit('REMOVE_TODO', todo)
    // },
    // allDone ({ state, commit }) {
    //   var value = state.todos.filter(todo => todo.completed).length === state.todos.length
    //   commit('FILTER_TODOS', value)
    // },
    // saveTodos ({ state }) {
    //   axios.put('/api/todos', { todos: state.todos })
    // },
    // nuxtServerInit ({ commit }, { req }) {
    //   commit('SET_TODOS', req.session.todos || [])
    // }
  }
})

export default store
