<template lang='pug'>
  div
    form(@submit.prevent="onSubmit" v-if="!formSubmitted")
      .form-group
        input(type="text" v-model="name" name="name" required v-validate="'required'")
        label.control-label(for="input") Qual seu nome?
        i.bar
        p.text-danger(v-if="errors.has('name')") Por favor, informe seu nome.
      .form-group
        input(type="email" v-model="email" name="email" required v-validate="'required|email'")
        label.control-label(for="input") Qual seu e-mail?
        i.bar
        p.text-danger(v-if="errors.has('email')") Por favor, informe seu e-mail.
      .form-group
        input(type="phone" v-model="phone" name="phone" required v-validate="'required|min:15|max:16'" v-mask="'(##) #####-####'" minlength="16" maxlength="16")
        label.control-label(for="input") Qual seu celular?
        i.bar
        p.text-danger(v-if="errors.has('phone')") Por favor, informe seu celular.
      .form-group
        select(required name="course" v-model="course" v-validate="'not_in:1'")
          option(value="1" name="undefined" selected) Selecione seu curso...
          option(v-for="course in allCourses" :key="course.slug" :value="course.slug") {{ course.name }}
        label.control-label(for="select") Qual o curso desejado?
        i.bar
        p.text-danger(v-if="errors.has('select')") Por favor, selecione o curso desejado.
      .checkbox
        label
          input(type="checkbox" name="agreed" v-model="agreed" v-validate="'required'" checked required)
          i.helper
          | Desejo que entrem em contato comigo
        p.text-danger(v-if="errors.has('checkbox')") Aí não tem como, né?
      vue-recaptcha(@verify="onVerify" ref="recaptcha" @expired="onExpired" sitekey="6LcByCkUAAAAANP8hb69eqCiJPnGEaarsg_98AXe")
      .button-container
        button.button(type="submit"): span Enviar
    div(v-else)
        h1.submitted Sua inscrição foi enviada. Por favor, aguarde o contato para oficializarmos sua inscrição.
</template>

<script>
  import VueRecaptcha from 'vue-recaptcha'

  import axios from 'axios'

  export default {
    name: 'eu-quero-no-slug',
    components: {
      'vue-recaptcha': VueRecaptcha
    },
    data () {
      return {
        formSubmitted: false,
        formLoading: false
      }
    },
    created () {
      this.setPage()
    },
    computed: {
      allCourses () {
        return (this.$store.getters.allCourses)
      },
      name: {
        get () {
          return this.$store.getters.getInscriptionName
        },
        set (value) {
          this.$store.dispatch('SET_INSCRIPTION_NAME', value)
        }
      },
      email: {
        get () {
          return this.$store.getters.getInscriptionEmail
        },
        set (value) {
          this.$store.dispatch('SET_INSCRIPTION_EMAIL', value)
        }
      },
      phone: {
        get () {
          return this.$store.getters.getInscriptionPhone
        },
        set (value) {
          this.$store.dispatch('SET_INSCRIPTION_PHONE', value)
        }
      },
      course: {
        get () {
          return this.$store.getters.getInscriptionCourse
        },
        set (value) {
          this.$store.dispatch('SET_INSCRIPTION_COURSE', value)
        }
      },
      agreed: {
        get () {
          return this.$store.getters.getInscriptionAgreed
        },
        set (value) {
          this.$store.dispatch('SET_INSCRIPTION_AGREED', value)
        }
      }
    },
    watch: {
      '$route': 'setPage'
    },
    methods: {
      setPage: function () {
        this.$store.dispatch('SET_DOMAIN', '/euquero')
        this.$store.dispatch('SET_TITLE', 'Eu quero!')
      },
      submitForm () {
      },
      onSubmit: function (e) {
        e.preventDefault()
        if (!this.$store.getters.getInscriptionToken) {
          this.$validator.validateAll()
            .then(() => {
              axios.post('https://api.idepead.com.br/inscription', this.$store.getters.getInscription)
                .then(function (response) {
                  console.log(response)
                  this.formSubmitted = true
                  this.$store.dispatch('CLEAR_INSCRIPTION')
                })
                .catch((e) => {
                  if (error.response) {
                      // The request was made and the server responded with a status code
                      // that falls out of the range of 2xx
                      // console.log(error.response.data);
                      // console.log(error.response.status);
                      // console.log(error.response.headers);
                  } else if (error.request) {
                      // The request was made but no response was received
                      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                      // http.ClientRequest in node.js
                      console.log(error.request)
                  } else {
                      // Something happened in setting up the request that triggered an Error
                      console.log('Error', error.message)
                  }
                  console.log(error.config);
                })
            })
            .catch((e) => {
              console.log('e' + e)
            })
        }
        console.log(e)
      },
      onVerify: function (response) {
        this.$store.dispatch('SET_INSCRIPTION_TOKEN', response)
      },
      onExpired: function () {
        this.$refs.recaptcha.reset()
        this.$store.dispatch('SET_INSCRIPTION_TOKEN', null)
      },
      resetRecaptcha: function () {
        this.$refs.recaptcha.reset()
        this.$store.dispatch('SET_INSCRIPTION_TOKEN', null)
      }
    }
  }
</script>

<style lang='stylus' >
.article--content
  background #fff
  padding 3rem 5rem
  border-radius 1px
  flex-direction column
  justify-content flex-start
</style>
