---
sidebarDepth: 2
title: '浏览器兼容篇'
---

## 前言
本文记录在项目开发过程中，对于浏览器兼容的一个思考方向。浏览器兼容无非是从样式兼容（CSS），事件兼容（JS），CSS hack三个方面着手。

## 样式兼容方面

(1)、 因为不同浏览器的默认样式是存在差异的，我们可以通过Normalize.css来帮助我们统一浏览器样式。当然如果我们的业务需要自定义一些特殊的样式我们可以定制自己的reset.css,通过通配符选择器，全局重置样式, 如下：
```css
* { margin: 0; padding: 0; }
```

(2)、当CSS3还没有成为真正的标准的时候，浏览器的厂商就开始支持使用这些属性了。因为当时的css3样式还不稳定，所以浏览器厂商提供了针对某些样式的浏览器前缀，直到现在这些浏览器前缀还在使用。现在我们开发的使用常常借助了css预处理器或者前端自动化构建工具来帮助我们处理，以至于不太熟悉，下面提供一个浏览器-内核-前缀的关系表帮助我们回顾一下：
|  浏览器   | 内核   | 前缀  |
|  ------  | ------  | ------  |
| IE浏览器  |  Trident | -ms |
| Firefox（火狐）  | Gecko | -moz |
| Opera  | Presto | -o |
|  Chrome和Safari  | webkit | -webkit |

(3)、IE9下浏览器不能用opacity
```css
opacity: 0.5;
filter: alpha(opacity = 50); //IE6-IE8我们习惯使用filter滤镜属性来进行实现
```

## 事件兼容方面

(1)、 IE中的事件监听器式自有的，因此如果要让脚本在IE浏览器中正常运行的话，就需要使用IE所支持的事件监听器attachEvent。而在支持W3C标准事件的浏览器中，支持addEventListener方法。所以在实际开发中我们会封装一个适配器，如下：
```js
var cusEvent = {}

// 绑定事件
cusEvent.on = function(target, type, handler) {
  if (target.addEventListener) {
    target.addEventListener(type, handler, false)
  } else {
    target.attachEvent(`on${type}`, handler, false)
  }
}

// 取消事件
cusEvent.cancel = function(target, type, handler) {
  if (target.removeEventListener) {
    target.removeEventListener(type, handler)
  } else {
    target.detachEvent(`on${type}`, handler)
  }
}
```

(2)、获取scrollTop 通过 `document.documentElement.scrollTop` 兼容非chrome浏览器
```js
var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
```

(3)、 Date构造函数，如果使用 'YYYY-MM-DD' 作为参数在个别浏览器中是没有办法生成Date对象实例的。需要将参数格式改为'YYYY/MM/DD'
```js
  var a = new Date('2020/05/20')
```

## CSS hack

通俗来说，用特殊的css写法只对特定的浏览器或浏览器版本生效，这就成为csshack，也是用来处理浏览器兼容的方法。缺点：难理解 难维护 易失败。好处就是简单粗暴，那有没有什么替代方案：特性检测（就是可以检测浏览器有什么相应的特点，根据这个特点给予处理兼容的针对性的class）

### css中使用的hack
各浏览器兼容标记表（IE以外的浏览器可以通过内核前缀来hack，参考上面小节）：
|  标记   | 代码示例   | 针对的浏览器  |
|  ------  | ------  | ------  |
| [*+><]  |  +background: blue  | IE6,7识别 |
| _  |  _background: blue  | IE6识别 |
| \9  | background: blue\9; | IE6,7,8识别 |
| \0  | background: blue\0; | IE8识别 |
|  * +html .test{}  |  | IE7识别 |

### IE条件注释hack(用于html中的)
```html
<!--[if IE]>此处内容只有IE可见<![endif]--> 
<!--[if IE 6]>此处内容只有IE6.0可见<![endif]--> 
<!--[if IE 7]>此处内容只有IE7.0可见<![endif]--> 
<!--[if !IE 7]>此处内容只有IE7不能识别，其他版本都能识别，当然要在IE5以上。<![endif]-->
<!--[if gt IE 6]> IE6以上版本可识别,IE6无法识别 <![endif]-->
<!--[if gte IE 7]> IE7以及IE7以上版本可识别 <![endif]-->
<!--[if lt IE 7]> 低于IE7的版本才能识别，IE7无法识别。 <![endif]-->
<!--[if lte IE 7]> IE7以及IE7以下版本可识别<![endif]-->
<!--[if !IE]>此处内容只有非IE可见<![endif]-->
```

