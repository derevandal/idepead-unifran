<template lang='pug'>
  div
    p slug

</template>

<script>
  export default {
    name: 'euquero-with-slug',
    data () {
      return {
        slug: null
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
