/* eslint-disable */

export default ({ app }) => {
  /*
  ** Only run on client-side and only in production mode
  */
  if (process.env.NODE_ENV !== 'production') return
  /*
  ** Include Google Tag Manager Script
  */
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-KBV6KJR');
  /*
  ** Every time the route changes (fired on initialization too)
  */
  // app.router.afterEach((to, from) => {
  //   if ( _gat && _gat._getTracker ) {
  //     ga('set', 'page', to.fullPath)
  //     ga('send', 'pageview')
  //   }
  // })
}
