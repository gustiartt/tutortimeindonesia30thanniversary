export default defineNuxtConfig({
  modules: ['@unocss/nuxt'],

  nitro: {
    preset: 'vercel',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'id' },
      title: '30th Anniversary - Tutor Time Indonesia',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: '30 Years of Little Steps — Celebrating three decades of nurturing early childhood education in Indonesia since 1996.',
        },
        { property: 'og:title', content: '30th Anniversary - Tutor Time Indonesia' },
        {
          property: 'og:description',
          content: '30 Years of Little Steps — Built on Experience, Guided by Care.',
        },
        { property: 'og:type', content: 'website' },
        { name: 'theme-color', content: '#89CFF0' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
    },
  },

  css: ['~/assets/css/fonts.css'],

  compatibilityDate: '2025-01-01',
})
