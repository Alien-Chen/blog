(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{500:function(s,t,a){"use strict";a.r(t);var n=a(2),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"动画原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#动画原理"}},[s._v("#")]),s._v(" 动画原理")]),s._v(" "),t("p",[s._v("动画之所以被称为动画，就是因为它是会动的画（哈哈，很废话文学）。当足够多的图片快速变化，由于短暂的视觉停留作用，让我们看到了连贯的动画。")]),s._v(" "),t("h2",{attrs:{id:"动画类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#动画类型"}},[s._v("#")]),s._v(" 动画类型")]),s._v(" "),t("h3",{attrs:{id:"类型一-transition-补间动画"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类型一-transition-补间动画"}},[s._v("#")]),s._v(" 类型一: transition 补间动画")]),s._v(" "),t("p",[t("code",[s._v("这里需要注意一下，display:none 转变为 display: block 之间是没办法进行补间动画的")]),s._v("\n可以进行补间动画的属性如下：")]),s._v(" "),t("ol",[t("li",[s._v("位置平移：left/right/margin/transform")]),s._v(" "),t("li",[s._v("方位旋转：transfrom: rotate(0deg)")]),s._v(" "),t("li",[s._v("大小缩放：transfrom: scale(1)")]),s._v(" "),t("li",[s._v("透明度：  opacity")]),s._v(" "),t("li",[s._v("线性变化：transfrom: skew")])]),s._v(" "),t("p",[s._v("下面提供例子体验一下：")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".container")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n// 第一个值为需要过渡动画属性，第二个值为动画持续时间"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("第三个值为定义 动画进度和时间的关系timing Fun，如果我们自己有自定义的timing Fun的需求，第四个值为动画延迟开始的时间\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("transition")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" width 1s linear 1s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  // transition可以指定多个属性的变化\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("transition")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" width 1s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" background 3s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("如果我们对timing Fun有特殊的要求，我们可以借助cubic-bezier 贝塞尔曲线来帮助我们实现，可以借助"),t("code",[s._v("easing Animation(百度一下就有了)")]),s._v("工具帮我们生成cubic-bezier")]),s._v(" "),t("h3",{attrs:{id:"类型二-keyframe关键帧动画"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类型二-keyframe关键帧动画"}},[s._v("#")]),s._v(" 类型二：keyframe关键帧动画")]),s._v(" "),t("p",[s._v("其实关键帧动画相当于多个补间动画，能够帮助我们实现更为精致的动画效果。keyframe关键帧动画和补间动画的区别是补间动画是需要元素状态的发生变化时启动（即需要触发，如:hover），keyframe关键帧给元素指定动画后就可以进行动画效果，定义更加灵活。")]),s._v(" "),t("p",[s._v("示例如下：")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".container")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 100px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 100px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("background")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" run 1s linear"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" // run 为动画keyframes的名称\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation-delay")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" // 动画开始的延迟时间\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation-direaction")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" reverse"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" // 动画方向\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation-fill-mode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" forwards"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" // 动画结束状态停留在哪里\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation-iteration-count")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" infinite"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" // 动画次数\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation-play-state")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" paused"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" // 动画播放状态，可以用于控制动画播放状态\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token atrule"}},[t("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@keyframes")]),s._v(" run")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("0%")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 100px\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("50%")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 200px\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("100%")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 800px\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br")])]),t("h3",{attrs:{id:"类型三-逐帧动画"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类型三-逐帧动画"}},[s._v("#")]),s._v(" 类型三：逐帧动画")]),s._v(" "),t("p",[s._v("其实逐帧动画是关键帧动画的一种变形。逐帧动画是每一帧都是关键，中间没有补间的过程，比如说我指定a，b，c三个关键帧，关键帧动画中三个关键帧之间是会有补间动画的，而如果我们把补间动画去掉，不需要过渡动画这样就是逐帧动画了。")]),s._v(" "),t("p",[s._v("逐帧动画在css中并没有提供专门的一套写法，实现的方式还是在keyframes的基础上配合animation-timing-function来实现的，帧适用于无法补间计算的动画，但是每一帧都是关键帧所以资源比较大，具体使用如下：")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".container")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("background")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token url"}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("url")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string url"}},[s._v("'xxxx'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-position")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0 0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  // "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("step")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("表示时间动的时候，动画不要走，（即不需要补间动画）；\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation-timing-function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("step")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  // "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("step")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("num"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("中的num表示的是 关键帧之间需要有几个画面，1就表示在两个关键帧之间只有一个画面，那么就不会出现补间动画了\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token atrule"}},[t("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@keyframes")]),s._v(" run")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("0%")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-position")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0 10px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("10%")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-position")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0 20px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("20%")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-position")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0 30px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("30%")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-position")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0 40px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n // ...\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);