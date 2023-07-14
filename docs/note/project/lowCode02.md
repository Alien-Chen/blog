---
sidebarDepth: 2
title: '低代码平台搭建(二)'
tags: 
  - 低代码
  - lowcode
  - schema设计
---

对于一个低代码平台都会自定义Schema来描述搭建内容。Schema本质上是一个JSON格式的定义块，通过抽象属性定义来表达页面和组件的布局、属性配置、样式配置、数据源配置、生命周期配置配置。 以下是本项目对Schema的定义：

下面的代码会在全局存储起来，页面上有添加/删除都会修改到以下数据，存储在全局的 vPage中：
```
{
  "componentName": "Page",
  "id": "xxxx",
  "props": {
    "prop1": {
       "type": String,
       "default": Function | 具体值
    }
  },
  "fileName": "/",
  "state": {
    "text": {
      "type": String,
      "value": xxxx
    }
  },
  "css": "body {\n  font-size: 12px;\n}\n\n.button {\n   width: 100px;\n  color: #ff00ff\n}",
  "lifeCycles": {
    "beforeCreate": {
      "type": "JSFunction",
      "value": "function () {\n  console.log('did mount');\n}"
    },
    "created": {
      "type": "JSFunction",
      "value": "function () {\n  console.log('will unmount');\n}"
    },
    // .....
  },
  "methods": {
    "testFunc": {
      "type": "JSFunction",
      "value": "function testFunc() {\n  console.log('test func');\n}"
    },
  }
}
```
以上是一个组件/页面的Schema 而组件的具体元素的schema，并且存储在全局的widgetList中，如下：

```
 {
    type: 'grid',
    name: '栅格',
    category: 'container',
    elementName: 'el-row',
    semanticType: 'el-row',
    icon: 'grid',
    cols: [],
    style: {
      height: {
        value: 0,
        isDynamic: false,
        referenceType: '',
        id: ''
      }
    },
    options: {
      name: '',
      hidden: {
        value: false,
        isDynamic: false,
        referenceType: '',
        id: ''
      },
      gutter: 12,
      // colHeight: 0, // 栅格列同一高度属性，用于解决栅格列设置响应式布局浮动后被挂住的问题
      customClass: '' // 自定义类css类名
    }
  },
```
有了这些schema，我们就可以通过他来产出 vue代码了

## 生成vue代码

在低代码中如何生成vue代码呢，我们需要一个基础的vue 模版，然后通过正则对模版指定内容进行替换。

模版如下：

```
export const defaultCode = `
/*@{html:0}*/
export default {
  data() {
    return {
     /*@{data:4}*/
    }
  },
  props: {
/*@{props:4}*/
  },
  methods: {
/*@{methods:4}*/
  },
/*@{lifeCycles:2}*/ // 后面跟着的number是用户缩进用的
}
`;
```

根据 vPage 的描述，匹配逻辑如下：

