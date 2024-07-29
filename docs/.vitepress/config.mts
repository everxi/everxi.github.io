import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Lonely Fish",
  description: "lonely fish",
  base: '/',
  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息',
    },
    image: {
      // 启用图片懒加载
      lazyLoading: true
    }
  },
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
            { text: 'Markdown轻指南', link: '/it/Markdown轻指南' },
            { text: 'Summary', link: '/it/Summary' },
            { text: 'Singleton', link: '/it/singleton' }
          ]
        }
      ],
      '/talk/':[
        {
          text: '说说',
          items: [
            { text: '概述', link: '/talk/' },
            { text: '云南行程', link: '/talk/云南行程' },
            { text: '过渡期', link: '/talk/过渡期' },
            { text: '说点什么', link: '/talk/说点什么' },
            { text: '端午', link: '/talk/端午' },
            { text: '水逆', link: '/talk/水逆，逆吗' },
            { text: '春夏番', link: '/talk/春夏番' },
            { text: '新年的小九九', link: '/talk/新年的小九九' },
            { text: '我又回来了', link: '/talk/我又回来了' },
            { text: '已是凌晨', link: '/talk/已是凌晨' },
            { text: 'Today', link: '/talk/today' },
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
