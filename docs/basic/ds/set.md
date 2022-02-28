---
sidebarDepth: 2
title: '集合'
tags: 
  - 数据结构
---

## 集合是什么
 集合是一种无序且唯一的数据结构。es6中添加了集合，名为set。集合常用于的场合：去重，判断某个元素是否在集合中、求交集。

### js中的集合使用
```js
// 去重
const arr = [1, 1, 2, 2];
const arr2 = [...new Set(arr)];

// 判断元素是否在集合中
const set = new Set(arr);
const has = set.has(2);

// 求交集
const set2 = new Set([2, 3]);
const set3 = new Set([...set].filter(item => set2.has(item)));
```

## set 的使用

- 使用set对象的api有：add，delete，has，size
- 迭代set：可以支持多种迭代，Set和Array互相转换，求交集/差集

### 代码时刻
```js
let mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add(5); // 这里只会保留一个5
mySet.add('some'); // 可以添加字符串
let o = { a: 1, b: 2 };
mySet.add(o);
mySet.add({a: 1, b: 2}); // 这里可以设置进去两个相似的对象，这是因为这两个对象其实存储的位置是不一样的，本质上是两个完全不同的对象

const has = mySet.has(1); // true
const has2 = mySet.has(o); // true

mySet.delete(5); // 会把5删掉

const size = mySet.size; // 可以获取到集合的尺寸

// 迭代 集合的方法
// 1、 for of 方法
for(let item of mySet) console.log(item);
// 2
for(let item of mySet.keys()) console.log(item);
// 3
for(let item of mySet.values()) console.log(item);

for(let [key, value] of mySet.entries()) console.log(key, value); // key 和 value是一样的
// Object {a: 1, b: 2}
// 1 1
//some text some text

// Set 和 Array 互转
const myArr = [...mySet]; // 1 Set -> Array
const myArr = Array.from(mySet); // 2

const mySet2 = new Set([1, 2, 3]);

// 交集 和 差集
// 交集
const intersection = new Set([...mySet].filter(x => mySet2.has(x)));
// 差集
const difference = new Set([...mySet].filter(x => !mySet2.has(x)));
```