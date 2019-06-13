
module.exports = {
  mode: 'universal',
  head: {
    title: 'skiify',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Saira+Semi+Condensed&display=swap' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css' }
    ]
  },
  plugins: [
    '~/plugins/anime.js'
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
  }
}
