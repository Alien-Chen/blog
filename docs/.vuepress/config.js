// Copyright 2022 chenzhiqiang
const { resolve, genSidebarConfig } = require('./utils/index')
const siderBarOptions = {
  hasSub: true,
  exclude: ['README.md', 'assets', '.DS_Store', 'docs', 'images']
}
const nav = [
  {
    text: '首页',
    link: '/',
    icon: 'reco-home'
  },
  {
    text: 'DevOps',
    items: [
      {
        text: 'git相关',
        items: [
          {
            text: 'Git',
            link: '/devops/git/'
          }
        ]
      },
      {
        text: 'CI/CD相关',
        items: [
          {
            text: 'jenkins + github',
            link: '/devops/cicd/'
          },
          {
            text: 'Circle CI',
            link: '/devops/cicd/01.md'
          }
        ]
      },
      {
        text: '博客搭建相关',
        items: [
          {
            text: 'vuepress 新手指南针',
            link: '/devops/blog/'
          }
        ]
      }
    ]
  },
  {
    text: '基础强化',
    items: [
      {
        text: '语言基础',
        items: [
          {
            text: '正则',
            link: '/basic/reg/'
          }
        ]
      },
      {
        text: '计算机基础',
        items: [
          {
            text: '数据结构',
            link: '/basic/ds/'
          }
        ]
      },
      {
        text: 'CSS相关',
        items: [
          {
            text: 'float布局',
            link: '/basic/css/float.md'
          },
          {
            text: 'CSS预处理器',
            link: '/basic/css/preprocessor.md'
          },
          {
            text: 'CSS 动画基础',
            link: '/basic/css/animation.md'
          },
          {
            text: 'CSS 动画强化',
            link: '/basic/css/animation-strong.md'
          }
        ]
      },
      {
        text: 'HTML相关',
        items: [
          {
            text: 'HTML基础',
            link: '/basic/html/'
          }
        ]
      },
      {
        text: 'Websocket相关',
        items: [
          {
            text: 'Websoket基础',
            link: '/basic/websocket/'
          }
        ]
      }
    ]
  },
  {
    text: '前端笔记',
    items: [
      {
        text: '移动端相关',
        items: [
          {
            text: '移动端篇',
            link: '/note/moblie/'
          }  
        ]
      },
      {
        text: '浏览器相关',
        items: [
          {
            text: '浏览器兼容篇',
            link: '/note/browser/'
          } 
        ]
      }
    ]
  }
]
const sidebar = {
  '/basic/': [
    {
      title: '基础语言',
      collapsable: false,
      children: genSidebarConfig('basic/reg', siderBarOptions)
    },
    {
      title: '数据结构',
      collapsable: false,
      children: genSidebarConfig('basic/ds', siderBarOptions)
    },
    {
      title: 'CSS相关',
      collapsable: false,
      children: genSidebarConfig('basic/css', siderBarOptions)
    },
    {
      title: 'HTML相关',
      collapsable: false,
      children: genSidebarConfig('basic/html', siderBarOptions)
    },
    {
      title: 'Websocket相关',
      collapsable: false,
      children: genSidebarConfig('basic/websocket', siderBarOptions)
    },
  ],
  '/devops/': [
    {
      title: 'git相关',
      collapsable: false,
      children: genSidebarConfig('devops/git', siderBarOptions)
    },
    {
      title: 'CI/CD相关',
      collapsable: false,
      children: genSidebarConfig('devops/cicd', siderBarOptions)
    },
    {
      title: '博客搭建相关',
      collapsable: false,
      children: genSidebarConfig('devops/blog', siderBarOptions)
    }
  ],
  '/note/': [
    {
      title: '移动端相关',
      collapsable: false,
      children: genSidebarConfig('note/moblie', siderBarOptions)
    },
    {
      title: '浏览器相关',
      collapsable: false,
      children: genSidebarConfig('note/browser', siderBarOptions)
    }
  ]
}
module.exports = {
 title: '小强解忧杂货铺', 
 base: '/',
 description: '那一年只追逐自由，现在只能追逐着学不完的知识。',
 head: [
   ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
 ],
 theme:'reco',
 markdown: {
   lineNumbers: false // 代码块显示行号
 },
 themeConfig: {
   type: 'blog',
   smoothScroll: false,
   modePicker: false,
   authorAvatar: '/avatar.jpeg',
   logo: '/logo.jpeg',
   // 搜索设置
   search: true,
   searchMaxSuggestions: 10,
   // 最后更新时间
   lastUpdated: false,
   // 项目开始时间
   startYear: '2021',
   subSidebar: 'auto',
   // 博客配置
   nav: nav,
   sidebar: sidebar
  }
}

