(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{620:function(t,s,n){"use strict";n.r(s);var a=n(17),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"什么是css预处理器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是css预处理器"}},[t._v("#")]),t._v(" 什么是css预处理器")]),t._v(" "),n("p",[t._v("css预处理器是基于css的另一种语言，添加了很多css不具备的特性，可以通过工具编译成css，所以css预处理器能够帮助我们提升css文件组织。")]),t._v(" "),n("p",[t._v("css预处理器比较流行的两款预处理器是less和sass，从编译速度上来看由于less是基于node实现的所以编译速度较快。而sass是基于ruby实现的，所以编译过程会比较慢，但是可以通过node-sass来解决这个问题。")]),t._v(" "),n("p",[t._v("css预处理器提供给我们什么好处呢：")]),t._v(" "),n("ul",[n("li",[t._v("支持css结构的嵌套写法，反映层级和约束")]),t._v(" "),n("li",[t._v("支持变量和计算，从而减少重复代码量,利于维护")]),t._v(" "),n("li",[t._v("提供extend 和 mixin方法，帮助我们抽离样式")]),t._v(" "),n("li",[t._v("提供循环方法，帮助我们快捷的实现有规律样式")]),t._v(" "),n("li",[t._v("提供import css文件模块化")])]),t._v(" "),n("h2",{attrs:{id:"less-和-sass-基础语法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#less-和-sass-基础语法"}},[t._v("#")]),t._v(" less 和 sass 基础语法")]),t._v(" "),n("p",[t._v("以下直接用代码呈现")]),t._v(" "),n("h3",{attrs:{id:"less"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#less"}},[t._v("#")]),t._v(" less")]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[t._v("\n// 变量\n"),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@fontSize")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 12px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v(" // 变量的单位也是加入到运算中的\n"),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@bgColor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n// 一段样式想要复用的时候可以用mixin\n."),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("block")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@size")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@size")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 4px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("// extend，编译成来的结果是会将公共样式提取出来\n.testExtend")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" green"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("// 嵌套\n.wrapper")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("lighten")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@bgColor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 40%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("// less 提供的颜色函数lighten\n    .nav:extend(.testExtend)")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        ."),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("block")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@fontSize")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // 相当于将.block 的内容 复制到当前位置\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    .content")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@fontSize")]),t._v(" + 2px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n        &"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("extend")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(".testExtend"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("&:hover")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" // &"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 表示与父级同层级的——> ."),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("hover\n            background red"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n// less  中是没有循环的，但是mixin可以调用自己，所以能形成递归\n// 这时候就能通过递归来模拟循环\n."),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("gen-col")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@n")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" when "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@n > 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ."),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("gen-col")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@n")]),t._v(" - 1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    .col-@")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1000px/12*@n\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n."),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("gen-col")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("12"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("h3",{attrs:{id:"sass"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sass"}},[t._v("#")]),t._v(" Sass")]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[t._v("// 变量\n$"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("fontSize")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 12px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" // 变量的单位也是加入到运算中的\n$"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("bgColor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n// mixin，复杂且带条件，参数的情况可以考虑mixin\n"),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@mixin")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("block")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$fontSize"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $fontSize"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid #ccc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("// mixin 虽然能在写法上能够帮助我们减少重复代码的编写，但是在编译完成\n// 后会发现重复代码依然存在，为了解决这个问题 sass推出了 extend 来扩展某一个选择器\n// 嵌套，编译成来的结果是会将公共样式提取出来\n// extend\n.extendText")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #000"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n// sass 中的循环\n// 递归写法\n"),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@mixin")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("gen-col")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@if")]),t._v(" $n > 0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@include")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("gen-col")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$n - 1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".col-#")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("$n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1000px/12 * $n\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("gen-col")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("12"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n// for 循环 写法\n"),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@for")]),t._v(" $i from 1 through 12")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".col-#")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("$i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1000px/12*$i\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".wrapper")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("lighten")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$bgColor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 40%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".nav")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@include")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("block")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$fontSize"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    .content")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@extend")]),t._v(" .extendText"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $fontSize + 2px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("&:hover")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" // &"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 表示与父级同层级的——> ."),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("hover\n            "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $bgColor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"less-和-sass-的模块化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#less-和-sass-的模块化"}},[t._v("#")]),t._v(" less 和 sass 的模块化")]),t._v(" "),n("p",[t._v("首先模块化就是将css代码分成一个一个的模块，sass和less的import的写法和css是类似的。但是css的import是不会做任何合并或加载的时候去复用链接之类的事情，css只会一个一个去加载，这样一来http的请求量就会比较大。css预处理器就帮助我们解决这个问题，在编译的时候会进行代码的合并。")]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[t._v("@import "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx/xxxx/xxx"')]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);