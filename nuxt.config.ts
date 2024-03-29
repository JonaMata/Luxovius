// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {
      enabled: true,

      timeline: {
        enabled: true,
      },
    },
    modules: [
        '@nuxt/content',
        '@nuxt/image',
    ],
    image: {
        format: ['webp', 'png']
    }
})