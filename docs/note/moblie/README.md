---
sidebarDepth: 2
title: '移动端篇'
---

## 1、在移动端，出现点击穿透？
点击穿透现象有3种。
- 蒙版层点击穿透问题：点击蒙版层（mask）上的“关闭”按钮，蒙版层消失后，发现触发按钮下面元素的click事件。
- 页面点击穿透问题：如果按钮下方恰好是一个有href属性的a标签，那么点击按钮页面就会发生跳转。
- 跨页面点击穿透问题：这次没有蒙版了，直接点击业内按钮跳转至新页面，然后发现新页面中对应位置元素的click事件也被触发。

有4种解决方案：

### （1）只用touch
这是最简单的解决方案，完美的解决点击穿透的问题，把页面中所有的click事件都换成touch事件（touchstart，touched，tap）。

### （2）只用click
因为点击会带来300ms的延迟，所以页面内任何一个自定义交互都将增加300ms延迟。

### （3）添加pointer-events:none样式
着比较麻烦且有缺陷，不建议使用。蒙层隐藏后，给按钮下面的元素添pointer-events:none样式，让 click穿过去，350ms后去掉这个样式。恢复响应的缺陷是蒙层消失后的350ms内，用户单击按钮下面的元素没反应，如果用户单击速度很快，一定会发现。

### （4）轻触tap 后延迟350ms再隐藏蒙版层
改动最小，缺点是隐藏蒙层变慢了，350ms还是能感觉到慢的。

## 2、实现自适应布局的方案

通过以下几种方式实现。

（1）可以使用媒体查询做响应式页面

（2）用Bootstrap的栅格系统

（3）Flexible方案 （推荐）[好文推荐](https://juejin.cn/post/6894044091836563469#heading-2)

## 3、解决Android浏览器查看背景图片模糊的问题？
这个问题是 devicePixelRatio的不同导致的，因为手机分辨率太小，如果按照分辨率来显示网页，字会非常小，所以苹果系统当初就把 iPhone4的960×640像素的分辨率在网页里更改为480×320像素，这样 devicePixelRatio=2。

而 Android的 device PixelRatio比较乱，值有1.5、2和3。

为了在手机里更为清晰地显示图片，必须使用2倍宽高的背景图来代替img标签（一般情况下都使用2倍）。

例如一个div的宽高是100px×100px，背景图必须是200px×200px，然后设置 background-size;contain样式，显示出来的图片就比较清晰了。

## 4、解决长时间按住页面出现闪退的问题
通过以下代码设置样式
```css
element {
 -webkit-touch-callout: none;
}
```

## 5、解决iphone及ipad下输入框的默认内阴影问题
通过以下代码设置样式
```css
element {
 -webkit-appearance: none;
}
```

## 6、在IOS和Android下，如何实现触摸元素时出现
```css
element {
 -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}
```

## 7、在旋转屏幕时，如何解决字体大小自动调整的问题
通过设置以下代码样式
```css
html, body, form, fieldset, p, div, hl, h2， h3， h4， h5， h6 {
	-webkit-text-size-adjust：100%;
}
```

## 8、如何解决 Android手机圆角失效的问题
通过设置以下代码样式,来为失效的元素设置样式
```css
background-clip: padding-box;
```

## 9、如何解决IOS中键盘事件keyup失效问题
通过以下代码解决
```html
<input type='text' id='testInput'>
<script type="text/javascript">
	document.getElementById（'testInput').addEventListener（'input', function(e){
        var value =e.target.value
    })；
</script>
```

## 10、如何解决IOS设置中input按钮样式会被默认样式覆盖的问题
设置默认样式为none，解决方式如下
```css
input,
textarea {
 border: 0;
 -webkit-appearance: none;
}
```

## 11、如何解决通过transform进行skew变形、rotate旋转出现锯齿状现象的问题
通过以下代码设置样式
```css
-webkit-transform:rotate（-4deg） skew（10deg） translateZ（0）；
transform:rotate（-4deg） skew（10deg） translateZ（0）;
outline:lpx solid rgba（255， 255， 255， 0）;
```

## 12、解决移动端 click事件有300ms延迟的问题
300ms延迟导致用户体验不好。为了解决这个问题，一般在移动端用 touchstart、 touchend、 touchmove、tap（模拟的事件）事件来取代 click事件。

## 13、在iOS中，以中文输入法输入英文时，如何解决字母之间可能会出现六分之一空格的问题
可以用正则表达式去掉空格
```js
this.value = this.value.replace( / \u2006/g，' ')
```
## 14、解决移动端HTML5音频标签audio的 autoplay属性失效问题
因为自动播放网页中的音频或视频会给用户带来一些困扰或者不必要的流量消耗，所以苹果系统和 Android系统通常都会禁止自动播放和使用 JavaScript的触发播放，必须由用户来触发才可以播放。
```js
document addEventListener ('touchstart'， function( ) {
    //播放音频
    document.getElementsByTagName ('audio')[0].play();
})；
```

## 15、解决上下拖动滚动条时的卡顿问题
通过以下代码设置样式
```css
body {
 -webkit-overflow-scrolling:touch;
 overflow-scrolling:touch;
}
```

## 16、禁止复制或选中文本
通过以下代码设置样式
```css
Element {
 -webkit-user-select:none;
 -moz-user-select:none;
 -khtml-user-select:none;
 user-select:none;
}
```




