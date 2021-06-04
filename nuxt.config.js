export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/website/',
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Other Plane Labs',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'theme-color', content: '#0094a8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'title',
        name: 'title',
        content: 'Other Plane Labs',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Other Plane builds apps and infrastructure for the Witnet ecosystem.',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Other Plane Labs',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'Other Plane builds apps and infrastructure for the Witnet ecosystem',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Other Plane Labs',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Other Plane builds apps and infrastructure for the Witnet ecosystem',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'shortcut icon', href: '/favicon.ico' },
    ],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],
  // You will have to add this new object if it doesn't exist already
  // ...
  modules: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: ['~/components'],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
