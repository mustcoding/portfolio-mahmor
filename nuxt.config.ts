// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt'],
  app: {
    baseURL: '/portfolio-mahmor/', // Set your GitHub repo name
  },
  nitro: {
    preset: 'static', // ✅ Ensure static site generation
    prerender: {
      routes: ['/'], // ✅ Ensure the homepage is generated
    }
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  }
})