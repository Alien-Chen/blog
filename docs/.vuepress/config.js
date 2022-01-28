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
    }
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
    }
  ]
}
module.exports = {
 title: '小强解忧杂货铺', 
 base: '/blog/',
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

