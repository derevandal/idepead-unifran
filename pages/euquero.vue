<template lang='pug'>
  article.container.article--container
    header.article--header.container
      h1.article-title {{ pageName }}
    nuxt-child.article--content.container
</template>

<script>
export default {
  name: 'euquero-index',
  computed: {
    pageName () {
      let pageName = 'Eu quero'
      let course = this.$store.getters.getFilteredCourse
      if (course && course.name) {
        pageName += ' ' + course.name
      }
      pageName += '!'
      return pageName
    }
  }
}
</script>

<style lang='stylus' scooped>
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
$mf-current-color = #4f93ce
// Animation
$mf-transition-speed = 0.28s

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
  font-size 1em
@media (max-width: 600px)
  .article--content
    padding 2rem 3rem
@media (max-width: 450px)
  .article--content
    padding .5rem 1.5rem

// The Styles for the form
fieldset
  margin: $mf-fieldset-margin
  padding: 0
  border: none
.form-radio,
.form-group
  position: relative
  margin-top: ($mf-gap * 1.5)
  margin-bottom: ($mf-gap * 1.5)
.form-inline
  > .form-group,
	> .btn
    display: inline-block
    margin-bottom: 0
.form-help
  margin-top: $mf-spacer
  margin-left: $mf-spacer
  color: $mf-label-color
  font-size: $mf-active-font-size
  .checkbox &,
	.form-radio &,
	.form-group &
    position: absolute
    width: 100%
  .checkbox &
    position: relative
    margin-bottom: $mf-font-size
  .form-radio &
    padding-top: ($mf-spacer * 2)
    margin-top: -1*$mf-font-size
.form-group
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus
  input:-webkit-autofill,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus
    background-color red !important
  input
    height: ($mf-font-size * 1.9)
  textarea
    resize: none
  select
    width: 100%
    font-size: $mf-font-size
    height: ($mf-font-size * 1.6)
    padding: $mf-spacer $mf-spacer ($mf-spacer / 2)
    background: none
    border: none
    line-height: 1.6
    box-shadow: none
  .control-label
    position: absolute
    top: ($mf-font-size / 4)
    pointer-events: none
    padding-left: $mf-spacer
    z-index: 1
    color: $mf-label-color
    font-size: $mf-font-size
    font-weight: normal
    transition: all $mf-transition-speed ease
  .bar
    position: relative
    border-bottom: ($mf-font-size / 16) solid $mf-border-color
    display: block
    &::before
      content: ''
      height: ($mf-font-size / 8)
      width: 0
      left: 50%
      bottom: ($mf-font-size / -16)
      position: absolute
      background: $mf-focus-color
      transition: left $mf-transition-speed ease, width $mf-transition-speed ease
      z-index: 2
  input,
	textarea
    display: block
    background: none
    padding: $mf-spacer $mf-spacer ($mf-spacer / 2)
    font-size: $mf-font-size
    border-width: 0
    border-color: transparent
    line-height: 1.9
    width: 100%
    color: transparent
    transition: all $mf-transition-speed ease
    box-shadow: none
  input[type="file"]
    line-height: 1
    ~ .bar
      display: none
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
      font-size: $mf-active-font-size
      color: $mf-active-color
      top: $mf-active-top
      left: 0
  select,
	input,
	textarea
    &:focus
      outline: none
      ~ .control-label
        color: $mf-focus-color
      ~ .bar
        &::before
          width: 100%
          left: 0
// Radio & Checkbox
.checkbox,
.form-radio
  label
    position: relative
    cursor: pointer
    padding-left: $mf-checkbox-gap
    text-align: left
    color: $mf-input-color
    display: block
    font-size 0.8em
  input
    width: auto
    opacity: 0.00000001
    position: absolute
    left: 0
