import messages from './assets/internationalization/index.js'

export default {
  mode: 'universal',
  target: 'static',
  head: {
    title: 'Apps - Yannick Spoerl',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Yannick Spoerl - Apps' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
  ],
  plugins: [
    '~plugins/loadContent.js',
    '~plugins/loadApps.js'
  ],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module'
  ],
  modules: [
    'nuxt-i18n',
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: 'https://apps.yannickspoerl.com',
    exclude: [
      '/privacy',
      '/license'
    ]
  },
  i18n: {
    locales: [
      {
        code: 'de',
        iso: 'de'
      },
      {
        code: 'en',
        iso: 'en'
      }
    ],
    defaultLocale: 'de',
    vueI18n: {
      fallbackLocale: 'en',
      messages
    },
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true
    }
  },
  build: {
  }
}
