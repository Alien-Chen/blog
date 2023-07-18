---
sidebarDepth: 2
title: '低代码(三)-可编程的动态表单'
tags: 
  - 低代码
  - lowcode
  - schema设计
  - 动态表单
  - 可编程
---

在项目业务上表单的需求多变，不同需求也会有不同的表单组合。这部分的开发投入是可以减小的。简单的分析一下，变动的主要是表单控件和逻辑判断。所以首先想到的就是开发一个配置式的表单，设计一个新的表单schema规范。然后根据schema规范编写表单的JSON对象，最后由表单JSON动态生成表单。下面就是一段常用的基于schema的表单JSON代码：

```
{
  "type": "input",
  "propName": "username", // 用于设置传递给后端的字段名称
  "icon": "text-field",
  "formItemFlag": true,
  "options": {
    //-------------------
    以下是组件属性
    "name": "input115643",
    "label": "input",
    "labelAlign": "",
    "type": "text",
    "defaultValue": "",
    "placeholder": "",
    "columnWidth": "200px",
    "size": "",
    "labelWidth": null,
    "labelHidden": false,
    "readonly": false,
    "disabled": false,
    "hidden": false,
    "clearable": true,
    "showPassword": false,
    "required": false,
    "requiredHint": "",
    "validation": "",
    "validationHint": "",
    "customClass": [],
    "labelIconClass": null,
    "labelIconPosition": "rear",
    "labelTooltip": null,
    "minLength": null,
    "maxLength": null,
    "showWordLimit": false,
    "prefixIcon": "",
    "suffixIcon": "",
    "appendButton": false,
    "appendButtonDisabled": false,
    "buttonIcon": "el-icon-search"
  },
  "id": "input115643"
}
```

但是如果通过传入到表单JSON去渲染组件中这种方案有两个比较明显的缺点：

1. 使用者需要学习schema规范
2. 难于实现复杂的表单交互逻辑

为了解决第一个schema规范学习成本的问题。可以基于表单schema开发一个拖拽式的表单设计器，这样就可以所见即所得，现在也有很多开源项目实现，form generator、form creator等等的开源项目。但是由于本业务使用的ui框架是Hui(恒生的一套ui框架)，由于ui参数与展示不同所以需要自己搞一套表单设计器。

为了解决第二个问题，如何实现动态表单的复杂交互逻辑，思路为 为动态表单添加可编程接口，即通过组件的交互事件和API方法实现逻辑交互。

### 实现可编程接口

要实现表单交互逻辑，第一步需要暴露组件交互事件，比如“活动类型”组件点击后出发onChange事件；第二步就是在事件中对组件进行精确控制，比如显示和隐藏某些组件、设置组件必填属性、设置禁用组件等等。

第一步比较简单，只要给schema增加组件的7个自定义事件即可，如下：
```
{
  "type": "input",
  "propName": "username", // 用于设置传递给后端的字段名称
  "icon": "text-field",
  "formItemFlag": true,
  "options": {
    //-------------------
    以下是组件属性
    "name": "input115643",
    "label": "input",
    "labelAlign": "",
    "type": "text",
    "defaultValue": "",
    "placeholder": "",
    "columnWidth": "200px",
    "size": "",
    "labelWidth": null,
    "labelHidden": false,
    "readonly": false,
    "disabled": false,
    "hidden": false,
    "clearable": true,
    "showPassword": false,
    "required": false,
    "requiredHint": "",
    "validation": "",
    "validationHint": "",
    "customClass": [],
    "labelIconClass": null,
    "labelIconPosition": "rear",
    "labelTooltip": null,
    "minLength": null,
    "maxLength": null,
    "showWordLimit": false,
    "prefixIcon": "",
    "suffixIcon": "",
    "appendButton": false,
    "appendButtonDisabled": false,
    "buttonIcon": "el-icon-search",
    //-------------------
    自定义事件，用于在以下几个出发时机写入自定义的事件
    "onCreated": "",
    "onMounted": "",
    "onInput": "",
    "onChange": "",
    "onFocus": "",
    "onBlur": "",
    "onValidate": ""
  },
  "id": "input115643"
}
```

代码的编辑选用的是ace-builds这个编辑组件。


第二步就是实现组件的操控API方法，这里又分为两步走：

1. 收集表单组件的实例
2. 调用组件的methods属性中的方法

先给 renderForm 组件增加一个refList的provider属性，在表单组件中inject注入，当每个组件创建时将本组件实例注入到如下：

```
inject: ['refList'],
created() {
  this.registerToRefList()
},
methods: {
 registerToRefList() {
   this.refList[this.field.options.name] = this
 }
}
```
如此一来，我们可以通过options.name去获取表单组件实例，从而调用组件的methods属性中的组件方法，组件方法可以任意填充。

实现一个简单的交互事件：

```
var fieldA = this.getWidgetRef('fieldA')
var fieldB = this.getWidgetRef('fieldB')

if (value === 1) {
  fieldA.setHidden(false)
  fieldB.setHidden(true)
} else {
  fieldA.setHidden(true)
  fieldB.setHidden(false)
}
```

```
// fieldMixin.js 这个混入会混入表单组件的公共逻辑
getWidgetRef(widgetName, showError) {
  let foundRef = this.refList[widgetName]
  if (!foundRef && !!showError) {
    // 错误处理
  }
  return foundRef
},
setHidden(flag) {
  this.field.options.hidden = flag

  if (flag) {  //清除组件校验规则
    this.clearFieldRules()
  } else {  //重建组件校验规则
    this.buildFieldRules()
  }
},
```

自定义事件的执行过程是 通过 Function生成匿名函数，传入指定参数执行。








