<template lang='pug'>
  div
    p no slug
</template>

<script>
  export default {
    name: 'eu-quero-no-slug',
    created () {
      this.setPage()
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
