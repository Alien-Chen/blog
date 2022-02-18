---
sidebarDepth: 2
title: 'HTML基础'
tags:
  - HTML
---
## HTML常见元素和理解
### Head区的元素（它们不会在页面上显示出来）
(1)、 meta 标签
- `<meta charset="utf-8">` charset 定义了页面使用了什么字符集编码
- `<meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0,user-scalable=no">` 用meta设置viewport，适配移动端第一步永远是给meta设置viewport

(2)、title 标签

(3)、style 标签

(4)、link 标签

(5)、script 标签

(6)、base标签：`<base href='/' />` 指定基础路径，相当于baseurl

### Body区元素
- div/section/article/aside/header/footer
- p
- span/em/strong
- table/thead/tbody/tr/td
- ul/ol/li/dl/dt/dd
- a
- form/input/select/textarea/button

### html中重要的属性
- a （href，target）
- img （src， alt）
- table （colspan，rowspan）
- form （target， method，enctype）
- input （type，value）
- button （type）
- select > option (value)
- label (for)

> 小窍门：工具http://h5o.github.io/  能帮助我们查看我们结构是否合理，即大纲是否合理（主要由aside，article，section，nav来确定的）

## HTML各版本的简介
(1)、html4.0 是基于sgml标记的应用

(2)、xhtml 是基于xml的应用，对代码的写法风格有严格的要求

(3)、html5 支持html4.0 标准的大部分特性，而且还提供了一些新特性

下面用表格对比一下语法规范的差异点如下：
|  HTML4   | XHTML   | HTML5   |
|  ------  | ------  | ------  |
| 标签允许不结束  | 标签必须结束 | 标签允许不结束 |
| 属性不用带引号  | 属性必须带引号 | 属性不用带引号 |
| 标签属性可大写  | 标签属性必须小写 | 标签属性可大写 |
| Boolean属性可省略  | Boolean属性不可省略 | Boolean属性可省略 |

## HTML5 新特性
(1)、新语义化标签
- header/footer 头/尾标签
- section/article 区域 （知道属于什么的明确区域就用section，文章相关的区域选择用article）
- aside 放置不重要内容
- em / strong 表示强调
- i 斜体 （现在常用于icon）

(2)、表单增强
- 表单验证
- 增加了日期、时间、搜索的input的type类型
- 支持placeholder自动聚焦

(3)、支持新的api
支持以下离线，音视频，cavas，实时通讯，本地存储，设备能力（摇一摇，定位，陀螺仪等 需要配合js使用）

## HTML元素分类
按照样式分类可以分成 块级元素、行内元素和inline-block元素
- 常见的块级元素有 div/p/h系列/ul/ol/table/section/nav/aside
- 常见的行内元素有 span/em/strong
- 常见的inline-block select/input/button

## HTML元素的嵌套关系
(1)、块级元素可以包含行内元素

(2)、块级元素不一定能包含块级元素（比如说p标签里面包div标签是不合适的）

(3)、行内元素一般不能包含块级元素（什么叫一般？比如说a标签中是可以放块级元素的，这是为什么呢？w3c定义的，a标签是一个tranparent元素，即渲染到页面上我们可以忽略掉该元素）

- 衍生出来的问题-为什么a标签嵌套div是合法的？不一定是合法的，是否合法取决于a标签外是否还包裹这其他元素，因为在页面解析的时候a标签（tranparent元素）是要被忽略掉的，所以如果外层报告的是p标签那么就是不合法，如果没包裹或者是可以包裹div的元素那么就是合法的

## HTML元素的默认样式
- 默认样式有何意义？能够帮助我们实现简单的样式效果
- 默认样式带来一问题？当默认样式和我们的样式要求有出路的时候这时候就需要定制来（存在默认样式body，ul,ol，input，table）默认样式我们不想要的时候我们就需要css resize.css（样式归0）或者normalize.css（默认样式统一化）


