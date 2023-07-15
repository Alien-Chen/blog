---
sidebarDepth: 2
title: 'CRM平台构建速度优化篇'
tags: 
  - 打包
  - 构建速度
  - webpack
  - 性能优化
---

优化起因项目的编译和构建速度特别的慢长达166596ms，两分多钟，这样的开发体验不好，所以有了本次优化。

优化前我们可以借助 `speed-measure-webpack-plugin` 分析我们的打包速度。我们可以看到哪一块的打包时间过长我们具体去优化。 由于本项目页面较多所以打包时间过长。

1. 开启多线程运行loader,thread-loader

安装
```
npm install --save-dev thread-loader
```

使用，在需要开启线程的 loader之前 加上 tread-loader，如下：
```
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve('src'),
        use: [
          "thread-loader",
          // 耗时的 loader （例如 babel-loader）
        ],
      },
    ],
  },
};
```
打包成果，未开启多线程时间：166596ms 开启多线程：152348ms，快了10s

2. 使用动态链接库 dll

第三方库以 node_modules 为代表，它们庞大得可怕，却又不可或缺。每次构建时都会重新构建一次 vendor；出于对效率的考虑，我们更多是使用 DllPlugin。

DllPlugin 是基于 Windows 动态链接库（dll）的思想被创作出来的。这个插件会把第三方库单独打包到一个文件中，这个文件就是一个单纯的依赖库。这个依赖库不会跟着你的业务代码一起被重新打包，只有当依赖自身发生版本变化时才会重新打包。

用 DllPlugin 处理文件，要分两步走：

* 基于 dll 专属的配置文件，打包 dll 库
* 基于 webpack.config.js 文件，打包业务代码

以下是我在项目中的使用：
```
const webpack = require('webpack')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const dllPath = path.resolve(__dirname, '../dist') // dll文件存放的目录

const dllPath = path.resolve(__dirname, "../src/assets/dll");

process.env.NODE_ENV = 'production' // NODE_ENV 设置为 production 减少依赖

module.exports = {
  entry: {    // 把 vue 相关模块的放到一个单独的动态链接库
    vendor: [
      'babel-polyfill',
      // 'vue',
      // 'vue-router',
      'vuex',
      // 'axios',
      // 'element-ui',
      'vue-ueditor-wrap',
      // 'echarts',
      'vue-grid-layout',
      'lodash',
      'clipboard',
      'dayjs',
      'element-china-area-data',
      'js-cookie',
      'moment',
      // 'v-charts',
      'vuedraggable',
      'vue-clipboard2',
      'el-tree-transfer',
      'fb-ui-component'
    ]
  },
  output: {
    filename: '[name].js', // 生成vue.dll.js
    path: dllPath,
    library: '[name]_[hash]'
  },
  plugins: [    
    new CleanWebpackPlugin( { // 清除之前的dll文件
      cleanOnceBeforeBuildPatterns: [
        '*.js',
      ],
      root: dllPath
    }),
    new webpack.DllPlugin({
      name: '[name]_[hash]',      // manifest.json 描述动态链接库包含了哪些内容
      path: path.join(__dirname, "./", '[name]-manifest.json')
    })
  ]
}

```
在需要使用的环境中配置dll插件如下
```
// 引用 manifest.json
new webpack.DllReferencePlugin({
    context: __dirname,
    manifest: require('./vendor-manifest.json')
}),       
```

执行 npm run dll 也就是运行这个config文件，会得到一个 vendor-manifest.json

通过以上配置打包后 速度从 152348ms 优化到 99967ms。又快了50s

3. 引入 HardSourceWebpackPlugin 缓存打包结果

```
 new HardSourceWebpackPlugin({
    // cacheDirectory是在高速缓存写入。默认情况下，将缓存存储在node_modules下的目录中
    // 'node_modules/.cache/hard-source/[confighash]'
    cacheDirectory: path.join(__dirname, './lib/.cache/hard-source/[confighash]'),
    // configHash在启动webpack实例时转换webpack配置，
    // 并用于cacheDirectory为不同的webpack配置构建不同的缓存
    configHash: function(webpackConfig) {
    // node-object-hash on npm can be used to build this.
    return require('node-object-hash')({sort: false}).hash(webpackConfig);
    },
    // 当加载器、插件、其他构建时脚本或其他动态依赖项发生更改时，
    // hard-source需要替换缓存以确保输出正确。
    // environmentHash被用来确定这一点。如果散列与先前的构建不同，则将使用新的缓存
    environmentHash: {
    root: process.cwd(),
    directories: [],
    files: ['package-lock.json', 'yarn.lock'],
    },
    // An object. 控制来源
    info: {
    // 'none' or 'test'.
    mode: 'none',
    // 'debug', 'log', 'info', 'warn', or 'error'.
    level: 'debug',
    },
    // Clean up large, old caches automatically.
    cachePrune: {
    // Caches younger than `maxAge` are not considered for deletion. They must
    // be at least this (default: 2 days) old in milliseconds.
    maxAge: 2 * 24 * 60 * 60 * 1000,
    // All caches together must be larger than `sizeThreshold` before any
    // caches will be deleted. Together they must be at least this
    // (default: 50 MB) big in bytes.
    sizeThreshold: 50 * 1024 * 1024
    },
    }),
    new HardSourceWebpackPlugin.ExcludeModulePlugin([
    {
    test: /.*\.DS_Store/
    }
    ]),
```
打包结果第一次构建速度 99967ms，第二次构建速度为 20486ms。相比于原来第一次构建速度提升了40%，第二次构建提升了87%














