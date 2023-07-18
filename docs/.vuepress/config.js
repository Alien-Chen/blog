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
            link: '/devops/cicd/00.md'
          },
          {
            text: 'Circle CI',
            link: '/devops/cicd/01.md'
          },
          {
            text: '私有库搭建',
            link: '/devops/cicd/02.md'
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
    text: '前端手记',
    items: [
      {
        text: '实际项目相关',
        items: [
          {
            text: '权限管理体系',
            link: '/note/project/permission.md'
          },
          {
            text: 'Rrweb落地龙易保具体实现',
            link: '/note/project/rrweb.md'
          },
          {
            text: '低代码平台搭建(一)',
            link: '/note/project/lowCode.md'
          },
          {
            text: '低代码平台搭建(二)',
            link: '/note/project/lowCode02.md'
          },
          {
            text: '低代码(三)-可编程的动态表单',
            link: '/note/project/lowCode03.md'
          },
          {
            text: '低代码(四)-表单提交值的收集',
            link: '/note/project/lowCode04.md'
          },
          {
            text: '低代码(五)-动态表单的表单验证',
            link: '/note/project/lowCode05.md'
          },
          {
            text: 'CRM平台打包优化篇',
            link: '/note/project/pack01.md'
          },
          {
            text: '记录移动端兼容问题',
            link: '/note/project/compatibilityMobile.md'
          }
        ]
      },
      {
        text: '组件库相关',
        items: [
          {
            text: '组件库开发流程',
            link: '/note/component-lib/'
          }
        ]
      },
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
      },
      {
        text: 'NODE相关',
        items: [
          {
            text: 'koa中间件原理篇',
            link: '/note/node/'
          } 
        ]
      }
    ]
  },
  {
    text: '联系',
    icon: 'reco-message',
    items: [
      {text: 'GitHub', link: 'https://github.com/Alien-Chen', icon: 'reco-github'}
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

      title: '实际项目相关',
      collapsable: false,
      children: genSidebarConfig('note/project', siderBarOptions)
    },
    {
      title: '组件库相关',
      collapsable: false,
      children: genSidebarConfig('note/component-lib', siderBarOptions)
    },
    {
      title: '移动端相关',
      collapsable: false,
      children: genSidebarConfig('note/moblie', siderBarOptions)
    },
    {
      title: '浏览器相关',
      collapsable: false,
      children: genSidebarConfig('note/browser', siderBarOptions)
    },
    {
      title: 'NODE相关',
      collapsable: false,
      children: genSidebarConfig('note/node', siderBarOptions)
    }
  ]
}
module.exports = {
 title: '小强解忧杂货铺', 
 base: '/blog/',
 description: '那一年只追逐自由，现在只能追逐着学不完的知识。',
  head: [
   ["link", { rel: "icon", href: "/favicon.ico" }],
   ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
 ],
 theme:'reco',
 markdown: {
   lineNumbers: true // 代码块显示行号
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

   sidebar: sidebar,
   author: "陈小强"
  }
}

