(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{527:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1、在移动端-出现点击穿透"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、在移动端-出现点击穿透"}},[s._v("#")]),s._v(" 1、在移动端，出现点击穿透？")]),s._v(" "),t("p",[s._v("点击穿透现象有3种。")]),s._v(" "),t("ul",[t("li",[s._v("蒙版层点击穿透问题：点击蒙版层（mask）上的“关闭”按钮，蒙版层消失后，发现触发按钮下面元素的click事件。")]),s._v(" "),t("li",[s._v("页面点击穿透问题：如果按钮下方恰好是一个有href属性的a标签，那么点击按钮页面就会发生跳转。")]),s._v(" "),t("li",[s._v("跨页面点击穿透问题：这次没有蒙版了，直接点击业内按钮跳转至新页面，然后发现新页面中对应位置元素的click事件也被触发。")])]),s._v(" "),t("p",[s._v("有4种解决方案：")]),s._v(" "),t("h3",{attrs:{id:"_1-只用touch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-只用touch"}},[s._v("#")]),s._v(" （1）只用touch")]),s._v(" "),t("p",[s._v("这是最简单的解决方案，完美的解决点击穿透的问题，把页面中所有的click事件都换成touch事件（touchstart，touched，tap）。")]),s._v(" "),t("h3",{attrs:{id:"_2-只用click"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-只用click"}},[s._v("#")]),s._v(" （2）只用click")]),s._v(" "),t("p",[s._v("因为点击会带来300ms的延迟，所以页面内任何一个自定义交互都将增加300ms延迟。")]),s._v(" "),t("h3",{attrs:{id:"_3-添加pointer-events-none样式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-添加pointer-events-none样式"}},[s._v("#")]),s._v(" （3）添加pointer-events:none样式")]),s._v(" "),t("p",[s._v("着比较麻烦且有缺陷，不建议使用。蒙层隐藏后，给按钮下面的元素添pointer-events:none样式，让 click穿过去，350ms后去掉这个样式。恢复响应的缺陷是蒙层消失后的350ms内，用户单击按钮下面的元素没反应，如果用户单击速度很快，一定会发现。")]),s._v(" "),t("h3",{attrs:{id:"_4-轻触tap-后延迟350ms再隐藏蒙版层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-轻触tap-后延迟350ms再隐藏蒙版层"}},[s._v("#")]),s._v(" （4）轻触tap 后延迟350ms再隐藏蒙版层")]),s._v(" "),t("p",[s._v("改动最小，缺点是隐藏蒙层变慢了，350ms还是能感觉到慢的。")]),s._v(" "),t("h2",{attrs:{id:"_2、实现自适应布局的方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、实现自适应布局的方案"}},[s._v("#")]),s._v(" 2、实现自适应布局的方案")]),s._v(" "),t("p",[s._v("通过以下几种方式实现。")]),s._v(" "),t("p",[s._v("（1）可以使用媒体查询做响应式页面")]),s._v(" "),t("p",[s._v("（2）用Bootstrap的栅格系统")]),s._v(" "),t("p",[s._v("（3）Flexible方案 （推荐）"),t("a",{attrs:{href:"https://juejin.cn/post/6894044091836563469#heading-2",target:"_blank",rel:"noopener noreferrer"}},[s._v("好文推荐"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"_3、解决android浏览器查看背景图片模糊的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、解决android浏览器查看背景图片模糊的问题"}},[s._v("#")]),s._v(" 3、解决Android浏览器查看背景图片模糊的问题？")]),s._v(" "),t("p",[s._v("这个问题是 devicePixelRatio的不同导致的，因为手机分辨率太小，如果按照分辨率来显示网页，字会非常小，所以苹果系统当初就把 iPhone4的960×640像素的分辨率在网页里更改为480×320像素，这样 devicePixelRatio=2。")]),s._v(" "),t("p",[s._v("而 Android的 device PixelRatio比较乱，值有1.5、2和3。")]),s._v(" "),t("p",[s._v("为了在手机里更为清晰地显示图片，必须使用2倍宽高的背景图来代替img标签（一般情况下都使用2倍）。")]),s._v(" "),t("p",[s._v("例如一个div的宽高是100px×100px，背景图必须是200px×200px，然后设置 background-size;contain样式，显示出来的图片就比较清晰了。")]),s._v(" "),t("h2",{attrs:{id:"_4、解决长时间按住页面出现闪退的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、解决长时间按住页面出现闪退的问题"}},[s._v("#")]),s._v(" 4、解决长时间按住页面出现闪退的问题")]),s._v(" "),t("p",[s._v("通过以下代码设置样式")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("element")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("-webkit-touch-callout")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" none"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"_5、解决iphone及ipad下输入框的默认内阴影问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、解决iphone及ipad下输入框的默认内阴影问题"}},[s._v("#")]),s._v(" 5、解决iphone及ipad下输入框的默认内阴影问题")]),s._v(" "),t("p",[s._v("通过以下代码设置样式")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("element")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("-webkit-appearance")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" none"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"_6、在ios和android下-如何实现触摸元素时出现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6、在ios和android下-如何实现触摸元素时出现"}},[s._v("#")]),s._v(" 6、在IOS和Android下，如何实现触摸元素时出现")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("element")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("-webkit-tap-highlight-color")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rgba")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("255"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 255"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 255"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"_7、在旋转屏幕时-如何解决字体大小自动调整的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7、在旋转屏幕时-如何解决字体大小自动调整的问题"}},[s._v("#")]),s._v(" 7、在旋转屏幕时，如何解决字体大小自动调整的问题")]),s._v(" "),t("p",[s._v("通过设置以下代码样式")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("html, body, form, fieldset, p, div, hl, h2， h3， h4， h5， h6")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t-webkit-text-size-adjust：100%"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"_8、如何解决-android手机圆角失效的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8、如何解决-android手机圆角失效的问题"}},[s._v("#")]),s._v(" 8、如何解决 Android手机圆角失效的问题")]),s._v(" "),t("p",[s._v("通过设置以下代码样式,来为失效的元素设置样式")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-clip")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" padding-box"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_9、如何解决ios中键盘事件keyup失效问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9、如何解决ios中键盘事件keyup失效问题"}},[s._v("#")]),s._v(" 9、如何解决IOS中键盘事件keyup失效问题")]),s._v(" "),t("p",[s._v("通过以下代码解决")]),s._v(" "),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("input")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")]),s._v("text"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("id")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")]),s._v("testInput"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("script")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("text/javascript"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token script"}},[t("span",{pre:!0,attrs:{class:"token language-javascript"}},[s._v("\n\tdocument"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("getElementById（"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'testInput'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("addEventListener（"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'input'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("e")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" value "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("target"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("value\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("；\n")])]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("script")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"_10、如何解决ios设置中input按钮样式会被默认样式覆盖的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10、如何解决ios设置中input按钮样式会被默认样式覆盖的问题"}},[s._v("#")]),s._v(" 10、如何解决IOS设置中input按钮样式会被默认样式覆盖的问题")]),s._v(" "),t("p",[s._v("设置默认样式为none，解决方式如下")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("input,\ntextarea")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("border")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("-webkit-appearance")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" none"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"_11、如何解决通过transform进行skew变形、rotate旋转出现锯齿状现象的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11、如何解决通过transform进行skew变形、rotate旋转出现锯齿状现象的问题"}},[s._v("#")]),s._v(" 11、如何解决通过transform进行skew变形、rotate旋转出现锯齿状现象的问题")]),s._v(" "),t("p",[s._v("通过以下代码设置样式")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[s._v("-webkit-transform")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("rotate（-4deg） skew（10deg） translateZ（0）；\n"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("transform")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("rotate（-4deg） skew（10deg） translateZ（0）"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("outline")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("lpx solid rgba（255， 255， 255， 0）"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"_12、解决移动端-click事件有300ms延迟的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_12、解决移动端-click事件有300ms延迟的问题"}},[s._v("#")]),s._v(" 12、解决移动端 click事件有300ms延迟的问题")]),s._v(" "),t("p",[s._v("300ms延迟导致用户体验不好。为了解决这个问题，一般在移动端用 touchstart、 touchend、 touchmove、tap（模拟的事件）事件来取代 click事件。")]),s._v(" "),t("h2",{attrs:{id:"_13、在ios中-以中文输入法输入英文时-如何解决字母之间可能会出现六分之一空格的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_13、在ios中-以中文输入法输入英文时-如何解决字母之间可能会出现六分之一空格的问题"}},[s._v("#")]),s._v(" 13、在iOS中，以中文输入法输入英文时，如何解决字母之间可能会出现六分之一空格的问题")]),s._v(" "),t("p",[s._v("可以用正则表达式去掉空格")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("value "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("replace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" \\u2006"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("g，"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("' '")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_14、解决移动端html5音频标签audio的-autoplay属性失效问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_14、解决移动端html5音频标签audio的-autoplay属性失效问题"}},[s._v("#")]),s._v(" 14、解决移动端HTML5音频标签audio的 autoplay属性失效问题")]),s._v(" "),t("p",[s._v("因为自动播放网页中的音频或视频会给用户带来一些困扰或者不必要的流量消耗，所以苹果系统和 Android系统通常都会禁止自动播放和使用 JavaScript的触发播放，必须由用户来触发才可以播放。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("document "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("addEventListener")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'touchstart'")]),s._v("， "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//播放音频")]),s._v("\n    document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getElementsByTagName")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'audio'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("play")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("；\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"_15、解决上下拖动滚动条时的卡顿问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_15、解决上下拖动滚动条时的卡顿问题"}},[s._v("#")]),s._v(" 15、解决上下拖动滚动条时的卡顿问题")]),s._v(" "),t("p",[s._v("通过以下代码设置样式")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("body")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("-webkit-overflow-scrolling")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("touch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("overflow-scrolling")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("touch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"_16、禁止复制或选中文本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_16、禁止复制或选中文本"}},[s._v("#")]),s._v(" 16、禁止复制或选中文本")]),s._v(" "),t("p",[s._v("通过以下代码设置样式")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("Element")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("-webkit-user-select")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("-moz-user-select")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("-khtml-user-select")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("user-select")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);