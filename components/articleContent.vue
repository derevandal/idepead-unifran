<template lang='pug'>
    article
      fieldset
        legend
          h2 Como funciona?
        ul
          li Após aprovado no processo seletivo, você efetura o pagamento da matrícula: R$49,00.
          li Você ingressa em 2017 pagando apenas a matrícula (
            strong R$49,
            small 00
            | ) e começa a pagar as mensalidades em janeiro de 2018.
          li E, de janeiro de 2018 até o final do seu curso, recebe uma bolsa de 47,5% de desconto.
      fieldset
        legend
          h2 Quais cursos participam?
        ul
          li(v-for="course in courses")
           a(:href="'/inscricao/' + course.slug" :title="'Graduação em' + course.name" :alt="'Graduação em' + course.name") {{ course.name }}
          //- li Administração - 4 anos - R$418,00
          //- li Artes Visuais - 3 anos - R$366,00
          //- li Ciências Biológicas - Licenciatura
          //- li Ciências Contábeis
          //- li Ciências Econômicas
          //- li Ciências Sociais
          //- li Análise e Desenvolvimento de Sistemas
          //- li Banco de Dados
          //- li Comércio Exterior
          //- li Gastronomia
          //- li Gestão Ambiental
          //- li Gestão Comercial
          //- li Gestão da Segurança Privada
          //- li Gestão de Qualidade
          //- li Gestão de Recursos Humanos
          //- li Gestão de Ti
          //- li Gestão do Agronegócio
          //- li Gestão Financeira
          //- li Gestão Hospitalar
          //- li Gestão Pública
          //- li Logística
          //- li Marketing
          //- li Processos Gerenciais
          //- li Secretariado
          //- li Segurança No Trabalho
          //- li Educação Física - Licenciatura
          //- li Engenharia Ambiental
          //- li Engenharia de Produção
          //- li Filosofia
          //- li Física - Licenciatura
          //- li Biologia para não Licenciados
          //- li Física para não Licenciados
          //- li Geografia para não Licenciados
          //- li História para não Licenciados
          //- li Matemática para não Licenciados
          //- li Português para não Licenciados
          //- li Química para não Licenciados
          //- li Geografia  - Licenciatura
          //- li História  - Licenciatura
          //- li Letras (Português e Espanhol)  - Licenciatura
          //- li Letras (Português e Inglês)- Licenciatura
          //- li Matemática - Licenciatura
          //- li Pedagogia - Licenciatura
          //- li Química - Licenciatura
          //- li Serviço Social
          //- li Teologia
</template>

<style lang='stylus' scoped >
  header
    display flex
    flex-direction column
    width 100%
  fieldset
    text-align left
  legend
    padding 0 .5em
</style>

<script>
// import TodoHeader from '~components/header'
// import TodoFooter from '~components/footer'
export default {
  // validate ({ params }) {
  //   return !params.slug || params.slug === 'active' || params.slug === 'completed'
  // },
  // head () {
  //   return {
  //     title: this.$route.params.slug || 'all',
  //     titleTemplate: 'Nuxt TodoMVC : %s todos'
  //   }
  // },
  // data () {
  //   return {
  //     editedTodo: null
  //   }
  // },
  // watch: {
  //   todos: {
  //     deep: true,
  //     handler: 'save'
  //   }
  // },
  computed: {
    courses () {
      // if (this.$route.params.slug === 'active') {
      //   return this.$store.getters.activeTodos
      // }
      // if (this.$route.params.slug === 'completed') {
      //   return this.$store.getters.completedTodos
      // }
      return this.$store.getters.allCourses
    }
  }
  // methods: {
  //   // allDone () {
  //   //   this.$store.dispatch('allDone')
  //   // },
  //   // editTodo (todo) {
  //   //   this.beforeEditCache = todo.title
  //   //   this.editedTodo = todo
  //   // },
  //   // doneEdit (todo) {
  //   //   this.editedTodo = null
  //   //   todo.title = todo.title.trim()
  //   //   if (!todo.title) {
  //   //     this.$store.dispatch('removeTodo', todo)
  //   //   }
  //   // },
  //   // cancelEdit (todo) {
  //   //   this.editedTodo = null
  //   //   todo.title = this.beforeEditCache
  //   // },
  //   // removeTodo (todo) {
  //   //   this.$store.dispatch('removeTodo', todo)
  //   // },
  //   // save () {
  //   //   this.$store.dispatch('saveTodos')
  //   // }
  // }
}
</script>
