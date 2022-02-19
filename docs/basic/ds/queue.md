---
sidebarDepth: 2
title: '队列'
tags: 
  - 数据结构
---
## 队列是什么
队列是一种先进先出的一种数据结构，js中没有队列这种数据结构，但是我们可以用Array实现队列的所有功能,如下：

```js
const queue = [];
queue.push(1);
queue.push(2);
const item1 = queue.shift(); // 移除数组的第一个元素并返回它, 会影响到原数组
const item2 = queue.shift();
```

## 需要使用队列的场景
当无法同时处理一个问题的时候，就需要先进先出的场景，比如：js异步中的任务队列，计算最近的请求数等等

### 场景一：js异步中的任务列表
我们知道js是单线程的，它无法同时处理异步中并发的任务，所以采用先进入到任务队列的任务先执行。

### 场景二：计算最近请求次数 leetcode-933
题目如下：

写一个 RecentCounter 类来计算特定时间范围内最近的请求。

请你实现 RecentCounter 类：

- RecentCounter() 初始化计数器，请求数为 0 。
- int ping(int t) 在时间 t 添加一个新请求，其中 t 表示以毫秒为单位的某个时间，并返回过去 3000 毫秒内发生的所有请求数（包括新请求）。确切地说，返回在 [t-3000, t] 内发生的请求数。

保证 每次对 ping 的调用都使用比之前更大的 t 值。

示例：

```js
输入：
["RecentCounter", "ping", "ping", "ping", "ping"]
[[], [1], [100], [3001], [3002]]
输出：
[null, 1, 2, 3, 3]

解释：
RecentCounter recentCounter = new RecentCounter();
recentCounter.ping(1);     // requests = [1]，范围是 [-2999,1]，返回 1
recentCounter.ping(100);   // requests = [1, 100]，范围是 [-2900,100]，返回 2
recentCounter.ping(3001);  // requests = [1, 100, 3001]，范围是 [1,3001]，返回 3
recentCounter.ping(3002);  // requests = [1, 100, 3001, 3002]，范围是 [2,3002]，返回 3
```
解答如下：
```js
var RecentCounter = function() {
  this.queue = []
}

RecentCounter.prototype.ping = function (t) {
  this.queue.push(t)
  while (t - this.queue[0] > 3000) {
    this.queue.shift()
  }
  return this.queue.length === 0 ? null : this.queue.length
}
```



