<template lang='pug'>
  article.container.article--container
    header.article--header.container
      h1.article-title Cursos
    .article--content.container
      .form-group
        input(type="text" v-model="search" required)
        label.control-label(for="input") Qual curso procura?
        i.bar
      ul.article--list.container.article--list--container
        li.article--item(v-for="course in filteredCourses" :key="course.slug")
           a.article--link(:href="'/euquero/' + course.slug" :title="'Graduação em' + course.name" :alt="'Graduação em' + course.name") {{ course.name }}
    footer.article-footer.container
      nuxt-link(to="/euquero/").navigation--link.invert Eu quero
</template>

<script>
export default {
  name: 'cursos',
  data () {
    return {
      searchWord: null
    }
  },
  computed: {
    // getName: () => {
    //   try {
    //     return 'name'
    //   } catch (e) {
    //     return ''
    //   }
    // },
    filteredCourses () {
      try {
        return (this.$store.getters.filteredCourse || this.$store.getters.allCourses)
      } catch (e) {
        console.log(e)
      }
    },
    search: {
      get () {
        return this.searchWord
      },
      set (word) {
        this.searchWord = word
        this.$store.commit('FILTERED_COURSES', word)
      }
    }
  },
  head () {
    return {
      title: 'Cursos',
      link: [
        { rel: 'canonical', content: `${this.$store.state.baseDomain}/${this.$options.name}` }
      ]
    }
  }
}
</script>

<style lang='stylus' >
// Shadows
$shadow-inset = inset 0 2px 2px 0 rgba(0, 0, 0, 0.14)
$shadow-0 = 0 0 1px rgba(0, 0, 0, 0)
$shadow-2 = 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)
$shadow-3 = 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 1px 8px 0 rgba(0, 0, 0, 0.12)
$shadow-4 = 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2)
$shadow-6 = 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2)
$shadow-8 = 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)
// Font Sizes
$mf-font-size = 1rem
$mf-active-font-size = $mf-font-size * 0.8
$mf-active-top = $mf-font-size * -1
// Margin & Paddings
$mf-gap = $mf-font-size * 1.5
$mf-spacer = $mf-font-size / 8
$mf-fieldset-margin = 0 0 $mf-gap * 2
$mf-checkbox-gap = $mf-font-size * 2
$mf-checkbox-top = 0
$mf-radio-margin = $mf-font-size / -4
// Colors
$mf-input-color = #333333
$mf-border-color = #999999
$mf-label-color = lighten($mf-border-color, 10%)
$mf-active-color = darken($mf-border-color, 10%)
$mf-focus-color = #2D4C72
$mf-error-color = #d9534f
// Animation
$mf-transition-speed = 0.28s

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
  font-size 1em
.article--list
  list-style none
  padding-left 0
  flex-wrap wrap
.article--item
  display flex
  width 50%
.article--link
  width 100%
  display flex
  flex-wrap wrap
  font-size 1.2em
  padding .4em
  margin .5em
  justify-content center
  align-content center
  align-items center
  text-decoration none
  border 2px solid $mf-focus-color
  color $mf-focus-color
  transition $mf-transition-speed all ease-in-out
  &:hover
    color #E53249
    background-color $mf-focus-color
    border-color #E53249

@media (max-width: 600px)
  .article--content
    padding 2rem 3rem
@media (max-width: 450px)
  .article--content
    padding .5rem 1.5rem
  .article--item
    width 100%

.form-radio,
.form-group
	position relative
	margin-top ($mf-gap * 1.5)
	margin-bottom ($mf-gap * 1.5)

.form-group
	input
		height: ($mf-font-size * 1.9)

	textarea
		resize: none

	select
		width 100%
		font-size $mf-font-size
		height ($mf-font-size * 1.6)
		padding $mf-spacer $mf-spacer ($mf-spacer / 2)
		background none
		border none
		line-height 1.6
		box-shadow none

	.control-label
		position absolute
		top ($mf-font-size / 4)
		pointer-events none
		padding-left $mf-spacer
		z-index 1
		color $mf-label-color
		font-size $mf-font-size
		font-weight normal
		transition all $mf-transition-speed ease

	.bar
		position relative
		border-bottom ($mf-font-size / 16) solid $mf-border-color
		display block
		&::before
			content ''
			height ($mf-font-size / 8)
			width 0
			left 50%
			bottom ($mf-font-size / -16)
			position absolute
			background $mf-focus-color
			transition left $mf-transition-speed ease, width $mf-transition-speed ease
			z-index 2
	input,
	textarea
		display block
		background none
		padding $mf-spacer $mf-spacer ($mf-spacer / 2)
		font-size $mf-font-size
		border-width 0
		border-color transparent
		line-height 1.9
		width 100%
		color transparent
		transition all $mf-transition-speed ease
		box-shadow none

	select,
	input:focus,
	input:valid,
	input.form-file,
	input.has-value,
	textarea:focus,
	textarea:valid,
	textarea.form-file,
	textarea.has-value
		color: $mf-input-color
		~ .control-label
			font-size $mf-active-font-size
			color $mf-active-color
			top $mf-active-top
			left 0
	select,
	input,
	textarea
		&:focus
			outline none
			~ .control-label
				color $mf-focus-color
			~ .bar
				&::before
					width 100%
					left 0

.has-error
	.legend.legend,
	&.form-group .control-label.control-label
		color $mf-error-color

	&.form-group,
	&.checkbox,
	&.radio,
	&.form-radio
		.form-help,
		.helper
			color $mf-error-color

	.bar
		&::before
			background $mf-error-color
			left 0
			width 100%
</style>
