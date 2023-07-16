---
sidebarDepth: 2
title: '记录的移动端兼容问题'
tags: 
  - 移动端兼容
---

### 1px 边框

分析屏幕的设备像素比，通过媒体查询通过transform: scale分别设置 2X、3X、1.5X的设备

### android，border-radius:50%不圆
具体是因为，使用了rem布局，在部分机型上出现的问题，设置具体的px数值，不用50%即可

### android里line-height不居中
给 html标签设置 lang 如： `<html lang="zh-CN">`
然后使用 display: flex; align-items: center


### 安卓部分版本input的placeholder偏上
input 的 line—height设置为normal
```
input {
 line-height: normal;
}
```

### ios的body设置overflow:hidden仍然可以滚动
一般在元素的最外层包裹一个大盒子.wrap并设置以下样式
```
.wrap{
  position:relative;
  overflow:hidden;
}
```

### ios 滚动不流畅
使用了absolute布局之后，ios会发现元素内的滚动非常不流畅，滑动的手指松开后，滚动立刻停止，失去了原本的流畅滚动特性。百度一下弹性滚动的问题，发现在 webkit 中，下面的属性可以恢复弹性滚动。
设置以下样式：
`-webkit-overflow-scrolling: touch;
`

### ios fixed问题
iOS 下由于软键盘唤出后，页面 fixed 元素会失效，导致跟随页面一起滚动。
解决思路：使 fixed 元素的父级不出现滚动，而将原 body 滚动的区域域移到 main 内容区域内部，而 header 和 footer 的样式不变


### 键盘遮挡住输入框问题
输入框聚焦的时候执行如下代码：

```
focus () {
 setTimeout(() => {
   let pannel = this.$refs.chatPannel
   pannel.scrollIntoView(true)
 })
}
```
### 浮层上进行滑动，浮层下面的页面也跟着滚动
具体就是当浮层出现、隐藏的时候，给滚动层设置overflow:hidden值

### ios日期转换NAN问题
具体就是，`new Date('2020-11-12 00:00:00')`在ios中会为NAN

决绝方案：`用new Date('2020/11/12 00:00:00')`的日期格式，或者写个正则转换

### 禁止数字识别为电话号码
`<meta name = "format-detection" content = "telephone=no">`

### margin-bottom 失效
在移动端开发的过程中，经常会有在底部进行一个元素固定定位在，这样我们主体数据有需要设置margin-bottom 去防止主体数据被底部遮挡的情况。

这在android手机中这样设置是完全没有问题的，不过在ios手机上就会出现底部定位遮挡了主体内容。当时还尝试了使用padding-bottom去处理，

解决方法：主体最后设置一个空白的div（设置好高度即可）

### ios长按闪退

```
element {
 -webkit-touch-callout:none;
}
```

### 点透问题
使用 fastclick.js这个库







