(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{604:function(t,s,a){"use strict";a.r(s);var n=a(17),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1、在移动端-出现点击穿透"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、在移动端-出现点击穿透"}},[t._v("#")]),t._v(" 1、在移动端，出现点击穿透？")]),t._v(" "),a("p",[t._v("点击穿透现象有3种。")]),t._v(" "),a("ul",[a("li",[t._v("蒙版层点击穿透问题：点击蒙版层（mask）上的“关闭”按钮，蒙版层消失后，发现触发按钮下面元素的click事件。")]),t._v(" "),a("li",[t._v("页面点击穿透问题：如果按钮下方恰好是一个有href属性的a标签，那么点击按钮页面就会发生跳转。")]),t._v(" "),a("li",[t._v("跨页面点击穿透问题：这次没有蒙版了，直接点击业内按钮跳转至新页面，然后发现新页面中对应位置元素的click事件也被触发。")])]),t._v(" "),a("p",[t._v("有4种解决方案：")]),t._v(" "),a("h3",{attrs:{id:"_1-只用touch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-只用touch"}},[t._v("#")]),t._v(" （1）只用touch")]),t._v(" "),a("p",[t._v("这是最简单的解决方案，完美的解决点击穿透的问题，把页面中所有的click事件都换成touch事件（touchstart，touched，tap）。")]),t._v(" "),a("h3",{attrs:{id:"_2-只用click"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-只用click"}},[t._v("#")]),t._v(" （2）只用click")]),t._v(" "),a("p",[t._v("因为点击会带来300ms的延迟，所以页面内任何一个自定义交互都将增加300ms延迟。")]),t._v(" "),a("h3",{attrs:{id:"_3-添加pointer-events-none样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-添加pointer-events-none样式"}},[t._v("#")]),t._v(" （3）添加pointer-events:none样式")]),t._v(" "),a("p",[t._v("着比较麻烦且有缺陷，不建议使用。蒙层隐藏后，给按钮下面的元素添pointer-events:none样式，让 click穿过去，350ms后去掉这个样式。恢复响应的缺陷是蒙层消失后的350ms内，用户单击按钮下面的元素没反应，如果用户单击速度很快，一定会发现。")]),t._v(" "),a("h3",{attrs:{id:"_4-轻触tap-后延迟350ms再隐藏蒙版层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-轻触tap-后延迟350ms再隐藏蒙版层"}},[t._v("#")]),t._v(" （4）轻触tap 后延迟350ms再隐藏蒙版层")]),t._v(" "),a("p",[t._v("改动最小，缺点是隐藏蒙层变慢了，350ms还是能感觉到慢的。")]),t._v(" "),a("h2",{attrs:{id:"_2、实现自适应布局的方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、实现自适应布局的方案"}},[t._v("#")]),t._v(" 2、实现自适应布局的方案")]),t._v(" "),a("p",[t._v("通过以下几种方式实现。")]),t._v(" "),a("p",[t._v("（1）可以使用媒体查询做响应式页面")]),t._v(" "),a("p",[t._v("（2）用Bootstrap的栅格系统")]),t._v(" "),a("p",[t._v("（3）Flexible方案 （推荐）"),a("a",{attrs:{href:"https://juejin.cn/post/6894044091836563469#heading-2",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文章"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"_3、解决android浏览器查看背景图片模糊的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、解决android浏览器查看背景图片模糊的问题"}},[t._v("#")]),t._v(" 3、解决Android浏览器查看背景图片模糊的问题？")]),t._v(" "),a("p",[t._v("这个问题是 devicePixelRatio的不同导致的，因为手机分辨率太小，如果按照分辨率来显示网页，字会非常小，所以苹果系统当初就把 iPhone4的960×640像素的分辨率在网页里更改为480×320像素，这样 devicePixelRatio=2。")]),t._v(" "),a("p",[t._v("而 Android的 device PixelRatio比较乱，值有1.5、2和3。")]),t._v(" "),a("p",[t._v("为了在手机里更为清晰地显示图片，必须使用2倍宽高的背景图来代替img标签（一般情况下都使用2倍）。")]),t._v(" "),a("p",[t._v("例如一个div的宽高是100px×100px，背景图必须是200px×200px，然后设置 background-size;contain样式，显示出来的图片就比较清晰了。")]),t._v(" "),a("h2",{attrs:{id:"_4、解决长时间按住页面出现闪退的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、解决长时间按住页面出现闪退的问题"}},[t._v("#")]),t._v(" 4、解决长时间按住页面出现闪退的问题")]),t._v(" "),a("p",[t._v("通过以下代码设置样式")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("element")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-touch-callout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"_5、解决iphone及ipad下输入框的默认内阴影问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、解决iphone及ipad下输入框的默认内阴影问题"}},[t._v("#")]),t._v(" 5、解决iphone及ipad下输入框的默认内阴影问题")]),t._v(" "),a("p",[t._v("通过以下代码设置样式")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("element")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-appearance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"_6、在ios和android下-如何实现触摸元素时出现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、在ios和android下-如何实现触摸元素时出现"}},[t._v("#")]),t._v(" 6、在IOS和Android下，如何实现触摸元素时出现")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("element")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-tap-highlight-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgba")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("255"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 255"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 255"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"_7、在旋转屏幕时-如何解决字体大小自动调整的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7、在旋转屏幕时-如何解决字体大小自动调整的问题"}},[t._v("#")]),t._v(" 7、在旋转屏幕时，如何解决字体大小自动调整的问题")]),t._v(" "),a("p",[t._v("通过设置以下代码样式")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("html, body, form, fieldset, p, div, hl, h2， h3， h4， h5， h6")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t-webkit-text-size-adjust：100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"_8、如何解决-android手机圆角失效的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8、如何解决-android手机圆角失效的问题"}},[t._v("#")]),t._v(" 8、如何解决 Android手机圆角失效的问题")]),t._v(" "),a("p",[t._v("通过设置以下代码样式,来为失效的元素设置样式")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-clip")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" padding-box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"_9、如何解决ios中键盘事件keyup失效问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9、如何解决ios中键盘事件keyup失效问题"}},[t._v("#")]),t._v(" 9、如何解决IOS中键盘事件keyup失效问题")]),t._v(" "),a("p",[t._v("通过以下代码解决")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("testInput"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/javascript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n\tdocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getElementById（"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'testInput'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("addEventListener（"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'input'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("；\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h2",{attrs:{id:"_10、如何解决ios设置中input按钮样式会被默认样式覆盖的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10、如何解决ios设置中input按钮样式会被默认样式覆盖的问题"}},[t._v("#")]),t._v(" 10、如何解决IOS设置中input按钮样式会被默认样式覆盖的问题")]),t._v(" "),a("p",[t._v("设置默认样式为none，解决方式如下")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("input,\ntextarea")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-appearance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"_11、如何解决通过transform进行skew变形、rotate旋转出现锯齿状现象的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11、如何解决通过transform进行skew变形、rotate旋转出现锯齿状现象的问题"}},[t._v("#")]),t._v(" 11、如何解决通过transform进行skew变形、rotate旋转出现锯齿状现象的问题")]),t._v(" "),a("p",[t._v("通过以下代码设置样式")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("rotate（-4deg） skew（10deg） translateZ（0）；\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("rotate（-4deg） skew（10deg） translateZ（0）"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("outline")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("lpx solid rgba（255， 255， 255， 0）"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"_12、解决移动端-click事件有300ms延迟的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12、解决移动端-click事件有300ms延迟的问题"}},[t._v("#")]),t._v(" 12、解决移动端 click事件有300ms延迟的问题")]),t._v(" "),a("p",[t._v("300ms延迟导致用户体验不好。为了解决这个问题，一般在移动端用 touchstart、 touchend、 touchmove、tap（模拟的事件）事件来取代 click事件。")]),t._v(" "),a("h2",{attrs:{id:"_13、在ios中-以中文输入法输入英文时-如何解决字母之间可能会出现六分之一空格的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13、在ios中-以中文输入法输入英文时-如何解决字母之间可能会出现六分之一空格的问题"}},[t._v("#")]),t._v(" 13、在iOS中，以中文输入法输入英文时，如何解决字母之间可能会出现六分之一空格的问题")]),t._v(" "),a("p",[t._v("可以用正则表达式去掉空格")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" \\u2006"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("g，"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"_14、解决移动端html5音频标签audio的-autoplay属性失效问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_14、解决移动端html5音频标签audio的-autoplay属性失效问题"}},[t._v("#")]),t._v(" 14、解决移动端HTML5音频标签audio的 autoplay属性失效问题")]),t._v(" "),a("p",[t._v("因为自动播放网页中的音频或视频会给用户带来一些困扰或者不必要的流量消耗，所以苹果系统和 Android系统通常都会禁止自动播放和使用 JavaScript的触发播放，必须由用户来触发才可以播放。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("document "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'touchstart'")]),t._v("， "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//播放音频")]),t._v("\n    document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByTagName")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'audio'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("play")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("；\n")])])]),a("h2",{attrs:{id:"_15、解决上下拖动滚动条时的卡顿问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_15、解决上下拖动滚动条时的卡顿问题"}},[t._v("#")]),t._v(" 15、解决上下拖动滚动条时的卡顿问题")]),t._v(" "),a("p",[t._v("通过以下代码设置样式")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("body")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-overflow-scrolling")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("touch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow-scrolling")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("touch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"_16、禁止复制或选中文本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_16、禁止复制或选中文本"}},[t._v("#")]),t._v(" 16、禁止复制或选中文本")]),t._v(" "),a("p",[t._v("通过以下代码设置样式")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("Element")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-user-select")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-moz-user-select")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-khtml-user-select")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("user-select")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);