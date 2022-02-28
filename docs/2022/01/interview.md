# [this 指向详细解析（箭头函数）](https://www.cnblogs.com/dongcanliang/p/7054176.html)

# [JS理解正则表达式](http://caibaojian.com/javascript-regexp-2.html)

# DNS递归查找的弊端
客户机与本地域名服务器通过递归查找，本地域名服务器与根域名服务器通过迭代查找。
递归查找是不断的调用自身，直到条件满足，在此期间，本地域名服务器会在一定时间内缓存递归查找的结果。然后本地域名服务器每时每刻与不同的客户机通信，递归查找占用了本地域名服务器的内存，将影响本地域名服务器的响应速度。
缺点：
1、递归查找占用本地域名服务器内存，影响本地域名服务器响应速度
2、DNS服务器允许递归查找，将产生安全漏洞，攻击者执行DNS扩大攻击导致DNS缓存中毒。
## 参考
- [递归和迭代解析在DNS中的区别](https://www.bilibili.com/read/cv10981869?ivk_sa=1024320u)
- [DNS-权威服务器禁止递归查询](http://t.zoukankan.com/hxlinux-p-12976559.html)

# ES5继承
- 原型链继承
```js
function Parent () {
  this.name = 'Parent'
  this.sayName = function () {
    console.log(this.name)
  }
}

function Child () {
  this.name = 'Child'
}

Child.prototype = new Parent()
Child.prototype.constructor = Child
var child = new Child()
child.sayName()
```

- 构造函数继承
```js
function Parent (form) {
  this.name = 'Parent'
  this.sayName = function () {
    console.log(this.name)
  }
  this.form = form
}

function Child (form) {
  Parent.call(this, form)
  this.name = 'Child'
}

var child = new Child('Wuhan')
child.sayName()
console.log(child.from);
```

# 数组去重，不使用数组方法
```js
function unique (arr) {
  const map = new Map(), res = []
  for (const k in arr) {
    if (!map.get(arr[k])) {
      res.push(arr[k])
    }
    map.set(arr[k], k)
  }
  return res
}
```

