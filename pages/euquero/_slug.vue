<template lang='pug'>
  div
    p {{ slug }}
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
    methods: {
      getSlug () {
        try {
          this.slug = this.$route.params.slug
          if (this.slug) {
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
