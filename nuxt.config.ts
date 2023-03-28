// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Toyhouse Profile Generator',
      charset: 'utf-8',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
    
        // primary
        { name: 'title', content: 'Toyhouse Profile Generator' },
        { hid: 'description', name: 'description', content: 'Generate customizable HTML templates for your Toyhouse, without changing any code.' },
    
        // open graph / facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://toyhousepg.netlify.app/' },
        { property: 'og:title', content: 'Toyhouse Profile Generator' },
        { property: 'og:description', content: 'Generate customizable HTML templates for your Toyhouse, without changing any code.' },
        { property: 'og:image', content: 'https://cdn.discordapp.com/attachments/349602713358696448/1090392601372413952/toyhousemetacard.jpg' },
    
        // twitter
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://toyhousepg.netlify.app/' },
        { property: 'twitter:title', content: 'Toyhouse Profile Generator' },
        { property: 'twitter:description', content: 'Generate customizable HTML templates for your Toyhouse, without changing any code.' },
        { property: 'twitter:image', content: 'https://cdn.discordapp.com/attachments/349602713358696448/1090392601372413952/toyhousemetacard.jpg' },
      ],
      viewport: 'width=device-width, initial-scale=1',
			script: [
				{src: "https://kit.fontawesome.com/373a1c097b.js", crossorigin: "anonymous"},
				{src: "https://code.jquery.com/jquery-3.3.1.slim.min.js", crossorigin: "anonymous", integrity: "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"},
				{src: "https://cdn.jsdelivr.net/npm/popper.js@1.14.6/dist/umd/popper.min.js", crossorigin: "anonymous", integrity: "sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut"},
				{src: "https://cdn.jsdelivr.net/npm/bootstrap@4.2.1/dist/js/bootstrap.min.js", crossorigin: "anonymous", integrity: "sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k"},
			],
      link: [
				{rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"},
				{rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@4.2.1/dist/css/bootstrap.min.css", integrity: "sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS", crossorigin: "anonymous"},
        {rel: "icon", type: 'image/png', href: '/favicon.png'}
			],
    },
  },
  css: [
    '@/assets/css/main.css',
  ],
  routeRules: {
    '/_nuxt/**': { cors: true } ,
    '/*': { cors: true } ,
  }
});
