(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{536:function(s,n,a){"use strict";a.r(n);var e=a(2),l=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("优化起因项目的编译和构建速度特别的慢长达166596ms，两分多钟，这样的开发体验不好，所以有了本次优化。")]),s._v(" "),n("p",[s._v("优化前我们可以借助 "),n("code",[s._v("speed-measure-webpack-plugin")]),s._v(" 分析我们的打包速度。我们可以看到哪一块的打包时间过长我们具体去优化。 由于本项目页面较多所以打包时间过长。")]),s._v(" "),n("ol",[n("li",[s._v("开启多线程运行loader,thread-loader")])]),s._v(" "),n("p",[s._v("安装")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("npm install --save-dev thread-loader\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("使用，在需要开启线程的 loader之前 加上 tread-loader，如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("module.exports = {\n  module: {\n    rules: [\n      {\n        test: /\\.js$/,\n        include: path.resolve('src'),\n        use: [\n          \"thread-loader\",\n          // 耗时的 loader （例如 babel-loader）\n        ],\n      },\n    ],\n  },\n};\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("p",[s._v("打包成果，未开启多线程时间：166596ms 开启多线程：152348ms，快了10s")]),s._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[s._v("使用动态链接库 dll")])]),s._v(" "),n("p",[s._v("第三方库以 node_modules 为代表，它们庞大得可怕，却又不可或缺。每次构建时都会重新构建一次 vendor；出于对效率的考虑，我们更多是使用 DllPlugin。")]),s._v(" "),n("p",[s._v("DllPlugin 是基于 Windows 动态链接库（dll）的思想被创作出来的。这个插件会把第三方库单独打包到一个文件中，这个文件就是一个单纯的依赖库。这个依赖库不会跟着你的业务代码一起被重新打包，只有当依赖自身发生版本变化时才会重新打包。")]),s._v(" "),n("p",[s._v("用 DllPlugin 处理文件，要分两步走：")]),s._v(" "),n("ul",[n("li",[s._v("基于 dll 专属的配置文件，打包 dll 库")]),s._v(" "),n("li",[s._v("基于 webpack.config.js 文件，打包业务代码")])]),s._v(" "),n("p",[s._v("以下是我在项目中的使用：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("const webpack = require('webpack')\nconst path = require('path')\nconst { CleanWebpackPlugin } = require('clean-webpack-plugin')\n// const dllPath = path.resolve(__dirname, '../dist') // dll文件存放的目录\n\nconst dllPath = path.resolve(__dirname, \"../src/assets/dll\");\n\nprocess.env.NODE_ENV = 'production' // NODE_ENV 设置为 production 减少依赖\n\nmodule.exports = {\n  entry: {    // 把 vue 相关模块的放到一个单独的动态链接库\n    vendor: [\n      'babel-polyfill',\n      // 'vue',\n      // 'vue-router',\n      'vuex',\n      // 'axios',\n      // 'element-ui',\n      'vue-ueditor-wrap',\n      // 'echarts',\n      'vue-grid-layout',\n      'lodash',\n      'clipboard',\n      'dayjs',\n      'element-china-area-data',\n      'js-cookie',\n      'moment',\n      // 'v-charts',\n      'vuedraggable',\n      'vue-clipboard2',\n      'el-tree-transfer',\n      'fb-ui-component'\n    ]\n  },\n  output: {\n    filename: '[name].js', // 生成vue.dll.js\n    path: dllPath,\n    library: '[name]_[hash]'\n  },\n  plugins: [    \n    new CleanWebpackPlugin( { // 清除之前的dll文件\n      cleanOnceBeforeBuildPatterns: [\n        '*.js',\n      ],\n      root: dllPath\n    }),\n    new webpack.DllPlugin({\n      name: '[name]_[hash]',      // manifest.json 描述动态链接库包含了哪些内容\n      path: path.join(__dirname, \"./\", '[name]-manifest.json')\n    })\n  ]\n}\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br")])]),n("p",[s._v("在需要使用的环境中配置dll插件如下")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// 引用 manifest.json\nnew webpack.DllReferencePlugin({\n    context: __dirname,\n    manifest: require('./vendor-manifest.json')\n}),       \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("执行 npm run dll 也就是运行这个config文件，会得到一个 vendor-manifest.json")]),s._v(" "),n("p",[s._v("通过以上配置打包后 速度从 152348ms 优化到 99967ms。又快了50s")]),s._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[s._v("引入 HardSourceWebpackPlugin 缓存打包结果")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(" new HardSourceWebpackPlugin({\n    // cacheDirectory是在高速缓存写入。默认情况下，将缓存存储在node_modules下的目录中\n    // 'node_modules/.cache/hard-source/[confighash]'\n    cacheDirectory: path.join(__dirname, './lib/.cache/hard-source/[confighash]'),\n    // configHash在启动webpack实例时转换webpack配置，\n    // 并用于cacheDirectory为不同的webpack配置构建不同的缓存\n    configHash: function(webpackConfig) {\n    // node-object-hash on npm can be used to build this.\n    return require('node-object-hash')({sort: false}).hash(webpackConfig);\n    },\n    // 当加载器、插件、其他构建时脚本或其他动态依赖项发生更改时，\n    // hard-source需要替换缓存以确保输出正确。\n    // environmentHash被用来确定这一点。如果散列与先前的构建不同，则将使用新的缓存\n    environmentHash: {\n    root: process.cwd(),\n    directories: [],\n    files: ['package-lock.json', 'yarn.lock'],\n    },\n    // An object. 控制来源\n    info: {\n    // 'none' or 'test'.\n    mode: 'none',\n    // 'debug', 'log', 'info', 'warn', or 'error'.\n    level: 'debug',\n    },\n    // Clean up large, old caches automatically.\n    cachePrune: {\n    // Caches younger than `maxAge` are not considered for deletion. They must\n    // be at least this (default: 2 days) old in milliseconds.\n    maxAge: 2 * 24 * 60 * 60 * 1000,\n    // All caches together must be larger than `sizeThreshold` before any\n    // caches will be deleted. Together they must be at least this\n    // (default: 50 MB) big in bytes.\n    sizeThreshold: 50 * 1024 * 1024\n    },\n    }),\n    new HardSourceWebpackPlugin.ExcludeModulePlugin([\n    {\n    test: /.*\\.DS_Store/\n    }\n    ]),\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br")])]),n("p",[s._v("打包结果第一次构建速度 99967ms，第二次构建速度为 20486ms。相比于原来第一次构建速度提升了40%，第二次构建提升了87%")])])}),[],!1,null,null,null);n.default=l.exports}}]);