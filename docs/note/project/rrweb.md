---
sidebarDepth: 2
title: 'Rrweb落地龙易保具体实现'
tags: 
  - rrweb
  - 可回溯
---

## 录制时机

首先开始录制之前我们需要知道，什么时候需要开始录制，什么时候要结束录制。龙易保中的录制一般是一整个流程的录制，所以我们需要定义一个配置文件来配置每个具体需要录制的业务流程涉及的页面。当路由跳转进入到新页面的时候，我们需要在全局的路由守卫中去拦截，根据我们上面提到的业务线配置文件来判断是否需要录制，现在我们就可以知道什么时候需要开始录制了。当路由准备跳转到其他页面的时候，也就是我们在前置守卫中需要进行判断如果即将跳转的页面不在业务流程中，就是我们需要结束录制的时候了。还有一点就是当用户强行刷新页面时我们也要进行结束录制，并进行最后一次上报录制数据。

## 业务中的配置文件

项目的业务线配置，创建一个config.js，业务线的key值用业务开始页面的pathName，paths中就存储业务线中所有page的pathName，内容如下：

```
export default {
 'zl.policy.policyEntryList': {    
    'name': '在线投保',    
    'paths': [    
       'zl.policy.policyEntryList', 
       'zl.policy.home',
       'zl.policy.productConfig',
       'zl.policy.notice',
       'zl.policy.payInfo',
       'zl.policy.policyMsg',
       'signDraw',
       'zl.policy.checkResult'
     ]
  }
};
```
现在我们就可以通过路口文件，拿到整个录制业务线的页面，进行开始或结束录制。

