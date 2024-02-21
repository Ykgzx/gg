// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    head: 
      {
        "meta": [
          {
            "name": "viewport",
            "content": "width=device-width, initial-scale=1"
          },
          {
            "charset": "utf-8"
          }
        ],
        "link": [{
          rel: "preconnect",
          href: "https://fonts.googleapis.com"
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com"
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Protest+Revolution&display=swap"
        }],
        "style": [],
        "script": [],
        "noscript": []
      
    },
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  devtools: { enabled: true }
})
