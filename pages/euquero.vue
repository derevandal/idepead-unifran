<template lang='pug'>
  article.container.article--container
    header.article--header.container
      h1.article-title Eu quero!
    nuxt-child.article--content.container
</template>

<script>
export default {
  name: 'euquero-index',
  head () {
    return {
      title: 'Eu quero!',
      link: [
        { rel: 'canonical', content: `${this.$store.state.baseDomain}/` }
      ]
    }
  }
}
</script>

<style lang='stylus' >
.article--container
  flex-direction column
.article--header
  height 200px
  background url("~/assets/images/unifra-bolsa.png")

  background-color #fff
  background-position top center
  background-clip content-box
  background-size cover
  background-attachment fixed
.article-title
  font-size 3em
  margin auto .7em
  color #E53249
.article--content
  background #fff
  padding 3rem 5rem
  border-radius 1px
  flex-direction column
  justify-content flex-start
  font-size 1.5em
@media (max-width: 600px)
  .article--content
    padding 2rem 3rem
    font-size 1.4em
@media (max-width: 450px)
  .article--content
    padding .5rem 1.5rem
</style>