## 前端录制代码实现
  **前置准备的依赖**
  VueX，uuid（生成唯一id），rrweb（用于录制页面），zip （用于压缩上报数据），创建一个libs/rrweb-record/index.js文件，进行以下代码输入：
  ```
  import recordConfig from './config'
  import store from '@/stores'
  import { v4 as uuidv4 } from 'uuid'
  import * as rrweb from 'rrweb'
  import { zip } from './util'
  let timer = null
  let events = []
  let stopFn = null
  ```

  **全局后置路由守卫判断是否录制**

  代码如下：
  ```
  router.afterEach((to, from) => {
    // 业务可回溯 
    recallRecord(to, from)
  })
  ```

  **RecallRecord的具体实现**

  RecallRecord是判断是否开始录制的核心逻辑，在上面libs/rrweb-record/index.js编辑如下代码：

  ```
  export function recallRecord (to, from) {
     // 当前页面的路由名称
     const toRouteName = to.name 
     // 当前业务是否存在于业务线中
     const hasBusiness = recordConfig[toRouteName]
     // 获取vuex中的uuid
     let uuid = store.state.rrweb.recordUuid
     // 获取vuex中的文件index，用于按照上报顺序命名上报文件的时候用
     let recordIndex = store.state.rrweb.recordIndex
     // 获取vuex中的当前业务线数组
     let businessPaths = store.state.rrweb.businessPaths
     // 获取vuex中当前业务线名称
     let businessName = store.state.rrweb.businessName
     //判断是否是结束页面
     let isEndBusiness = businessPaths.indexOf(toRouteName) === businessPaths.length - 1
     if (businessPaths.length > 0) {
       // 判断当前页面是否在业务线中
       const isBusiness = businessPaths.indexOf(toRouteName) >= 0;
       if (isBusiness) {
         // 存在于业务线中，可以开始录制
         handlerRecord()
       }
       if (isEndBusiness) {
         // 如果是结束页面，则录制一段时间就停止录制
       }
       if (hasBusiness) {
         if (!businessName) {
          // 有这个业务线，并且当前store中还没有存，代表第一次进来，需要生成唯一uuid和index
          uuid = uuidv4()
          recordIndex = 0
          businessName = toRouteName
          businessPaths = recordConfig[businessName].paths    store.commit('rrweb/SET_UUID', uuid)
          store.commit('rrweb/SET_RECORDINDEX', recordIndex)  store.commit('rrweb/SET_BUSSINESSPATHS',businessPaths);
          store.commit('rrweb/SET_BUSINESSNAME', businessName)     
          handlerRecord()
          }
          // 页面强制关闭时，进行上报处理  
          window.onbeforeunload = function (e) {
            var e = window.event || e
            // e.returnValue = '确认关闭页面吗？'
            saveRrweb()
          }
        }
      }
  ```

  上述代码的具体逻辑思路为若vuex中的businessName或businessPaths存在的话说明当前又在录制，若不存在并且进入到了录制页面则开始录制，并且声称recordId，recordIndex 和当前businessName（业务名称）和businessPaths（业务线的相关数组）

  **SaveRrweb的具体实现**

  SaveRrweb是用来上报回溯数据用的，具体实现如下：

  ```
  function saveRrweb () {
    const body = JSON.stringify({ events })
    events = []
    const year = new Date().getFullYear()
    const month = new Date().getMonth() + 1
    const day = new Date().getDate()
    const username = store.state.user.username
    const recordId = store.state.rrweb.recordUuid
    const index = store.state.rrweb.recordIndex
    // 回溯数据的存放目录,  
    const fileName = `${year}/${month}/${day}/${username}/${recordId}/${index}.txt`
    store.commit('rrweb/SET_RECORDINDEX', index + 1)
    // console.log('zzz Events', body)
    uploadFileAPI({
       Key: fileName, /* 存储在桶里的对象键（例如1.jpg，a/b/test.txt），必须字段 */
        Body: zip(body)
    },function (err, data) {console.log(err || data)}
  )}
  ```

  **HandlerRecord的具体实现**

  这个方法是用来启动录制的，rrweb实例返回一个可停止录制的函数，具体实现如下：

  ```
  function handlerRecord () {
    if (stopFn) return
    try {
      stopFn = rrweb.record({
       emit (event, isCheckout) {    
          events.push(event)     
        },
         ecordCanvas: true,
         // 默认每10s重新制作快照
         checkoutEveryNms: 1000 * 10
        })
       timer = setInterval(saveRrweb, 10 * 1000)
     } catch (error) {// 录制错误 }
  ```
  **结束录制的的具体实现**

  在全局的前置路由守卫中调用这个结束录制的方法，如下：

  ```
   router.beforeEach((to, from, next) => {
     // 结束业务可回溯
     endRecallRecord(to, from)
   })
  ```

  **endRecallRecord 具体实现**

  思路判断是否是结束页面，如果要跳转的页面不是业务线里的页面或者当前页面是结束页面的话就调用stopFn结束录制，然后重置 vuex中相关参数

  ```
  export function endRecallRecord (to, from) {
   const toRouteName = to.name
   const fromRouteName = from.name
   let uuid = store.state.rrweb.recordUuid
   let recordIndex = store.state.rrweb.recordIndex
   let businessPaths = store.state.rrweb.businessPaths
   let businessName = store.state.rrweb.businessName
   if (businessName) {
     const isNextBusiness = businessPaths.indexOf(toRouteName) >= 0
     const isEndBusiness = businessPaths.indexOf(fromRouteName) === businessPaths.length - 1
     if (isEndBusiness || !isNextBusiness) {
       // 是否为业务结束页 或 非业务中的页面，如果是提交完数据,      if (stopFn) {
         stopFn()
         if (events.length > 0) {
           saveRrweb()
          }
        }
        store.commit('rrweb/SET_UUID', '')
        store.commit('rrweb/SET_RECORDINDEX', 0)
        store.commit('rrweb/SET_BUSSINESSPATHS', [])     store.commit('rrweb/SET_BUSINESSNAME', '')     clearInterval(timer)
        timer = null
        stopFn = null
       }
      }
     }
  ```

  ## 后台回放逻辑

  如果后端通过所有的录制内容放到一个数组中进行 new rrweb.Replayer(events) 回放的话，视频会非常的卡顿，页面还会崩溃这根本没有办法看。前端的解决方法是因为每一个业务线的视频录制中是按照提交顺序为文件名的，这样一来我们可以按照文件顺序依次来播放就可以了。但是最稳妥的方法还是将这些json转换为视频保存起来稳妥。所以和后端商量决定在服务端运行无头浏览器，在无头浏览器中回放数据，然后按秒截取一定数量的图片，最后通过ffmpeg合成视频。






  
