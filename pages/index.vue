<template lang='pug'>
  article.container.article--container
    header.article--header.container
      h1.article-title Bolsa imperdível!
    .article--content.container
      ul
        li Começe a estudar agora
        li Pague apenas&nbsp;
            strong R$49,
            small 00
            | &nbsp;na matrícula
        li Volte a pagar apenas em janeiro de&nbsp;
          strong 2018
          | &nbsp;com&nbsp;
          strong 47
          small %
          | &nbsp;de desconto!
    footer.article-footer.container
      nuxt-link(to="/euquero/").navigation--link.invert Eu quero
</template>

<script>
export default {
  name: 'programa-de-bolsas',
  created () {
    this.setPage()
  },
  watch: {
    '$route': 'setPage'
  },
  methods: {
    setPage () {
      this.$store.dispatch('SET_DOMAIN', '/')
      this.$store.dispatch('SET_TITLE', 'Programa de Bolsas')
    }
  }
}
</script>

<style lang='stylus' >
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
