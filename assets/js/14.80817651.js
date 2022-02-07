(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{601:function(t,s,a){"use strict";a.r(s);var n=a(13),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"衡量算法之间的优劣势"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#衡量算法之间的优劣势"}},[t._v("#")]),t._v(" 衡量算法之间的优劣势")]),t._v(" "),a("p",[t._v("    前面我们说过，算法是为了解决问题的清晰指令。那么，对于同一个问题，使用不同的算法，也许最终得到的结果是一样的，但在过程中消耗的资源和时间却会有很大的区别。")]),t._v(" "),a("p",[t._v("    那么我们应该如何去衡量不同算法之间的优劣呢？主要还是从算法所占用的「时间」和「空间」两个维度去考量。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("时间维度：是指执行当前算法所消耗的时间，我们通常用「时间复杂度」来描述。")])]),t._v(" "),a("li",[a("p",[t._v("空间维度：是指执行当前算法需要占用多少内存空间，我们通常用「空间复杂度」来描述。")])])]),t._v(" "),a("p",[t._v("    所以，我们考量一个算法的效率主要看它的时间复杂度和空间复杂度的表现情况。")]),t._v(" "),a("p",[t._v("    接下来我来分别介绍一下「时间复杂度」和「空间复杂度」的计算方法。")]),t._v(" "),a("h2",{attrs:{id:"时间复杂度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#时间复杂度"}},[t._v("#")]),t._v(" 时间复杂度")]),t._v(" "),a("p",[t._v("    我们想知道一个算法的「时间复杂度」，首先想到的是将程序运行一边，然后看它完成时所消耗的时间就知道了。这种方法是否可行？可以是可以，但是它有很多弊端，因为它很容易受到运行环境的影响，在高性能的机器上跑出来的结果与低性能上跑出来的结果会有很大的差别。而且和测试算法时用的数据规模也有很大的关系。")]),t._v(" "),a("p",[t._v("    因此出现了一种通用的方法来表示，算法的时间或空间的增长趋势，那就是「大O符号表示法」，即 O")]),t._v(" "),a("p",[t._v("    常见的时间复杂度量级有：")]),t._v(" "),a("ul",[a("li",[t._v("常数阶 O(1)")]),t._v(" "),a("li",[t._v("对数阶 O(logN)")]),t._v(" "),a("li",[t._v("线性阶 O(n)")]),t._v(" "),a("li",[t._v("线性对数阶 O(nlogN)")]),t._v(" "),a("li",[t._v("平方阶 O(n^2)")]),t._v(" "),a("li",[t._v("立方阶 O(n^3)")]),t._v(" "),a("li",[t._v("k次方阶 O(n^k)")]),t._v(" "),a("li",[t._v("指数阶 O(2^n)")])]),t._v(" "),a("p",[t._v("以上的常见时间复杂度量级，从上倒下时间复杂度越来越大，执行效率越来越低。")]),t._v(" "),a("p",[t._v("下面选择一些常见的来讲一下")]),t._v(" "),a("h3",{attrs:{id:"_1-常数阶-o-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-常数阶-o-1"}},[t._v("#")]),t._v(" 1. 常数阶 O(1)")]),t._v(" "),a("p",[t._v("无论代码执行多少行，只要没有循环等复杂结构，那这个代码的时间复杂度就是O(1),如：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("j\n")])])]),a("p",[t._v("上述代码在执行的时候，它消耗的时候并不随着某个变量的增长而增长，无论代码有多长，甚至几万行，都可以使用O(1)来表示它的时间复杂度。")]),t._v(" "),a("h3",{attrs:{id:"_2-线性阶-o-n"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-线性阶-o-n"}},[t._v("#")]),t._v(" 2. 线性阶 O(n)")]),t._v(" "),a("p",[t._v("下面的这段代码，for循环里面的代码会执行n遍，因此它消耗的时间随着n的变化而变化的，因此这类代码都可以用 O(n) 来表示它的时间复杂度。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i\n  j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_3-对数阶-o-logn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-对数阶-o-logn"}},[t._v("#")]),t._v(" 3. 对数阶 O(logN)")]),t._v(" "),a("p",[t._v("以下代码可以看到，在while循环里，每次都将i乘以2，乘完之后，i距离n就越来越近。我们假设循环x次之后，i就大于n了，此时这个循环就退出了，也就是说2的x次方等于n，那么 x = log2^n,也就是说当循环log2^n次后，这个代码就结束了。因此这个代码的时间复杂度就是 O(logn)。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_4-线性对数阶o-nlogn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-线性对数阶o-nlogn"}},[t._v("#")]),t._v(" 4. 线性对数阶O(nlogN)")]),t._v(" "),a("p",[t._v("线性对数阶O(nlogN) 其实非常容易理解，将时间复杂度为O(logn)的代码循环N遍的话，那么它的时间复杂度就是 n * O(logN)，也就是了O(nlogN)。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_4-平方阶o-n-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-平方阶o-n-2"}},[t._v("#")]),t._v(" 4. 平方阶O(n^2)")]),t._v(" "),a("p",[t._v("平方阶O(n^2) 就更容易理解了，如果把 O(n) 的代码再嵌套循环一遍，它的时间复杂度就是 O(n^2) 了。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_5-立方阶o-n3-、k次方阶o-n-k"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-立方阶o-n3-、k次方阶o-n-k"}},[t._v("#")]),t._v(" 5. 立方阶O(n³)、K次方阶O(n^k)")]),t._v(" "),a("p",[t._v("参考上面的O(n²) 去理解就好了，O(n³)相当于三层n循环，其它的类似。")]),t._v(" "),a("h2",{attrs:{id:"空间复杂度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#空间复杂度"}},[t._v("#")]),t._v(" 空间复杂度")]),t._v(" "),a("p",[t._v("空间复杂度是用来表示一个算法在运行过程中临时占用储存空间的一个量度，同样反映的是一个趋势。")]),t._v(" "),a("p",[t._v("空间复杂度常用的有：O(1), O(n), O(n^2):")]),t._v(" "),a("h3",{attrs:{id:"_1-空间复杂度-o-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-空间复杂度-o-1"}},[t._v("#")]),t._v(" 1. 空间复杂度 O(1)")]),t._v(" "),a("p",[t._v("如果算法执行所需要的临时空间不随着某个变量n的大小变化而变化，那么此算法的空间复杂度为一个常量，可表示 O(1)")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i\nj"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" m "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" j\n")])])]),a("p",[t._v("代码中的i、j、m所分配的空间都不随着处理数据量变化，所以它的空间复杂度为 O(1)")]),t._v(" "),a("h3",{attrs:{id:"_2-空间复杂度-o-n"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-空间复杂度-o-n"}},[t._v("#")]),t._v(" 2. 空间复杂度 O(n)")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("数组 a 随着 循环 次数的增加，数据的占用空间也随之增加，所以它的时间复杂度为 O(n)")]),t._v(" "),a("h3",{attrs:{id:"_3-空间复杂度-o-n-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-空间复杂度-o-n-2"}},[t._v("#")]),t._v(" 3. 空间复杂度 O(n^2)")]),t._v(" "),a("p",[t._v("空间复杂度为 O(n^2) 的典型案例就是矩阵")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" matrix "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    matrix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        matrix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);