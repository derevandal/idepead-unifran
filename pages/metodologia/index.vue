<template lang='pug'>
  article.container.article--container
    header.article--header.container
      h1.article-title Metodologia
    .article--content.container
      ul
        li Estude em casa a hora que quiser
        li Provas presenciais e semestrais
        li Uma disciplina por mês
    footer.article-footer.container
      nuxt-link(to="/euquero/").navigation--link.invert Eu quero
</template>

<script>
export default {
  name: 'metodologia',
  created () {
    this.setPage()
  },
  watch: {
    '$route': 'setPage'
  },
  methods: {
    setPage () {
      this.$store.dispatch('SET_DOMAIN', '/metodologia')
      this.$store.dispatch('SET_TITLE', 'Metodologia')
    }
  }
}
</script>

<style lang='stylus'scoped >
.article--container
  flex-direction column
.article--header
  height 200px
  background url("~/assets/images/unifran_bolsa.jpg")

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
