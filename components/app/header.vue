<template lang='pug'>
    header.app-header.container
      .logos.container
        img.idepead( src="~/assets/images/idep-retangulo-fundo-branco.svg" alt="Logotipo do IDEPead" title="IDEPead" width="300px" )
        img.unifran( src="~/assets/images/unifran-logo-fundo-branco.svg" alt="Logotipo da UNIFRAN" title="UNIFRAN" width="300px" )
      h1.title.container Programa de Bolsas
</template>

<style lang='stylus' >
  .app-header
    flex-direction  column
  .logos
    justify-content  space-around
    // transform perspective(1px) translateZ(0)
    // position relative
    // overflow hidden
    padding-bottom 1em
    // &:before
    //   content ""
    //   position absolute
    //   left 5%
    //   right 5%
    //   bottom 0
    //   background #cccc
    //   height 1px
  .title
    text-align center
    justify-content  space-around
    color #252525
    font-size 3em
    margin .2em 0
    small
      font-size .4em
      vertical-align text-top
@media (max-width: 600px)
  .logos
    flex-wrap wrap
  .idepead,
  .unifran
    width 250px
</style>
