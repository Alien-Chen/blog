(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{531:function(n,s,e){"use strict";e.r(s);var a=e(2),t=Object(a.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("p",[n._v("对于一个低代码平台都会自定义Schema来描述搭建内容。Schema本质上是一个JSON格式的定义块，通过抽象属性定义来表达页面和组件的布局、属性配置、样式配置、数据源配置、生命周期配置配置。 以下是本项目对Schema的定义：")]),n._v(" "),s("p",[n._v("下面的代码会在全局存储起来，页面上有添加/删除都会修改到以下数据，存储在全局的 vPage中：")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('{\n  "componentName": "Page",\n  "id": "xxxx",\n  "props": {\n    "prop1": {\n       "type": String,\n       "default": Function | 具体值\n    }\n  },\n  "fileName": "/",\n  "state": {\n    "text": {\n      "type": String,\n      "value": xxxx\n    }\n  },\n  "css": "body {\\n  font-size: 12px;\\n}\\n\\n.button {\\n   width: 100px;\\n  color: #ff00ff\\n}",\n  "lifeCycles": {\n    "beforeCreate": {\n      "type": "JSFunction",\n      "value": "function () {\\n  console.log(\'did mount\');\\n}"\n    },\n    "created": {\n      "type": "JSFunction",\n      "value": "function () {\\n  console.log(\'will unmount\');\\n}"\n    },\n    // .....\n  },\n  "methods": {\n    "testFunc": {\n      "type": "JSFunction",\n      "value": "function testFunc() {\\n  console.log(\'test func\');\\n}"\n    },\n  }\n}\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br"),s("span",{staticClass:"line-number"},[n._v("35")]),s("br")])]),s("p",[n._v("以上是一个组件/页面的Schema 而组件的具体元素的schema，并且存储在全局的widgetList中，如下：")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v(" {\n    type: 'grid',\n    name: '栅格',\n    category: 'container',\n    elementName: 'el-row',\n    semanticType: 'el-row',\n    icon: 'grid',\n    cols: [],\n    style: {\n      height: {\n        value: 0,\n        isDynamic: false,\n        referenceType: '',\n        id: ''\n      }\n    },\n    options: {\n      name: '',\n      hidden: {\n        value: false,\n        isDynamic: false,\n        referenceType: '',\n        id: ''\n      },\n      gutter: 12,\n      // colHeight: 0, // 栅格列同一高度属性，用于解决栅格列设置响应式布局浮动后被挂住的问题\n      customClass: '' // 自定义类css类名\n    }\n  },\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br")])]),s("p",[n._v("有了这些schema，我们就可以通过他来产出 vue代码了")]),n._v(" "),s("h2",{attrs:{id:"生成vue代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成vue代码"}},[n._v("#")]),n._v(" 生成vue代码")]),n._v(" "),s("p",[n._v("在低代码中如何生成vue代码呢，我们需要一个基础的vue 模版，然后通过正则对模版指定内容进行替换。")]),n._v(" "),s("p",[n._v("模版如下：")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("export const defaultCode = `\n/*@{html:0}*/\nexport default {\n  data() {\n    return {\n     /*@{data:4}*/\n    }\n  },\n  props: {\n/*@{props:4}*/\n  },\n  methods: {\n/*@{methods:4}*/\n  },\n/*@{lifeCycles:2}*/ // 后面跟着的number是用户缩进用的\n}\n`;\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br")])]),s("p",[n._v("根据 vPage 的描述，匹配逻辑如下：")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("// 获取字符缩进\nfunction getIndentStr(number) {\n  let indentStr = '';\n  while (indent--) {\n    indentStr += ' ';\n  }\n  return indentStr;\n}\n\n// 获取类型\nfunction guessValueType(val) {\n  if (isString(val)) {\n    return 'String';\n  } else if (Array.isArray(val)) {\n    return 'Array';\n  } else if (isObject(val)) {\n    return 'Object';\n  }\n  return 'null';\n}\n\n// 若值是字符串 判断值的类型\nfunction guessStrValueType(val) {\n  if (val === 'true' || val === 'false') {\n    return 'Boolean';\n  } else if (!isNaN(Number(val))) {\n    return 'Number';\n  } else if (val[0] === '/' && val[val.length - 1] === '/') {\n    return 'RegExp';\n  } else {\n    try {\n      return guessValueType(JSON.parse(val));\n    } catch {\n      return 'String';\n    }\n  }\n}\n\nfunction parseSchemeToHtml(schema) {\n  let html = ''\n  function generateHtml (widgetList) {\n    for (let i = 0; i < widgetList.length; i++) {\n     const item = widgetList[i]\n     const children = item.cols || item.widgetList || item.rows\n     html += `<${item.elementName}`\n     const options = item.options\n     for (let key in options) {\n      html += ` ${key}=\"${options[key]}\"`\n     }\n     html += `>\n     `\n     if (children && children.length) {\n       generateHtml(children)\n     }\n     html += `</${item.elementName}>`\n    }\n  }\n  generateHtml(schema)\n  return `\n    <template>\n      <div>\n         ${html}\n      </div>\n    </template> \n  ` \n}\n\n// 用来生成替换模版中的 data，methods， lifeCycles的内容\nfunction parseSchemaToCode(schema, indent) {\n  const indentStr = [getIndentStr(indent)];\n  const code = [];\n  for (const name in schema) {\n    const schemaItem = schema[name];\n    if (isJSExpression(schemaItem)) {\n      code.push(`${indentStr[0]}${name}: ${schemaItem.value},`);\n    } else if (isJSFunction(schemaItem)) {\n      code.push(\n        `${indentStr[0]}${schemaItem.value\n          .replace(/^function\\s*/, '')\n          .replace(/\\n\\s*/g, `$&${indentStr[0]}`)},`\n      );\n    } else {\n      const type = isString(schemaItem)\n        ? guessStrValueType(schemaItem)\n        : guessValueType(schemaItem);\n      code.push(\n        `${indentStr[0]}${name}: ${\n          type === 'String' ? JSON.stringify(schemaItem) : schemaItem\n        },`\n      );\n    }\n  }\n  return code.join('\\n');\n}\n\n// 用来生成 props的内容\nfunction parsePropsToCode(schema, indent) {\n  const indentStr = [getIndentStr(indent)];\n  const code = [];\n\n  for (const name in schema) {\n    const schemaItem = schema[name];\n    if (isJSExpression(schemaItem)) {\n      code.push(`${indentStr[0]}${name}: {`);\n      indentStr.unshift(indentStr[0] + '  ');\n      code.push(`${indentStr[0]}type: ${guessValueType(schemaItem.value)},`);\n      code.push(`${indentStr[0]}default: ${schemaItem.value},`);\n      indentStr.shift();\n      code.push(`${indentStr[0]}},`);\n    } else if (isJSFunction(schemaItem)) {\n      code.push(`${indentStr[0]}${name}: {`);\n      indentStr.unshift(indentStr[0] + '  ');\n      code.push(`${indentStr[0]}type: Function,`);\n      code.push(\n        `${indentStr[0]}default${schemaItem.value\n          .replace(/^function[^(]*/, '')\n          .replace(/\\n\\s*/g, `$&${indentStr[0]}`)},`\n      );\n      indentStr.shift();\n      code.push(`${indentStr[0]}},`);\n    } else if (schemaItem != null && schemaItem !== '') {\n      const type = isString(schemaItem)\n        ? guessStrValueType(schemaItem)\n        : guessValueType(schemaItem);\n      code.push(`${indentStr[0]}${name}: {`);\n      indentStr.unshift(indentStr[0] + '  ');\n      code.push(`${indentStr[0]}type: ${type},`);\n      code.push(`${indentStr[0]}default: ${schemaItem}`);\n      indentStr.shift();\n      code.push(`${indentStr[0]}},`);\n    } else {\n      code.push(`${indentStr[0]}${name}: {},`);\n    }\n  }\n  return code.join('\\n');\n}\n\n// 将 widgetList 转换为 html\nfunction htmlCode (schema) {\n  return defaultCode.replace(\n      /\\s*\\/\\*@{html:(\\d+)}\\*\\//,\n      (matched, placeholder, indent) => {\n        const html = parseSchemeToHtml(schema)\n        return html.trim() ? matched.replace(placeholder, html) : '';\n      }\n    )\n}\n\nfunction jsCode() {\n  // defaultCode 就是.vue模版\n  return defaultCode\n    .replace(\n      /\\s*props: {(\\s*\\/\\*@{props:(\\d+)}\\*\\/)\\s*},/,\n      (matched, placeholder, indent) => {\n        const code = schema.props\n          ? '\\n' + parsePropsToCode(schema.props, Number(indent))\n          : '';\n        return code.trim() ? matched.replace(placeholder, code) : '';\n      }\n    )\n    .replace(\n      /\\s*data: \\(\\) => \\({(\\s*\\/\\*@{data:(\\d+)}\\*\\/)\\s*}\\),/,\n      (matched, placeholder, indent) => {\n        const code = schema.state\n          ? '\\n' + parseSchemaToCode(schema.state, Number(indent))\n          : defaultStateCode;\n        return code.trim() ? matched.replace(placeholder, code) : '';\n      }\n    )\n    .replace(\n      /\\s*methods: {(\\s*\\/\\*@{methods:(\\d+)}\\*\\/)\\s*},/,\n      (matched, placeholder, indent) => {\n        const code = schema.methods\n          ? '\\n' + parseSchemaToCode(schema.methods, Number(indent))\n          : '';\n        return code.trim() ? matched.replace(placeholder, code) : '';\n      }\n    )\n    .replace(/\\s*\\/\\*@{lifeCycles:(\\d+)}\\*\\//, (_, indent) => {\n      const code = schema.lifeCycles\n        ? '\\n' + parseSchemaToCode(schema.lifeCycles, Number(indent))\n        : '';\n      return code.trim() ? code : '';\n    })\n    .trimStart();\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br"),s("span",{staticClass:"line-number"},[n._v("35")]),s("br"),s("span",{staticClass:"line-number"},[n._v("36")]),s("br"),s("span",{staticClass:"line-number"},[n._v("37")]),s("br"),s("span",{staticClass:"line-number"},[n._v("38")]),s("br"),s("span",{staticClass:"line-number"},[n._v("39")]),s("br"),s("span",{staticClass:"line-number"},[n._v("40")]),s("br"),s("span",{staticClass:"line-number"},[n._v("41")]),s("br"),s("span",{staticClass:"line-number"},[n._v("42")]),s("br"),s("span",{staticClass:"line-number"},[n._v("43")]),s("br"),s("span",{staticClass:"line-number"},[n._v("44")]),s("br"),s("span",{staticClass:"line-number"},[n._v("45")]),s("br"),s("span",{staticClass:"line-number"},[n._v("46")]),s("br"),s("span",{staticClass:"line-number"},[n._v("47")]),s("br"),s("span",{staticClass:"line-number"},[n._v("48")]),s("br"),s("span",{staticClass:"line-number"},[n._v("49")]),s("br"),s("span",{staticClass:"line-number"},[n._v("50")]),s("br"),s("span",{staticClass:"line-number"},[n._v("51")]),s("br"),s("span",{staticClass:"line-number"},[n._v("52")]),s("br"),s("span",{staticClass:"line-number"},[n._v("53")]),s("br"),s("span",{staticClass:"line-number"},[n._v("54")]),s("br"),s("span",{staticClass:"line-number"},[n._v("55")]),s("br"),s("span",{staticClass:"line-number"},[n._v("56")]),s("br"),s("span",{staticClass:"line-number"},[n._v("57")]),s("br"),s("span",{staticClass:"line-number"},[n._v("58")]),s("br"),s("span",{staticClass:"line-number"},[n._v("59")]),s("br"),s("span",{staticClass:"line-number"},[n._v("60")]),s("br"),s("span",{staticClass:"line-number"},[n._v("61")]),s("br"),s("span",{staticClass:"line-number"},[n._v("62")]),s("br"),s("span",{staticClass:"line-number"},[n._v("63")]),s("br"),s("span",{staticClass:"line-number"},[n._v("64")]),s("br"),s("span",{staticClass:"line-number"},[n._v("65")]),s("br"),s("span",{staticClass:"line-number"},[n._v("66")]),s("br"),s("span",{staticClass:"line-number"},[n._v("67")]),s("br"),s("span",{staticClass:"line-number"},[n._v("68")]),s("br"),s("span",{staticClass:"line-number"},[n._v("69")]),s("br"),s("span",{staticClass:"line-number"},[n._v("70")]),s("br"),s("span",{staticClass:"line-number"},[n._v("71")]),s("br"),s("span",{staticClass:"line-number"},[n._v("72")]),s("br"),s("span",{staticClass:"line-number"},[n._v("73")]),s("br"),s("span",{staticClass:"line-number"},[n._v("74")]),s("br"),s("span",{staticClass:"line-number"},[n._v("75")]),s("br"),s("span",{staticClass:"line-number"},[n._v("76")]),s("br"),s("span",{staticClass:"line-number"},[n._v("77")]),s("br"),s("span",{staticClass:"line-number"},[n._v("78")]),s("br"),s("span",{staticClass:"line-number"},[n._v("79")]),s("br"),s("span",{staticClass:"line-number"},[n._v("80")]),s("br"),s("span",{staticClass:"line-number"},[n._v("81")]),s("br"),s("span",{staticClass:"line-number"},[n._v("82")]),s("br"),s("span",{staticClass:"line-number"},[n._v("83")]),s("br"),s("span",{staticClass:"line-number"},[n._v("84")]),s("br"),s("span",{staticClass:"line-number"},[n._v("85")]),s("br"),s("span",{staticClass:"line-number"},[n._v("86")]),s("br"),s("span",{staticClass:"line-number"},[n._v("87")]),s("br"),s("span",{staticClass:"line-number"},[n._v("88")]),s("br"),s("span",{staticClass:"line-number"},[n._v("89")]),s("br"),s("span",{staticClass:"line-number"},[n._v("90")]),s("br"),s("span",{staticClass:"line-number"},[n._v("91")]),s("br"),s("span",{staticClass:"line-number"},[n._v("92")]),s("br"),s("span",{staticClass:"line-number"},[n._v("93")]),s("br"),s("span",{staticClass:"line-number"},[n._v("94")]),s("br"),s("span",{staticClass:"line-number"},[n._v("95")]),s("br"),s("span",{staticClass:"line-number"},[n._v("96")]),s("br"),s("span",{staticClass:"line-number"},[n._v("97")]),s("br"),s("span",{staticClass:"line-number"},[n._v("98")]),s("br"),s("span",{staticClass:"line-number"},[n._v("99")]),s("br"),s("span",{staticClass:"line-number"},[n._v("100")]),s("br"),s("span",{staticClass:"line-number"},[n._v("101")]),s("br"),s("span",{staticClass:"line-number"},[n._v("102")]),s("br"),s("span",{staticClass:"line-number"},[n._v("103")]),s("br"),s("span",{staticClass:"line-number"},[n._v("104")]),s("br"),s("span",{staticClass:"line-number"},[n._v("105")]),s("br"),s("span",{staticClass:"line-number"},[n._v("106")]),s("br"),s("span",{staticClass:"line-number"},[n._v("107")]),s("br"),s("span",{staticClass:"line-number"},[n._v("108")]),s("br"),s("span",{staticClass:"line-number"},[n._v("109")]),s("br"),s("span",{staticClass:"line-number"},[n._v("110")]),s("br"),s("span",{staticClass:"line-number"},[n._v("111")]),s("br"),s("span",{staticClass:"line-number"},[n._v("112")]),s("br"),s("span",{staticClass:"line-number"},[n._v("113")]),s("br"),s("span",{staticClass:"line-number"},[n._v("114")]),s("br"),s("span",{staticClass:"line-number"},[n._v("115")]),s("br"),s("span",{staticClass:"line-number"},[n._v("116")]),s("br"),s("span",{staticClass:"line-number"},[n._v("117")]),s("br"),s("span",{staticClass:"line-number"},[n._v("118")]),s("br"),s("span",{staticClass:"line-number"},[n._v("119")]),s("br"),s("span",{staticClass:"line-number"},[n._v("120")]),s("br"),s("span",{staticClass:"line-number"},[n._v("121")]),s("br"),s("span",{staticClass:"line-number"},[n._v("122")]),s("br"),s("span",{staticClass:"line-number"},[n._v("123")]),s("br"),s("span",{staticClass:"line-number"},[n._v("124")]),s("br"),s("span",{staticClass:"line-number"},[n._v("125")]),s("br"),s("span",{staticClass:"line-number"},[n._v("126")]),s("br"),s("span",{staticClass:"line-number"},[n._v("127")]),s("br"),s("span",{staticClass:"line-number"},[n._v("128")]),s("br"),s("span",{staticClass:"line-number"},[n._v("129")]),s("br"),s("span",{staticClass:"line-number"},[n._v("130")]),s("br"),s("span",{staticClass:"line-number"},[n._v("131")]),s("br"),s("span",{staticClass:"line-number"},[n._v("132")]),s("br"),s("span",{staticClass:"line-number"},[n._v("133")]),s("br"),s("span",{staticClass:"line-number"},[n._v("134")]),s("br"),s("span",{staticClass:"line-number"},[n._v("135")]),s("br"),s("span",{staticClass:"line-number"},[n._v("136")]),s("br"),s("span",{staticClass:"line-number"},[n._v("137")]),s("br"),s("span",{staticClass:"line-number"},[n._v("138")]),s("br"),s("span",{staticClass:"line-number"},[n._v("139")]),s("br"),s("span",{staticClass:"line-number"},[n._v("140")]),s("br"),s("span",{staticClass:"line-number"},[n._v("141")]),s("br"),s("span",{staticClass:"line-number"},[n._v("142")]),s("br"),s("span",{staticClass:"line-number"},[n._v("143")]),s("br"),s("span",{staticClass:"line-number"},[n._v("144")]),s("br"),s("span",{staticClass:"line-number"},[n._v("145")]),s("br"),s("span",{staticClass:"line-number"},[n._v("146")]),s("br"),s("span",{staticClass:"line-number"},[n._v("147")]),s("br"),s("span",{staticClass:"line-number"},[n._v("148")]),s("br"),s("span",{staticClass:"line-number"},[n._v("149")]),s("br"),s("span",{staticClass:"line-number"},[n._v("150")]),s("br"),s("span",{staticClass:"line-number"},[n._v("151")]),s("br"),s("span",{staticClass:"line-number"},[n._v("152")]),s("br"),s("span",{staticClass:"line-number"},[n._v("153")]),s("br"),s("span",{staticClass:"line-number"},[n._v("154")]),s("br"),s("span",{staticClass:"line-number"},[n._v("155")]),s("br"),s("span",{staticClass:"line-number"},[n._v("156")]),s("br"),s("span",{staticClass:"line-number"},[n._v("157")]),s("br"),s("span",{staticClass:"line-number"},[n._v("158")]),s("br"),s("span",{staticClass:"line-number"},[n._v("159")]),s("br"),s("span",{staticClass:"line-number"},[n._v("160")]),s("br"),s("span",{staticClass:"line-number"},[n._v("161")]),s("br"),s("span",{staticClass:"line-number"},[n._v("162")]),s("br"),s("span",{staticClass:"line-number"},[n._v("163")]),s("br"),s("span",{staticClass:"line-number"},[n._v("164")]),s("br"),s("span",{staticClass:"line-number"},[n._v("165")]),s("br"),s("span",{staticClass:"line-number"},[n._v("166")]),s("br"),s("span",{staticClass:"line-number"},[n._v("167")]),s("br"),s("span",{staticClass:"line-number"},[n._v("168")]),s("br"),s("span",{staticClass:"line-number"},[n._v("169")]),s("br"),s("span",{staticClass:"line-number"},[n._v("170")]),s("br"),s("span",{staticClass:"line-number"},[n._v("171")]),s("br"),s("span",{staticClass:"line-number"},[n._v("172")]),s("br"),s("span",{staticClass:"line-number"},[n._v("173")]),s("br"),s("span",{staticClass:"line-number"},[n._v("174")]),s("br"),s("span",{staticClass:"line-number"},[n._v("175")]),s("br"),s("span",{staticClass:"line-number"},[n._v("176")]),s("br"),s("span",{staticClass:"line-number"},[n._v("177")]),s("br"),s("span",{staticClass:"line-number"},[n._v("178")]),s("br"),s("span",{staticClass:"line-number"},[n._v("179")]),s("br"),s("span",{staticClass:"line-number"},[n._v("180")]),s("br"),s("span",{staticClass:"line-number"},[n._v("181")]),s("br"),s("span",{staticClass:"line-number"},[n._v("182")]),s("br"),s("span",{staticClass:"line-number"},[n._v("183")]),s("br"),s("span",{staticClass:"line-number"},[n._v("184")]),s("br"),s("span",{staticClass:"line-number"},[n._v("185")]),s("br"),s("span",{staticClass:"line-number"},[n._v("186")]),s("br")])]),s("p",[n._v("以上就完成由schema转换vue源码的所有逻辑")])])}),[],!1,null,null,null);s.default=t.exports}}]);