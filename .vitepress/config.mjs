import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "Java Journey by Rasia",
  description: "Coding the Path to Java Mastery",
  head: [['link', { rel: 'icon', href: '/assets/favicon.ico' }]],
  
  // base: '/base/'

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    /*
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/docs/markdown-examples' },
      { text: 'Hi', link: '/docs/test' }
    ],
    */

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'About me', link: '/docs/introduction/about-me' },
          { text: 'This Project', link: '/docs/introduction/project' }
        ]
      },
      {
        text: 'Java',
        collapsed: true,
        items: [
          {
            text: 'String',
            collapsed: true,
            items: [
              { text: 'String vs StringBuilder', link: '/docs/java/String_vs_StringBuilder' }
            ]
          }
        ]
      },
      {
        text: 'Tools and Technologies',
        collapsed: true,
        items: [
          { text: 'Hi', link: '/docs/test' }
        ]
      },
      {
        text: 'Examples',
        collapsed: true,
        items: [
          { text: 'Markdown Examples', link: '/docs/markdown-examples' },
          { text: 'Runtime API Examples', link: '/docs/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/rasia83/RasiaInkCodingOdyssey' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/tiagorasia/' }
    ]
  },

  /*
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    pt: {
      label: 'Portugues',
      lang: 'pt', // optional, will be added  as `lang` attribute on `html` tag
      link: '/pt/' // default /fr/ -- shows on navbar translations menu, can be external

      // other locale specific properties...
    }
  }
  */

})
