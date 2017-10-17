import Vue from 'vue'

import portuguese from 'vee-validate/dist/locale/pt_BR'

import VeeValidate, { Validator } from 'vee-validate'

Validator.addLocale(portuguese)

Vue.use(VeeValidate, {
  locale: 'pt_BR'
})
