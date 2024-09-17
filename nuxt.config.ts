// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      "meta": [
        {
          "name": "viewport",
          "content": "width=device-width, initial-scale=1"
        },
        {
          "charset": "utf-8"
        }
      ],
      "link": [
        {
          rel: "preconnect", 
          href: "https://fonts.googleapis.com"
        },
        {
          rel: "preconnect", 
          href: "https://fonts.gstatic.com"
        },
        {
          rel: "stylesheet", 
          href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"
        },
        {
          rel: "stylesheet", 
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        }
      ],
      "style": [],
      "script": [],
      "noscript": []
    }
  },

  modules: ['@nuxtjs/tailwindcss'],
<<<<<<< Updated upstream
  compatibilityDate: "2024-08-13"
})
=======
  compatibilityDate: "2024-08-02",
  // nuxt.config.js

  // Global page transition settings for the overlay
  pageTransition: {
    name: 'slide-overlay', // Name of the transition
    mode: 'out-in' // Ensures the old page leaves before the new one enters
  }

});
>>>>>>> Stashed changes
