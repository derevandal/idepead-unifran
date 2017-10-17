<template lang='pug'>
  div
    .form-group
      input(type="text" v-model="name" required)
      label.control-label(for="input") Como podemos te chamar?
      i.bar
    .form-group
      input(type="email" v-model="email" required)
      label.control-label(for="input") Qual seu e-mail?
      i.bar
    .form-group
      input(type="phone" v-model="phone" required)
      label.control-label(for="input") Qual seu telefone?
      i.bar
    .form-group
      select(required)
        option(v-if="this.slug" value="-1" name="select") Selecione seu curso...
        option(v-else value="-1" name="select" select) Selecione seu curso...
        option(v-for="course in allCourses" :key="course.slug" :selected="isSelected" ) {{ course.name }}
      label.control-label(for="select") Qual o curso desejado?
      i.bar
    .checkbox
      label
        input(type="checkbox" checked)
        i.helper
        | Desejo que entrem em contato comigo
    .button-container
      button.button(type="submit"): span Enviar
</template>

<script>
  export default {
    name: 'eu-quero-no-slug',
    data () {
      return {
        name: null,
        email: null,
        phone: null,
        slug: undefined
      }
    },
    created () {
      this.setPage()
    },
    computed: {
      allCourses () {
        return (this.$store.getters.allCourses)
      },
      isSelected () {
        return false
      }
    },
    watch: {
      '$route': 'setPage'
    },
    methods: {
      setPage () {
        this.$store.dispatch('SET_DOMAIN', '/euquero')
        this.$store.dispatch('SET_TITLE', 'Eu quero!')
      }
    }
  }
</script>

<style lang='stylus' >
.article--content
  background #fff
  padding 3rem 5rem
  border-radius 1px
  flex-direction column
  justify-content flex-start
</style>
