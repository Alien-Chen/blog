(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{531:function(s,n,e){"use strict";e.r(n);var a=e(2),t=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"录制时机"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#录制时机"}},[s._v("#")]),s._v(" 录制时机")]),s._v(" "),n("p",[s._v("首先开始录制之前我们需要知道，什么时候需要开始录制，什么时候要结束录制。龙易保中的录制一般是一整个流程的录制，所以我们需要定义一个配置文件来配置每个具体需要录制的业务流程涉及的页面。当路由跳转进入到新页面的时候，我们需要在全局的路由守卫中去拦截，根据我们上面提到的业务线配置文件来判断是否需要录制，现在我们就可以知道什么时候需要开始录制了。当路由准备跳转到其他页面的时候，也就是我们在前置守卫中需要进行判断如果即将跳转的页面不在业务流程中，就是我们需要结束录制的时候了。还有一点就是当用户强行刷新页面时我们也要进行结束录制，并进行最后一次上报录制数据。")]),s._v(" "),n("h2",{attrs:{id:"业务中的配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#业务中的配置文件"}},[s._v("#")]),s._v(" 业务中的配置文件")]),s._v(" "),n("p",[s._v("项目的业务线配置，创建一个config.js，业务线的key值用业务开始页面的pathName，paths中就存储业务线中所有page的pathName，内容如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("export default {\n 'zl.policy.policyEntryList': {    \n    'name': '在线投保',    \n    'paths': [    \n       'zl.policy.policyEntryList', \n       'zl.policy.home',\n       'zl.policy.productConfig',\n       'zl.policy.notice',\n       'zl.policy.payInfo',\n       'zl.policy.policyMsg',\n       'signDraw',\n       'zl.policy.checkResult'\n     ]\n  }\n};\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("现在我们就可以通过路口文件，拿到整个录制业务线的页面，进行开始或结束录制。")]),s._v(" "),n("h2",{attrs:{id:"前端录制代码实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前端录制代码实现"}},[s._v("#")]),s._v(" 前端录制代码实现")]),s._v(" "),n("p",[n("strong",[s._v("前置准备的依赖")]),s._v("\nVueX，uuid（生成唯一id），rrweb（用于录制页面），zip （用于压缩上报数据），创建一个libs/rrweb-record/index.js文件，进行以下代码输入：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("import recordConfig from './config'\nimport store from '@/stores'\nimport { v4 as uuidv4 } from 'uuid'\nimport * as rrweb from 'rrweb'\nimport { zip } from './util'\nlet timer = null\nlet events = []\nlet stopFn = null\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[n("strong",[s._v("全局后置路由守卫判断是否录制")])]),s._v(" "),n("p",[s._v("代码如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("router.afterEach((to, from) => {\n  // 业务可回溯 \n  recallRecord(to, from)\n})\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[n("strong",[s._v("RecallRecord的具体实现")])]),s._v(" "),n("p",[s._v("RecallRecord是判断是否开始录制的核心逻辑，在上面libs/rrweb-record/index.js编辑如下代码：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("export function recallRecord (to, from) {\n   // 当前页面的路由名称\n   const toRouteName = to.name \n   // 当前业务是否存在于业务线中\n   const hasBusiness = recordConfig[toRouteName]\n   // 获取vuex中的uuid\n   let uuid = store.state.rrweb.recordUuid\n   // 获取vuex中的文件index，用于按照上报顺序命名上报文件的时候用\n   let recordIndex = store.state.rrweb.recordIndex\n   // 获取vuex中的当前业务线数组\n   let businessPaths = store.state.rrweb.businessPaths\n   // 获取vuex中当前业务线名称\n   let businessName = store.state.rrweb.businessName\n   //判断是否是结束页面\n   let isEndBusiness = businessPaths.indexOf(toRouteName) === businessPaths.length - 1\n   if (businessPaths.length > 0) {\n     // 判断当前页面是否在业务线中\n     const isBusiness = businessPaths.indexOf(toRouteName) >= 0;\n     if (isBusiness) {\n       // 存在于业务线中，可以开始录制\n       handlerRecord()\n     }\n     if (isEndBusiness) {\n       // 如果是结束页面，则录制一段时间就停止录制\n     }\n     if (hasBusiness) {\n       if (!businessName) {\n        // 有这个业务线，并且当前store中还没有存，代表第一次进来，需要生成唯一uuid和index\n        uuid = uuidv4()\n        recordIndex = 0\n        businessName = toRouteName\n        businessPaths = recordConfig[businessName].paths    store.commit('rrweb/SET_UUID', uuid)\n        store.commit('rrweb/SET_RECORDINDEX', recordIndex)  store.commit('rrweb/SET_BUSSINESSPATHS',businessPaths);\n        store.commit('rrweb/SET_BUSINESSNAME', businessName)     \n        handlerRecord()\n        }\n        // 页面强制关闭时，进行上报处理  \n        window.onbeforeunload = function (e) {\n          var e = window.event || e\n          // e.returnValue = '确认关闭页面吗？'\n          saveRrweb()\n        }\n      }\n    }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br")])]),n("p",[s._v("上述代码的具体逻辑思路为若vuex中的businessName或businessPaths存在的话说明当前又在录制，若不存在并且进入到了录制页面则开始录制，并且声称recordId，recordIndex 和当前businessName（业务名称）和businessPaths（业务线的相关数组）")]),s._v(" "),n("p",[n("strong",[s._v("SaveRrweb的具体实现")])]),s._v(" "),n("p",[s._v("SaveRrweb是用来上报回溯数据用的，具体实现如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("function saveRrweb () {\n  const body = JSON.stringify({ events })\n  events = []\n  const year = new Date().getFullYear()\n  const month = new Date().getMonth() + 1\n  const day = new Date().getDate()\n  const username = store.state.user.username\n  const recordId = store.state.rrweb.recordUuid\n  const index = store.state.rrweb.recordIndex\n  // 回溯数据的存放目录,  \n  const fileName = `${year}/${month}/${day}/${username}/${recordId}/${index}.txt`\n  store.commit('rrweb/SET_RECORDINDEX', index + 1)\n  // console.log('zzz Events', body)\n  uploadFileAPI({\n     Key: fileName, /* 存储在桶里的对象键（例如1.jpg，a/b/test.txt），必须字段 */\n      Body: zip(body)\n  },function (err, data) {console.log(err || data)}\n)}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("p",[n("strong",[s._v("HandlerRecord的具体实现")])]),s._v(" "),n("p",[s._v("这个方法是用来启动录制的，rrweb实例返回一个可停止录制的函数，具体实现如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("function handlerRecord () {\n  if (stopFn) return\n  try {\n    stopFn = rrweb.record({\n     emit (event, isCheckout) {    \n        events.push(event)     \n      },\n       ecordCanvas: true,\n       // 默认每10s重新制作快照\n       checkoutEveryNms: 1000 * 10\n      })\n     timer = setInterval(saveRrweb, 10 * 1000)\n   } catch (error) {// 录制错误 }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[n("strong",[s._v("结束录制的的具体实现")])]),s._v(" "),n("p",[s._v("在全局的前置路由守卫中调用这个结束录制的方法，如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(" router.beforeEach((to, from, next) => {\n   // 结束业务可回溯\n   endRecallRecord(to, from)\n })\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[n("strong",[s._v("endRecallRecord 具体实现")])]),s._v(" "),n("p",[s._v("思路判断是否是结束页面，如果要跳转的页面不是业务线里的页面或者当前页面是结束页面的话就调用stopFn结束录制，然后重置 vuex中相关参数")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("export function endRecallRecord (to, from) {\n const toRouteName = to.name\n const fromRouteName = from.name\n let uuid = store.state.rrweb.recordUuid\n let recordIndex = store.state.rrweb.recordIndex\n let businessPaths = store.state.rrweb.businessPaths\n let businessName = store.state.rrweb.businessName\n if (businessName) {\n   const isNextBusiness = businessPaths.indexOf(toRouteName) >= 0\n   const isEndBusiness = businessPaths.indexOf(fromRouteName) === businessPaths.length - 1\n   if (isEndBusiness || !isNextBusiness) {\n     // 是否为业务结束页 或 非业务中的页面，如果是提交完数据,      if (stopFn) {\n       stopFn()\n       if (events.length > 0) {\n         saveRrweb()\n        }\n      }\n      store.commit('rrweb/SET_UUID', '')\n      store.commit('rrweb/SET_RECORDINDEX', 0)\n      store.commit('rrweb/SET_BUSSINESSPATHS', [])     store.commit('rrweb/SET_BUSINESSNAME', '')     clearInterval(timer)\n      timer = null\n      stopFn = null\n     }\n    }\n   }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])]),n("h2",{attrs:{id:"后台回放逻辑"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#后台回放逻辑"}},[s._v("#")]),s._v(" 后台回放逻辑")]),s._v(" "),n("p",[s._v("如果后端通过所有的录制内容放到一个数组中进行 new rrweb.Replayer(events) 回放的话，视频会非常的卡顿，页面还会崩溃这根本没有办法看。前端的解决方法是因为每一个业务线的视频录制中是按照提交顺序为文件名的，这样一来我们可以按照文件顺序依次来播放就可以了。但是最稳妥的方法还是将这些json转换为视频保存起来稳妥。所以和后端商量决定在服务端运行无头浏览器，在无头浏览器中回放数据，然后按秒截取一定数量的图片，最后通过ffmpeg合成视频。")])])}),[],!1,null,null,null);n.default=t.exports}}]);