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
      select(required v-model="selected")
        option(value="-1") Selecione seu curso...
        option(v-for="course in allCourses" :key="course.slug" :value="course.slug" :selected="course.slug === slug") {{ course.name }}
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
    name: 'euquero-with-slug',
    data () {
      return {
        name: null,
        email: null,
        phone: null,
        selected: null,
        slug: undefined
      }
    },
    created () {
      this.initSlug()
    },
    watch: {
      '$route': 'initSlug'
    },
    methods: {
      initSlug () {
        this.slug = this.$route.params.slug.trim()
        this.selected = this.slug
        if (this.slug) {
          this.$store.dispatch('FILTERCOURSES_BY_SLUG', this.slug)
          this.$store.dispatch('SET_DOMAIN', '/euquero/' + this.slug)
          this.$store.dispatch('SET_TITLE', 'Eu quero ' + this.getCourseName + '!')
        }
      }
    },
    computed: {
      getCourseName () {
        return this.$store.getters.getFilteredCourse.name || ''
      },
      allCourses () {
        return (this.$store.getters.allCourses)
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
