<template lang='pug'>
  article.container.article--content
    header.article--header
      h1.article-title Eu quero!

      nuxt-child
</template>

<script>
  export default {
    name: 'euquero',
    components: {
    },
    data () {
      return {
      }
    },
    head () {
      return {
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
