---
sidebarDepth: 2
title: 'CSS预处理器'
tags:
  - css sass less
---

## 什么是css预处理器
css预处理器是基于css的另一种语言，添加了很多css不具备的特性，可以通过工具编译成css，所以css预处理器能够帮助我们提升css文件组织。

css预处理器比较流行的两款预处理器是less和sass，从编译速度上来看由于less是基于node实现的所以编译速度较快。而sass是基于ruby实现的，所以编译过程会比较慢，但是可以通过node-sass来解决这个问题。

css预处理器提供给我们什么好处呢：

- 支持css结构的嵌套写法，反映层级和约束
- 支持变量和计算，从而减少重复代码量,利于维护
- 提供extend 和 mixin方法，帮助我们抽离样式
- 提供循环方法，帮助我们快捷的实现有规律样式
- 提供import css文件模块化

## less 和 sass 基础语法
以下直接用代码呈现
### less
```css

// 变量
@fontSize: 12px; // 变量的单位也是加入到运算中的
@bgColor: red;
// 一段样式想要复用的时候可以用mixin
.block(@size) {
    font-size: @size;
    border-radius: 4px;
}

// extend，编译成来的结果是会将公共样式提取出来
.testExtend {
    background: green;
}

// 嵌套
.wrapper {
    background: lighten(@bgColor, 40%); // less 提供的颜色函数lighten
    .nav:extend(.testExtend) {
        .block(@fontSize) // 相当于将.block 的内容 复制到当前位置
    }
    .content {
        font-size: @fontSize + 2px;
        &:extend(.testExtend);
        &:hover { // &: 表示与父级同层级的——> .content:hover
            background red;
        }
    }
}

// less  中是没有循环的，但是mixin可以调用自己，所以能形成递归
// 这时候就能通过递归来模拟循环
.gen-col(@n) when (@n > 0) {
    .gen-col(@n - 1)
    .col-@{n} {
        width: 1000px/12*@n
    }
}
.gen-col(12)
```

### Sass
```css
// 变量
$fontSize: 12px; // 变量的单位也是加入到运算中的
$bgColor: red;
// mixin，复杂且带条件，参数的情况可以考虑mixin
@mixin block($fontSize) {
    font-size: $fontSize;
    border: 1px solid #ccc;
}
// mixin 虽然能在写法上能够帮助我们减少重复代码的编写，但是在编译完成
// 后会发现重复代码依然存在，为了解决这个问题 sass推出了 extend 来扩展某一个选择器
// 嵌套，编译成来的结果是会将公共样式提取出来
// extend
.extendText {
    color: #000;
}

// sass 中的循环
// 递归写法
@mixin gen-col($n) {
    @if $n > 0 {
        @include gen-col($n - 1);
        .col-#{$n} {
            width: 1000px/12 * $n
        }
    }
}
gen-col(12)
// for 循环 写法
@for $i from 1 through 12 {
    .col-#{$i} {
        width: 1000px/12*$i
    }
}

.wrapper {
    background: lighten($bgColor, 40%);
    .nav {
        @include block($fontSize)
    }
    .content {
        @extend .extendText;
        font-size: $fontSize + 2px;
        &:hover { // &: 表示与父级同层级的——> .content:hover
            background: $bgColor;
        }
    }
}
```

## less 和 sass 的模块化
首先模块化就是将css代码分成一个一个的模块，sass和less的import的写法和css是类似的。但是css的import是不会做任何合并或加载的时候去复用链接之类的事情，css只会一个一个去加载，这样一来http的请求量就会比较大。css预处理器就帮助我们解决这个问题，在编译的时候会进行代码的合并。

```css
@import "xxx/xxxx/xxx"
```