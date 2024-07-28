import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Lonely Fish",
  description: "lonely fish",
  base: '/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '计算机', link: '/it/' },
      { text: '说说', link: '/talk/' },
      { text: '影视', link: '/movie/' }

    ],

    sidebar: {
      '/it/':[
        {
          text: '计算机',
          items: [
            { text: 'Android源码中使用tab导航', link: '/it/Android源码中使用tab导航' },
            { text: 'Markdown轻指南', link: '/it/Markdown轻指南' }
          ]
        }
      ],
      '/talk/':[
        {
          text: '说说',
          items: [
            { text: '概述', link: '/talk/' },
            { text: '云南行程', link: '/talk/云南行程' },
            { text: 'First', link: '/talk/first' }
          ]
        }
      ],
      '/movie/':[
        {
          text: '影视',
          items: [
            { text: '概述', link: '/movie/' },
            { text: '白鹿原', link: '/movie/田小娥还是李沁' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
