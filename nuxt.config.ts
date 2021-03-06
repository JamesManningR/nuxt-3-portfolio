import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  css: [
    'water.css/out/dark.min.css',
    'css-skeletons'
  ],
  build: {
    transpile: ['@apollo/client']
  }
})