.radio
  margin-bottom: $mf-font-size
  .helper
    position: absolute
    top: $mf-radio-margin
    left: $mf-radio-margin
    cursor: pointer
    display: block
    font-size: $mf-font-size
    user-select: none
    color: $mf-border-color
    &::before,
		&::after
      content: ''
      position: absolute
      left: 0
      top: 0
      margin: ($mf-spacer * 2)
      width: $mf-font-size
      height: $mf-font-size
      transition: transform $mf-transition-speed ease
      border-radius: 50%
      border: ($mf-font-size / 8) solid $mf-current-color
    &::after
      transform: scale(0)
      background-color: $mf-focus-color
      border-color: $mf-focus-color
  label:hover .helper
    color: $mf-focus-color
  input:checked
    ~ .helper
      &::after
        transform: scale(0.5)
      &::before
        color: $mf-focus-color
.checkbox
  margin-top: ($mf-gap * 2)
  margin-bottom: $mf-font-size
  .helper
    color: $mf-border-color
    position: absolute
    top: $mf-checkbox-top
    left: 0
    width: $mf-font-size
    height: $mf-font-size
    z-index: 0
    border: ($mf-font-size / 8 solid) $mf-current-color
    border-radius: ($mf-font-size / 16)
    transition: border-color $mf-transition-speed ease
    &::before,
		&::after
      position: absolute
      height: 0
      width: ($mf-font-size * 0.2)
      background-color: $mf-focus-color
      display: block
      transform-origin: left top
      border-radius: ($mf-font-size / 4)
      content: ''
      transition: opacity $mf-transition-speed ease, height 0s linear $mf-transition-speed
      opacity: 0
    &::before
      top: ($mf-font-size * 0.65)
      left: ($mf-font-size * 0.38)
      transform: rotate(-135deg)
      box-shadow: 0 0 0 ($mf-font-size / 16) $body-bg
    &::after
      top: ($mf-font-size * 0.3)
      left: 0
      transform: rotate(-45deg)
  label:hover .helper
    color: $mf-focus-color
  input:checked
    ~ .helper
      color: $mf-focus-color
      &::after,
			&::before
        opacity: 1
        transition: height $mf-transition-speed ease
      &::after
        height: ($mf-font-size / 2)
      &::before
        height: ($mf-font-size * 1.2)
        transition-delay: $mf-transition-speed
.radio + .radio,
.checkbox + .checkbox
  margin-top: $mf-font-size
.has-error
  .legend.legend,
	&.form-group .control-label.control-label
    // Prevent !importantRule
    color: $mf-error-color
  &.form-group,
	&.checkbox,
	&.radio,
	&.form-radio
    .form-help,
		.helper
      color: $mf-error-color
  .bar
    &::before
      background: $mf-error-color
      left: 0
      width: 100%
.button-container
	text-align: center
.button
  position: relative
  background: $mf-current-color
  border: 1px solid $mf-current-color
  font-size: ($mf-font-size * 1.1)
  color: lighten($mf-focus-color, 10%)
  margin: $mf-gap * 2 0
  padding: ($mf-gap / 2) ($mf-gap * 2)
  cursor: pointer
  transition: background-color $mf-transition-speed ease, color $mf-transition-speed ease, box-shadow $mf-transition-speed ease
  overflow: hidden
  box-shadow: $shadow-2
  span
    color: #fff
    position: relative
    z-index: 1
  &::before
    content: ''
    position: absolute
    background: darken($mf-focus-color, 40%)
    border: 50vh solid darken($mf-focus-color, 20%)
    width: 30vh
    height: 30vh
    border-radius: 50%
    display: block
    top: 50%
    left: 50%
    z-index: 0
    opacity: 1
    transform: translate(-50%, -50%) scale(0)
  &:hover
    color: $mf-focus-color
    box-shadow: $shadow-6
  &:active,
	&:focus
    &::before
      transition: transform $mf-transition-speed * 4 ease, opacity $mf-transition-speed ease $mf-transition-speed * 1.3
      transform: translate(-50%, -50%) scale(1)
      opacity: 0
  &:focus
    outline: none

</style>
