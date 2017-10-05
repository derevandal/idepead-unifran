module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Programa de Bolsas - IDEPead e UNIFRAN',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Programa de Bolsas - IDEPead e UNIFRAN' },
      { name: 'apple-mobile-web-app-title', content: 'Bolsas' },
      { name: 'application-name', content: 'Bolsas' },
      { name: 'msapplication-TileColor', content: '#2d4c72' },
      { name: 'msapplication-TileImage', content: '/mstile-144x144.png' },
      { name: 'theme-color', content: '#2d4c72' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'mask-icon', href: '/safari-pinned-tab1.svg', color: '#e53249' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:400,700' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#E53249' },
  /*
  ** Customize CSSs
  */
  css: [
    // Load a node module directly (here it's a SASS file)
    'normalize-styl'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
