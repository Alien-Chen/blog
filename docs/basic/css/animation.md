---
sidebarDepth: 2
title: 'CSS 动画基础'
tags:
  - css
---

## 动画原理
动画之所以被称为动画，就是因为它是会动的画（哈哈，很废话文学）。当足够多的图片快速变化，由于短暂的视觉停留作用，让我们看到了连贯的动画。

## 动画类型

### 类型一: transition 补间动画
`这里需要注意一下，display:none 转变为 display: block 之间是没办法进行补间动画的`
可以进行补间动画的属性如下：

1. 位置平移：left/right/margin/transform
2. 方位旋转：transfrom: rotate(0deg)
3. 大小缩放：transfrom: scale(1)
4. 透明度：  opacity
5. 线性变化：transfrom: skew

下面提供例子体验一下：
```css
.container {
// 第一个值为需要过渡动画属性，第二个值为动画持续时间,第三个值为定义 动画进度和时间的关系timing Fun，如果我们自己有自定义的timing Fun的需求，第四个值为动画延迟开始的时间
  transition: width 1s linear 1s;

  // transition可以指定多个属性的变化
  transition: width 1s, background 3s;
}
```
如果我们对timing Fun有特殊的要求，我们可以借助cubic-bezier 贝塞尔曲线来帮助我们实现，可以借助`easing Animation(百度一下就有了)`工具帮我们生成cubic-bezier

### 类型二：keyframe关键帧动画
其实关键帧动画相当于多个补间动画，能够帮助我们实现更为精致的动画效果。keyframe关键帧动画和补间动画的区别是补间动画是需要元素状态的发生变化时启动（即需要触发，如:hover），keyframe关键帧给元素指定动画后就可以进行动画效果，定义更加灵活。

示例如下：
```css
.container {
    width: 100px;
    height: 100px;
    background: red;
    animation: run 1s linear; // run 为动画keyframes的名称
    animation-delay: 1s; // 动画开始的延迟时间
    animation-direaction: reverse; // 动画方向
    animation-fill-mode: forwards; // 动画结束状态停留在哪里
    animation-iteration-count: infinite; // 动画次数
    animation-play-state: paused; // 动画播放状态，可以用于控制动画播放状态
}

@keyframes run {
    0% {
        width: 100px
    }
    50% {
        width: 200px
    }
    100% {
        width: 800px
    }
}
```

### 类型三：逐帧动画
其实逐帧动画是关键帧动画的一种变形。逐帧动画是每一帧都是关键，中间没有补间的过程，比如说我指定a，b，c三个关键帧，关键帧动画中三个关键帧之间是会有补间动画的，而如果我们把补间动画去掉，不需要过渡动画这样就是逐帧动画了。

逐帧动画在css中并没有提供专门的一套写法，实现的方式还是在keyframes的基础上配合animation-timing-function来实现的，帧适用于无法补间计算的动画，但是每一帧都是关键帧所以资源比较大，具体使用如下：

```css
.container {
  background: url('xxxx');
  background-position: 0 0;
  // step(1)表示时间动的时候，动画不要走，（即不需要补间动画）；
  animation-timing-function: step(1)
  // step(num)中的num表示的是 关键帧之间需要有几个画面，1就表示在两个关键帧之间只有一个画面，那么就不会出现补间动画了
}
@keyframes run {
 0% {
   background-position: 0 10px;
 }
 10% {
   background-position: 0 20px;
 }
 20% {
   background-position: 0 30px;
 }
 30% {
   background-position: 0 40px;
 }
 // ...
}
```



