---
sidebarDepth: 2
title: 'Vuepress 新手指南针'
tags: 
  - vuepress vuepress-theme-reco
---

>
> 效果图预览  
> ![博客图片](../../assets/devops/vuepress/vuepress01.png)  

## 安装vuepress
[Vuepress中文网](https://vuepress.vuejs.org/zh/)

### 1. 初始化项目

进入需要创建博客项目的目录，输入以下命令
```shell
mkdir blog-start

cd blog-start

npm init

npm install -D vuepress
```

### 2. 在 package.json 中添加 脚本
```js
"scripts": {
  "docs:dev": "vuepress dev docs",
  "docs:build": "vuepress build docs"
}
```

## 安装vuepress-themem-reco
如果我们想要有美丽的主题来装饰我们的博客，我们可以借助这个主题库，[vuepress-theme-reco](https://vuepress-theme-reco.recoluan.com/)
```shell
npm install vuepress-theme-reco -D
```

## 创建文件目录结构（简单版本）
可以参考官网目录结构教学，[vuepress-目录结构指南](https://vuepress.vuejs.org/zh/guide/directory-structure.html#%E9%BB%98%E8%AE%A4%E7%9A%84%E9%A1%B5%E9%9D%A2%E8%B7%AF%E7%94%B1)

```shell
├── docs
│   ├── .vuepress
│   │   ├── public
│   │   │   │── avatar.png(头像)
│   │   │   └── bg.png(首页背景图)
│   │   └── config.js(博客配置)
│   ├── views
│   │   └── test\README.md(测试文章)
│   └── README.md(首页配置)
└── package.json
```

## 配置主题
这里只有包含一些基础配置，如果需要更多的配置可以去参考官网的[主题文档](https://vuepress-theme-reco.recoluan.com/views/1.x/configJs.html)

```js
const nav = []
const sidebar = {}
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
```

## 首页文章配置

docs/README.md
```md
---
home: true
bgImage: '/bg.jpeg'
bgImageStyle: {
  color: 'white'
}
---
```

## 子页面内容
docs/views/test/README.md
```md
---
title: 测试的文章
date: 2021-08-16 09:00:00
sidebar: auto
tags:
 - test
 - good
categories:
 - test page
---

Hello test
```

## 编译项目
```shell
npm run docs:dev

&&

npm run docs:build

```