```
// 获取字符缩进
function getIndentStr(number) {
  let indentStr = '';
  while (indent--) {
    indentStr += ' ';
  }
  return indentStr;
}

// 获取类型
function guessValueType(val) {
  if (isString(val)) {
    return 'String';
  } else if (Array.isArray(val)) {
    return 'Array';
  } else if (isObject(val)) {
    return 'Object';
  }
  return 'null';
}

// 若值是字符串 判断值的类型
function guessStrValueType(val) {
  if (val === 'true' || val === 'false') {
    return 'Boolean';
  } else if (!isNaN(Number(val))) {
    return 'Number';
  } else if (val[0] === '/' && val[val.length - 1] === '/') {
    return 'RegExp';
  } else {
    try {
      return guessValueType(JSON.parse(val));
    } catch {
      return 'String';
    }
  }
}

function parseSchemeToHtml(schema) {
  let html = ''
  function generateHtml (widgetList) {
    for (let i = 0; i < widgetList.length; i++) {
     const item = widgetList[i]
     const children = item.cols || item.widgetList || item.rows
     html += `<${item.elementName}`
     const options = item.options
     for (let key in options) {
      html += ` ${key}="${options[key]}"`
     }
     html += `>
     `
     if (children && children.length) {
       generateHtml(children)
     }
     html += `</${item.elementName}>`
    }
  }
  generateHtml(schema)
  return `
    <template>
      <div>
         ${html}
      </div>
    </template> 
  ` 
}

// 用来生成替换模版中的 data，methods， lifeCycles的内容
function parseSchemaToCode(schema, indent) {
  const indentStr = [getIndentStr(indent)];
  const code = [];
  for (const name in schema) {
    const schemaItem = schema[name];
    if (isJSExpression(schemaItem)) {
      code.push(`${indentStr[0]}${name}: ${schemaItem.value},`);
    } else if (isJSFunction(schemaItem)) {
      code.push(
        `${indentStr[0]}${schemaItem.value
          .replace(/^function\s*/, '')
          .replace(/\n\s*/g, `$&${indentStr[0]}`)},`
      );
    } else {
      const type = isString(schemaItem)
        ? guessStrValueType(schemaItem)
        : guessValueType(schemaItem);
      code.push(
        `${indentStr[0]}${name}: ${
          type === 'String' ? JSON.stringify(schemaItem) : schemaItem
        },`
      );
    }
  }
  return code.join('\n');
}

// 用来生成 props的内容
function parsePropsToCode(schema, indent) {
  const indentStr = [getIndentStr(indent)];
  const code = [];

  for (const name in schema) {
    const schemaItem = schema[name];
    if (isJSExpression(schemaItem)) {
      code.push(`${indentStr[0]}${name}: {`);
      indentStr.unshift(indentStr[0] + '  ');
      code.push(`${indentStr[0]}type: ${guessValueType(schemaItem.value)},`);
      code.push(`${indentStr[0]}default: ${schemaItem.value},`);
      indentStr.shift();
      code.push(`${indentStr[0]}},`);
    } else if (isJSFunction(schemaItem)) {
      code.push(`${indentStr[0]}${name}: {`);
      indentStr.unshift(indentStr[0] + '  ');
      code.push(`${indentStr[0]}type: Function,`);
      code.push(
        `${indentStr[0]}default${schemaItem.value
          .replace(/^function[^(]*/, '')
          .replace(/\n\s*/g, `$&${indentStr[0]}`)},`
      );
      indentStr.shift();
      code.push(`${indentStr[0]}},`);
    } else if (schemaItem != null && schemaItem !== '') {
      const type = isString(schemaItem)
        ? guessStrValueType(schemaItem)
        : guessValueType(schemaItem);
      code.push(`${indentStr[0]}${name}: {`);
      indentStr.unshift(indentStr[0] + '  ');
      code.push(`${indentStr[0]}type: ${type},`);
      code.push(`${indentStr[0]}default: ${schemaItem}`);
      indentStr.shift();
      code.push(`${indentStr[0]}},`);
    } else {
      code.push(`${indentStr[0]}${name}: {},`);
    }
  }
  return code.join('\n');
}

// 将 widgetList 转换为 html
function htmlCode (schema) {
  return defaultCode.replace(
      /\s*\/\*@{html:(\d+)}\*\//,
      (matched, placeholder, indent) => {
        const html = parseSchemeToHtml(schema)
        return html.trim() ? matched.replace(placeholder, html) : '';
      }
    )
}

function jsCode() {
  // defaultCode 就是.vue模版
  return defaultCode
    .replace(
      /\s*props: {(\s*\/\*@{props:(\d+)}\*\/)\s*},/,
      (matched, placeholder, indent) => {
        const code = schema.props
          ? '\n' + parsePropsToCode(schema.props, Number(indent))
          : '';
        return code.trim() ? matched.replace(placeholder, code) : '';
      }
    )
    .replace(
      /\s*data: \(\) => \({(\s*\/\*@{data:(\d+)}\*\/)\s*}\),/,
      (matched, placeholder, indent) => {
        const code = schema.state
          ? '\n' + parseSchemaToCode(schema.state, Number(indent))
          : defaultStateCode;
        return code.trim() ? matched.replace(placeholder, code) : '';
      }
    )
    .replace(
      /\s*methods: {(\s*\/\*@{methods:(\d+)}\*\/)\s*},/,
      (matched, placeholder, indent) => {
        const code = schema.methods
          ? '\n' + parseSchemaToCode(schema.methods, Number(indent))
          : '';
        return code.trim() ? matched.replace(placeholder, code) : '';
      }
    )
    .replace(/\s*\/\*@{lifeCycles:(\d+)}\*\//, (_, indent) => {
      const code = schema.lifeCycles
        ? '\n' + parseSchemaToCode(schema.lifeCycles, Number(indent))
        : '';
      return code.trim() ? code : '';
    })
    .trimStart();
}
```
 以上就完成由schema转换vue源码的所有逻辑