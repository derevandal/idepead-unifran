<template lang="pug">
  nav.navigation.container
    ul.navigation--list.container
      li.navigation--item
        nuxt-link(to="/").navigation--link Início
      li.navigation--item
        nuxt-link(to="/cursos/").navigation--link Cursos
      li.navigation--item
        nuxt-link(to="/metodologia/").navigation--link Metodologia
      li.navigation--item
        nuxt-link(to="/euquero/").navigation--link.invert Eu quero

</template>

<style lang="stylus">
.navigation--list
  background-color #2D4C72
  padding 0
  margin 0
  list-style none
.navigation--item
  width 25%
.navigation--link
  width 100%
  display flex
  text-align center
  justify-content center
  font-variant small-caps
  color white
  text-decoration none
  font-size 1.5em
  padding .5em
  transition .2s all ease-in-out
  &:hover,
  &.nuxt-link-exact-active
    background #252525
    color white
  &.invert
    background #E53249
    color black
    &:hover
      background #252525
      color white
    &.nuxt-link-exact-active
      background #252525
      color white
@media (max-width: 600px)
  .navigation--list
    flex-wrap wrap
  .navigation--item
    width 50%
@media (max-width: 300px)
  .navigation--list
    flex-direction column
  .navigation--item
    width 100%
</style>

