import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src/",
  runtimeConfig: {
    public: {
      API_BASE: process.env.API_BASE,
      NUXT_BASE_URL: process.env.NUXT_BASE_URL,
    },
  },
  ssr: false,
  typescript: { typeCheck: true, strict: true },
  css: ["vuetify/styles", "@mdi/font/css/materialdesignicons.css"],
  devtools: { enabled: true },
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    "@tresjs/nuxt",
    "@pinia/nuxt",
    "@nuxt/test-utils/module",
    async (_options: {}, nuxt: Record<string, any>) => {
      // @ts-ignore
      nuxt.hooks.hook("vite:extendConfig", (config) =>
        config.plugins.push(vuetify()),
      );
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    server: {
      proxy: {
        "/api": {
          target: "http://localhost:8080/",
          changeOrigin: true,
        },
      },
    },
  },
});
