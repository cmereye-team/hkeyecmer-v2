import UnpluginComponentsVite from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import type { NitroOptions } from 'nitropack'
// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  // server side rendering mode
  ssr: true,

  // typescripts
  typescript: {
    strict: true,
    typeCheck: true,
  },

  // css
  css: [
    '~/assets/sass/vendor.scss',
    '~/assets/sass/app.scss',
    '~/assets/sass/_variables.scss',
  ],

  // plugins
  plugins: ['~/plugins/navbar.ts'],

  // build
  build: {
    transpile: ['@headlessui/vue','gsap'],
  },

  // modules
  modules: [
    'unplugin-icons/nuxt',
    '@element-plus/nuxt',
    '@intlify/nuxt3',
    '@pinia/nuxt',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-windicss',
    'nuxt-swiper',
    '@zadigetvoltaire/nuxt-gtm',
    'nuxt-simple-sitemap'
  ],

  nitro: {
    preset: 'vercel-edge',
    devProxy: {
      '/proxy': { 
        target: 'https://oapi.dingtalk.com',
        changeOrigin: true,
        prependPath: true,
      },
    },
  },

  // experimental features
  experimental: {
    reactivityTransform: false,
  },
  runtimeConfig: {
    public: {
      gtm: {
        id: 'GTM-MRC2R6D',
        defer: false,
        compatibility: false,
        enabled: true,
        debug: true,
        loadScript: true,
        enableRouterSync: true,
        devtools: true,
      },
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://hkcmereye.com/',
    }
  },
  // auto import components
  components: true,

  // vite plugins
  vite: {
    plugins: [
      UnpluginComponentsVite({
        dts: true,
        resolvers: [
          IconsResolver({
            prefix: 'Icon',
          }),
        ],
      }),
    ]
  },

  // app config
  app: {
    // global transition
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  // localization - i18n config
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'zh-hk',
      fallbackLocale: 'zh-hk',
      availableLocales: ['zh-hk', 'zh', 'en'],
    },
  },

  // vueuse
  vueuse: {
    ssrHandlers: true,
  },

  // content
  content: {
    documentDriven: true,
    markdown: {
      mdc: true,
    },
    highlight: {
      theme: 'github-dark',
    },
  }
})
