---
sidebarDepth: 2
title: '低代码(五)-动态表单的表单验证'
tags: 
  - 低代码
  - lowcode
  - 表单验证
---

要真正投入使用，还需要表单验证，配置表单验证的方法如下：

#### 必填校验
在表单设计器的字段属性设置面板，勾选必填字段的选项。

#### 正则表达式校验
通过表单设计器的字段属性设置面板，设置字段校验。这个属性提供了几个常见的正则去选择。接下来就是设置“校验失败提醒”

#### 自定义校验
选中字段后，在表单选择器的字段设置面板中选择事件属性“onValidate”，编写校验代码

具体实现如下：

第一步表单组件初始化的时候，根据JSON表单的配置生成该表单组件所对应的所有rules
```
created() {
  this.buildFieldRules()
}
methods: {
 buildFieldRules() {
  if (this.field.options.hidden) {
    return
  }

  this.rules.splice(0, this.rules.length)  //清空已有
  if (this.field.options.required) {
    this.rules.push({
      required: true,
      trigger: ['blur'], 
      message: this.field.options.requiredHint,
    })
  }

  if (this.field.options.validation) {
    let vldName = this.field.options.validation
    this.rules.push({
      pattern: FormValidators[vldName], // FormValidators 里配置了常见正则判断
      trigger: ['blur', 'change']
      message: this.field.options.validationHint
    })
  },
  if (this.field.options.onValidate) {
    let customFn = (rule, value, callback) => {
      let tmpFunc =  new Function('rule', 'value', 'callback', this.field.options.onValidate)
      return tmpFunc.call(this, rule, value, callback)
    }
    this.rules.push({
      validator: customFn,
      trigger: ['blur', 'change']
    })
  }
}
```

第二步 在form-item上使用

```
<el-form-item :rules="rules" :prop="field.propName"></el-form-item>
```
以上就能完成动态表单的表单验证

