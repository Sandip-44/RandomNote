export default defineNuxtConfig({
    devServer: {
    port: process.env.NUXT_PORT || 3000,
    host: process.env.NUXT_HOST || '0.0.0.0'
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: ["~/plugins/supabase.client.js"],
  modules: ["@primevue/nuxt-module"],
});
