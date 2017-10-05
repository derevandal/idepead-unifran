import Vue from 'vue'
import Vuex from 'vuex'
import courses from '~/assets/data/courses.json'
// import axios from 'axios'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    courses
  },
  getters: {
    allCourses: (state) => state.courses,

    filterByType: (state) => (type) => {
      return state.courses.find(course => course.type === type)
    }
  },
  mutations: {
    // SET_TODOS (state, todos) {
    //   state.todos = todos
    // },
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
    // setTodos ({ commit }, todos) {
    //   commit('SET_TODOS', todos)
    // },
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
