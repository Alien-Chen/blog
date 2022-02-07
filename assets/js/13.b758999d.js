(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{569:function(t,s,a){t.exports=a.p+"assets/img/vuepress01.32ed8e49.png"},600:function(t,s,a){"use strict";a.r(s);var r=a(13),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("blockquote",[r("p",[t._v("效果图预览"),r("br"),t._v(" "),r("img",{attrs:{src:a(569),alt:"博客图片"}})])]),t._v(" "),r("h2",{attrs:{id:"安装vuepress"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装vuepress"}},[t._v("#")]),t._v(" 安装vuepress")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuepress中文网"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"_1-初始化项目"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-初始化项目"}},[t._v("#")]),t._v(" 1. 初始化项目")]),t._v(" "),r("p",[t._v("进入需要创建博客项目的目录，输入以下命令")]),t._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" blog-start\n\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" blog-start\n\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" init\n\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -D vuepress\n")])])]),r("h3",{attrs:{id:"_2-在-package-json-中添加-脚本"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-在-package-json-中添加-脚本"}},[t._v("#")]),t._v(" 2. 在 package.json 中添加 脚本")]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"scripts"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"docs:dev"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress dev docs"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"docs:build"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress build docs"')]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),r("h2",{attrs:{id:"安装vuepress-themem-reco"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装vuepress-themem-reco"}},[t._v("#")]),t._v(" 安装vuepress-themem-reco")]),t._v(" "),r("p",[t._v("如果我们想要有美丽的主题来装饰我们的博客，我们可以借助这个主题库，"),r("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-theme-reco"),r("OutboundLink")],1)]),t._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" vuepress-theme-reco -D\n")])])]),r("h2",{attrs:{id:"创建文件目录结构-简单版本"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#创建文件目录结构-简单版本"}},[t._v("#")]),t._v(" 创建文件目录结构（简单版本）")]),t._v(" "),r("p",[t._v("可以参考官网目录结构教学，"),r("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/directory-structure.html#%E9%BB%98%E8%AE%A4%E7%9A%84%E9%A1%B5%E9%9D%A2%E8%B7%AF%E7%94%B1",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-目录结构指南"),r("OutboundLink")],1)]),t._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[t._v("├── docs\n│   ├── .vuepress\n│   │   ├── public\n│   │   │   │── avatar.png"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("头像"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n│   │   │   └── bg.png"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("首页背景图"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n│   │   └── config.js"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("博客配置"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n│   ├── views\n│   │   └── test"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("README.md"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("测试文章"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n│   └── README.md"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("首页配置"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n└── package.json\n")])])]),r("h2",{attrs:{id:"配置主题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置主题"}},[t._v("#")]),t._v(" 配置主题")]),t._v(" "),r("p",[t._v("这里只有包含一些基础配置，如果需要更多的配置可以去参考官网的"),r("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/views/1.x/configJs.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("主题文档"),r("OutboundLink")],1)]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" nav "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" sidebar "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nmodule"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("title")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'小强解忧杂货铺'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("base")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/blog/'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("description")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'那一年只追逐自由，现在只能追逐着学不完的知识。'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("head")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'meta'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'viewport'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("content")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'width=device-width,initial-scale=1,user-scalable=no'")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("theme")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'reco'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("markdown")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("lineNumbers")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 代码块显示行号")]),t._v("\n "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("themeConfig")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blog'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("smoothScroll")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("modePicker")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("authorAvatar")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/avatar.jpeg'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("logo")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/logo.jpeg'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 搜索设置")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("search")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("searchMaxSuggestions")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最后更新时间")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("lastUpdated")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 项目开始时间")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("startYear")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2021'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("subSidebar")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'auto'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 博客配置")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("nav")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" nav"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("sidebar")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" sidebar\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),r("h2",{attrs:{id:"首页文章配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#首页文章配置"}},[t._v("#")]),t._v(" 首页文章配置")]),t._v(" "),r("p",[t._v("docs/README.md")]),t._v(" "),r("div",{staticClass:"language-md extra-class"},[r("pre",{pre:!0,attrs:{class:"language-md"}},[r("code",[r("span",{pre:!0,attrs:{class:"token front-matter-block"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token front-matter yaml language-yaml"}},[t._v("home: true\nbgImage: '/bg.jpeg'\nbgImageStyle: {\n  color: 'white'\n}")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])])]),r("h2",{attrs:{id:"子页面内容"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#子页面内容"}},[t._v("#")]),t._v(" 子页面内容")]),t._v(" "),r("p",[t._v("docs/views/test/README.md")]),t._v(" "),r("div",{staticClass:"language-md extra-class"},[r("pre",{pre:!0,attrs:{class:"language-md"}},[r("code",[r("span",{pre:!0,attrs:{class:"token front-matter-block"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token front-matter yaml language-yaml"}},[t._v("title: 测试的文章\ndate: 2021-08-16 09:00:00\nsidebar: auto\ntags:\n - test\n - good\ncategories:\n - test page")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n\nHello test\n")])])]),r("h2",{attrs:{id:"编译项目"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#编译项目"}},[t._v("#")]),t._v(" 编译项目")]),t._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run docs:dev\n\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run docs:build\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);