<template lang="pug">
  div.container.container--app
    app-header
    section.section--middle.container
      app-navigation
      nuxt
    app-footer
</template>

<script>
import appHeader from '~/components/app/header.vue'
import appNavigation from '~/components/app/navigation.vue'
import appFooter from '~/components/app/footer.vue'

export default {
  components: {
    appHeader,
    appNavigation,
    appFooter
  },
  head () {
    return {
      title: this.$store.getters.getTitle,
      link: [
        { hid: 'canonical', rel: 'canonical', content: this.$store.getters.getFullDomain }
      ],
      meta: [
        { hid: 'description', name: 'description', content: this.$store.getters.getFullDescription },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
        { hid: 'twitter:site', name: 'twitter:site', content: '@idepead' },
        { hid: 'twitter:title', name: 'twitter:title', content: this.$store.getters.getTitle },
        { hid: 'twitter:description', name: 'twitter:description', content: this.$store.getters.getFullDescription },
        { hid: 'twitter:creator', name: 'twitter:creator', content: '@idepead' },
        { hid: 'twitter:image', name: 'twitter:image', content: '~assets/images/unifran_og.jpg' },
        { hid: 'og:title', name: 'og:title', content: this.$store.getters.getTitle },
        { hid: 'og:type', name: 'og:type', content: 'article' },
        { hid: 'og:url', name: 'og:url', content: this.$store.getters.getFullDomain },
        { hid: 'og:description', name: 'og:description', content: this.$store.getters.getFullDescription },
        { hid: 'og:site_name', name: 'og:site_name', content: 'Programa de Bolsas - IDEPead e UNIFRAN' },
        { hid: 'fb:admins', name: 'fb:admins', content: '264917726946702' }
      ]
    }
  }
}
</script>

<style lang="stylus">
html
  font-family 'Roboto', sans-serif
  font-size 16px
  -ms-text-size-adjust 100%
  -webkit-text-size-adjust 100%
  -moz-osx-font-smoothing grayscale
  -webkit-font-smoothing antialiased
  background-color #EFEFEF
  color #252525

*, *:before, *:after
  box-sizing border-box
  margin 0

.container
  display flex
  width 100%
.container--app
  max-width 900px
  margin 1.5em auto
  flex-direction column
.section--middle
  flex-direction column


/* .button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
} */
</style>
