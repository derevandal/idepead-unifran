<template lang='pug'>
  div
    p
      li.article--item(v-for="course in filteredCourse" :key="course.slug")
        a.article--link(:href="'/euquero/' + course.slug" :title="'Graduação em' + course.name" :alt="'Graduação em' + course.name") {{ course.name }}

</template>

<script>
  export default {
    name: 'euquero-with-slug',
    components: {
    },
    data () {
      return {
        slug: null
      }
    },
    head () {
      return {
        title: 'Eu quero!'
      }
    },
    created () {
      this.getSlug()
    },
    watch: {
      '$route': 'getSlug'
    },
    computed: {
      filteredCourse () {
        try {
          return (this.$store.getters.filteredCourse)
        } catch (e) {
          console.log(e)
        }
      }
    },
    methods: {
      getSlug () {
        try {
          this.slug = this.$route.params.slug
          if (this.slug) {
            this.$store.commit('FILTERED_COURSES', this.slug)
            this.baseUrl = `${this.$store.state.baseDomain}/${this.$route.params.slug}`
          }
        } catch (e) {
          return 'Slug not found'
        }
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
