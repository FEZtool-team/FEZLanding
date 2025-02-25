import * as dotenv from "dotenv";
dotenv.config({
  path: `./.env`,
  override: false,
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "FEZtool - Free and Easy",
      titleTemplate: "%s - FEZtool",
    },
    // pageTransition: { name: "page", mode: "out-in" },
    // layoutTransition: {
    //   name: "slide",
    //   mode: "out-in",
    // },
  },
  css: ["~/assets/css/main.css"],

  devServer:{
    port:3035
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "unplugin-icons/nuxt",
    "@nuxtjs/google-fonts",
  ],

  googleFonts: {
    families: {
      Outfit: true, // Defaults to all weights/styles
    },
    display: "swap",
  },

  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            sans: ["Outfit", "sans-serif"],
          },
        },
      },
    },
  },

  typescript: {
    shim: false,
  },

  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          verbose: true,
          logger: {
            warn(message: any, options: any) {
              if (!message.includes("deprec")) {
                console.warn(message, options);
              }
            },
          },
        },
      },
    },
  },

  nitro: {
    serveStatic: true,
  },

  devtools: { enabled: true },
  compatibilityDate: "2024-11-01",
});
