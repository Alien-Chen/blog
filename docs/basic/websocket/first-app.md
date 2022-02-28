---
sidebarDepth: 2
title: '第一个Websocket应用'
tags:
  - websoket
---

俗话说得好，实践才能出真章。以下是我在学习websocket的实践应用，以此来巩固知识点。 该应用一个简易的聊天工具，这里需要开发服务端和客户端，我是先开发服务端。

## 开发WebSocket服务端

### 前期的文档阅读
1. [客户端侧，需要阅读](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket)
2. [服务端侧，需要阅读](https://www.npmjs.com/package/ws)

### 一、新建目录
首先我们先创建一个空白目录，在里边创建一个server（顺便创建一个client目录）文件夹存放服务端代码，并且进入到server文件夹中。
```shell
├── chat
   ├── client (客户端代码)
   │     
   ├── server 服务端代码
```
### 二、客户端服务端创建连接

1. `npm install -S ws`
   
2. 在server目录下创建一个index.js 引入 ws，逻辑如下
   ```js
   const WebSocket = require('ws')

   // 实例化 websocket 然后监听端口 3000
   const wss = new WebSocket.Server({ port: 3000 })

   // 监听 connection 事件，有新的链接链接过来的时候，执行某些逻辑
   wss.on('connection', function connection (ws) {
     // ws 链接过来的客户端
    console.log('one client is connected')
   })
   ```
   然后 执行 `node index.js`
3. 进入到 client目录中创建一个 index.html 文件，连接我们的服务端
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
   </head>
   <body>
     <!-- 链接 websocket的方法 -->
     <script>
       var ws = new WebSocket('ws://127.0.0.1:3000')
     </script>
   </body>
   </html>
   ```
   打开页面就可以看到，server的终端打印出 `one client is connected` 这样就连接成功。
   > tip: 一个服务端可以去连接多个客户端，也可以发送信息给多个客户端
   
### 三、服务端客户端互发消息
1. 客户端
   ```js
   var ws = new WebSocket('ws://127.0.0.1:3000')
    // 连接成功执行的回调
    ws.onopen = function () {
      ws.send("Hello server!");
    }
    // 接收服务端发送过来的消息
    ws.onmessage = function(event) {
      console.log(event.data)
    }
   ```
2. 服务端
   ```js
   const WebSocket = require('ws')

   // 实例化 websocket 然后监听端口 3000
   const wss = new WebSocket.Server({ port: 3000 })

   // 监听 connection 事件，有新的链接链接过来的时候，执行某些逻辑
   wss.on('connection', function connection (ws) {
     // ws 链接过来的客户端
    console.log('one client is connected')
    
    // 接受客户端发送过来的消息
     ws.on('message', function (msg) {
       console.log(msg)
     })
    // 主动发送消息给客户端
     ws.send('服务端发送过来的消息')
   })
   ```


## socket.io 开发简单消息应用
### 初始化项目
  1. 创建一个socket.io-chat目录
  2. 进入到目录中，对项目进行初始化`npm init -y`
  3. `npm install -S socket.io`
  4. 还需要配合web服务 koa，`npm install -S koa` 
  5. 有用到 koa路由 所以需要安装koa-router，`npm install -S koa-router`
  6. 根目录下面创建一个 index.html
  7. 新建server.js，引入koa开始编写逻辑
```js
const Koa = require('koa')
const fs = require('fs')
const Http = require('http')
const Router = require('koa-router')
const app = new Koa()
const server = Http.createServer(app.callback())
const io = require('socket.io')(server)
const router = new Router()
router.get('/', function (ctx, next) {
 const html = fs.readFileSync('index.html', 'utf8')
 ctx.body = html
 next()
})
app.use(router.routes(), router.allowedMethods())

server.listen(3000, function () {
 console.log('服务跑在 3000 端口上')
})
```

