---
sidebarDepth: 2
title: '低代码-表单提交值的收集'
tags: 
  - 低代码
  - lowcode
---

在开发业务当中不同的表单业务，会有不同的，所以提交给表单的值也是不同的。那么我的解决方案是动态的当表单数据改变的时候动态插入提交值。

第一步我们动态表单组件里添加 formDataModel 这个数据为空对象，再通过provide注入到子组件中，的逻辑如下：
```
// formRender.vue 动态表单组件

provide () {
  return {
    globalModel: {
      formModel: this.formDataModel
    },
  }
}
data () {
  return {
    formDataModel: {},
  }
}

methods: {
  getFormData (needValidation = true) {
   // 是否需要进行表单验证
   if (!needValidation) {
    return this.formDataModel
   }
   let promise = new Promise((resolve, reject) => {
     this.$refs['renderForm'].validata((valid) => {
      if (valid) {
        resolve(this.formDataModel)
      } else {
        reject('验证失败')
      }
     })
   })
   
  }
}
```

第二步 我们需要在子组件的修改事件触发时，我们对数据进行修改比如说 onChange，逻辑如下：

```
<template>
  <el-input v-model="fieldModel" @change="handleChangeEvent">
  </el-input>
</template>

<script>
  export default {
    data() {
      fieldModel: null
    },
    inject: ['globalModel']
    computed: {
     formModel: {
      cache: false,
      get() {
        return this.globalModel.formModel
      }
     },
    }
    created () {
      // 如果表单设置的时候拥有默认值的时候，需要初始化 fieldModel
      this.initFieldModel()
    },
    methods: {
      // 初始化 fieldModel
      initFieldModel () {
        this.fieldModel = this.field.options.defaultValue
      },
      handleChangeEvent(value) { 
        // 修改inject进来的globalModel
        this.syncUpdateFormModel(value)
      },
      syncUpdateFormModel(value) {
        this.formModel[this.field.options.propName] = value
      },
    }
  }
</script>
```
以上逻辑就能帮助我们实现动态往提交值中插入对象并切取出提交值了。

第三步，我们需要如何将子表单的事件派发到formRender中接收呢，可以在定义一个派发方法 dispatch 它接收3个参数 componentName（目标组件名）、eventName（事件名称），params （参数）。

```
// 派发的混入，emitter.js
methods: {
  dispatch(componentName, eventName, params) {
    var parent = this.$parent || this.$root;
    var name = parent.$options.componentName;

    while (parent && (!name || name !== componentName)) {
      parent = parent.$parent;

      if (parent) {
        name = parent.$options.componentName;
      }
    }
    if (parent) {
      // debugger;
      parent.$emit.apply(parent, [eventName].concat(params));
    }
  },
}
```
可以看到 我们通过 componentName 结合while 不断向上找到对应组件的实例，执行parent.$emit ,相当于自己给自己发送事件。

在formRender.vue中要去监听，

```
export default {
  created() {
    this.addFieldValidateEventHandler()
  },
  methods: {
    addFieldValidateEventHandler() {
      this.$off('fieldValidation')  //移除原有事件监听
      this.$on('fieldValidation', (fieldName) => {
        this.$refs.renderForm.validateField(fieldName)
      })
    },
  },
  beforeUnmount () {
    this.$off('fieldValidation') 
  }
}
```
以上就能完成事件发送到formRender了



