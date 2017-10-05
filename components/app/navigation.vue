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
  &:hover
    background #E53249
    color black
  &.invert
    background #E53249
    color black
    &:hover
      color white
      background none

</style>
