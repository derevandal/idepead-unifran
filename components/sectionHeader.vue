<template lang='pug'>
    header
      .logos
        img.idepead( src="~/assets/images/idep-retangulo-fundo-branco.svg" alt="Logotipo do IDEPead" title="IDEPead" width="300px" )
        img.unifran( src="~/assets/images/unifran-logo-fundo-branco.svg" alt="Logotipo da UNIFRAN" title="UNIFRAN" width="300px" )
      h1.title Ganhe uma bolsa de 100%
        small *
</template>

<style lang='stylus' scoped >
  header
    display flex
    flex-direction column
    width 100%
  .logos
    display flex
    width 100%
    justify-content  space-around
    transform perspective(1px) translateZ(0)
    position relative
    overflow hidden
    padding-bottom 1em
    &:before
      content ""
      position absolute
      left 5%
      right 5%
      bottom 0
      background #cccc
      height 1px
  .title
    width 100%
    text-align center
    color #252525
    font-size 3em
    margin .2em 0
    small
      font-size .4em
      vertical-align text-top
</style>
