# 字符编码
  - ASCII
    适用于英语和欧洲国家语言的字符编码，用8个字节表示，第一个字节时0，后7个字节表示字符编码。
  - GBK
    适用于汉字的字符编码
  - Unicode
    统一码，世界上所有字符编码的集合。
  - UTF-8
    Unicode字符编码的实现之一，是变长编码，由1-4个字符组成。

# http1.1连接管理模型
  请看-----网络协议.emmx

# http2.0优势
  - 压缩 HTTP 1.1 头部字段
  - 支持服务端推送
  - 请求流水线，多个请求在一个 TCP 连接内
  - 修复 HTTP1.1 的队头阻塞问题
  - HTTP2.0 报文非明文，以二进制传递

社招中级前端笔试面试题总结
https://juejin.cn/post/6844903605107965960
2018大厂高级前端面试题汇总
https://juejin.cn/post/6844903695411314696 

# 触发 reflow 的操作有哪些？
  - 获取盒子尺寸
    ele.offsetWidth ele.offsetHeight
  - 获取window尺寸
  - focus() API
  - getComputedStyle() 计算元素样式
  - 获取滚动条位置，设置滚动条
  - 表单的focus() 和 select() API

# 路由的动态加载模块
  Vue 路由动态加载（Vue 路由懒加载）需要用到 Vue 异步组件和 Webpack 代码分割功能。
  Vue 异步组件以工厂函数方式定义组件，且工厂函数会异步解析组件。只有在组件被渲染时，才会触发工厂函数，并缓存结果。
  Webpack 代码分割将代码分割到不同的bundle中。
  将 Vue 异步组件和 Webpack 动态导入配合使用，就能形成一个能够被 Webpack 自动代码分割的异步组件。
  const Foo = () => import('./Foo')
  ## 异步组件按组分块
  使用Webpack 动态导入的命名 chunk，即通过 /* webpackChunkName: 'group-foo' */ 注释语法提供chunk name。

# 介绍路由的history
  Vue路由有hash模式和history模式。默认是hash模式
  - hash模式使用 URL 的hash完整模拟一个 URL，URL改变不会重新加载页面。
  - history模式使用 history.pushState API 完成 URL跳转，需要重新加载页面。
    history模式需要后台配置支持。未匹配到静态资源的 url，统一返回 index.html 页面。
    nginx 配置如下
    location /{
      try_files $uri $uri/ /index.html
    }
    由于所有未匹配url统一返回 index.html 页面，浏览器就不会返回404页面，故在路由中添加通配符，
    定义未匹配路由，跳转到404页面。

# Web 安全漏洞和预防措施
  https://blog.fundebug.com/2019/01/25/11-security-flaws-for-web-application/
  - SQL 注入
    方式：外部输入增删改查数据库
    措施：过滤外部输入内容
  - XSS（跨站脚本攻击） 攻击
    方式：
      1. 反射型：URL携带恶意代码，拼接 HTML 返回浏览器
      2. 存储型：恶意代码被提交到数据库，拼接 HTML 返回浏览器
      3. DOM型：js取出 URL 中恶意代码，解析并执行；
         innerHTML、v-html渲染html 字符串。
    措施：后端防范反射型和存储型
         前端使用转义过滤函数过滤html 字符串，防范DOM型
  - CSRF（跨站请求伪造） 攻击
    方式：
      1. 第三方网站利用用户登录凭证冒充用户发起请求攻击本域，无需窃取数据
      2. 攻击者有权限在本域发布评论（域名、图片等UGC），攻击者即可在本域绕过同源策略发起攻击。
    措施：
      
      1. 自动防御策略----同源验证
        跨域请求验证 Origin
        缺点：IE11 和 302重定向无法携带 Origin
        验证 Referer
        缺点：设置特定的属性，可不携带 Referer
      2. 主动防御策略----token 验证或双重Cookie验证配合Cookie SameSite 属性
         1. 生成 token，每次请求都携带 token 验证
         2. 在请求参数中携带 Cookie，服务器验证 Cookie
         3. Cookie SameSie 属性添加 Static（对用户不友好）
            Lax（默认值，导航到第三方网站的GET请求才携带）
      3. 校验用户上传的图片链接
      4. 用户打开其他用户发布的链接，需告知风险
    https://segmentfault.com/a/1190000016659945
  - DDoS 攻击
    后端限制单个用户流量和IP
  - 文件上传漏洞
    严格限制上传文件类型和上传目录执行权限，防范 webshell 攻击。

# CORS 跨域资源共享
  CORS 是一种 W3C 标准，全称是”跨域资源共享“。允许浏览器向跨源服务器发送 XMLHttpRequest 请求或者 fetch 请求，以解决
  Ajax 不能发送跨源请求的限制。

  CORS 请求分为 简单请求 和非简单请求（预检请求） 2种。
  withCredentials 值
  若浏览器发送 CORS 请求，需要携带 Cookie，则 withCredentials 设置为 true。
  且服务器响应 Access-Control-Allow-Origin 的值必须明确指定为请求的 Origin，
  Access-Control-Allow-Credentials也需设置为 true。
  浏览器方可接受正常的响应。
  1. 简单请求
     以GET POST HEAD 为主，包含部分字段。
     浏览器发起 CORS 请求，在请求头中添加 Origin 字段，即该请求的站点（协议、域名、端口）。
     服务器收到 CORS 请求后，验证 Origin 字段，若 Origin 的源在允许范围内，则返回响应，并携带 Access-Control-Allow-Origin 字段。否则，返回响应，不携带该字段。
     浏览器收到响应后，检查是否包含 Access-Control-Allow-Origin 字段，没有则抛出一个错误，被XMLHttpRequest 的 onerror
     回调函数捕获。

     CORS 请求的响应包含以下3种字段
     - Access-Control-Allow-Origin
       值为请求的 Origin 的值，或者 *。* 表示任意接受域名的请求
     - Access-Control-Allow-Credentials
       默认值为 false，表示不允许发送 Cookie。
     - Access-Control-Expose-Headers
       可选。值为浏览器向服务器请求暴露的字段名。
  2. 非简单请求（预检请求）
     即对服务器有特殊要求的请求，例如：OPTIONS 请求
     浏览器在发送非简单请求之前，先向服务器发送一次 OPTIONS 请求，
     携带 Origin、Access-Control-Allow-Headers、Access-Control-Allow-Method至服务器。
     服务器检验后允许这次请求，则返回响应携带如下字段
     Access-Control-Allow-Origin、Access-Control-Allow-Headers、Access-Control-Allow-Methods、
     Access-Control-Allow-Credentials、Access-Control-Max-Age
     Access-Control-Max-Age为预检请求的过期时间，在过期时间内，再次发起非简单请求，和简单请求一样。
  
  http://www.ruanyifeng.com/blog/2016/04/cors.html
  https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS

# CORS 和 JSONP 的区别？
  相同点：都是为了解决跨域限制。
  不同点：JSONP 只能发起 GET 请求，可以向老式浏览器和不支持 CORS 的浏览器发起跨域请求
         CORS 可以发送任何类型的 HTTP 请求。

# 浏览器同源策略及规避方法（如何解决跨域的问题）
  浏览器同源策略是浏览器安全的基石，保证用户信息的安全，防止恶意网站获取用户数据。
  受同源策略限制的内容
  - Cookie、LocalStorage、IndexDB
  - DOM
  - AJAX
  跨域方式：
  - 同源
    - Cookie：一级域名相同，二级域名不同，Cookie设置一级域名，二级域名可以拿到Cookie
    - iframe：iframe子窗口，只能和同源的父窗口通信
    - LocalStorage：同源限制
  - 不同源
    - 片段识别符：URL #后面的字符，修改不会刷新页面，监听 pushState事件
    - window.name：同窗口获取window.name
    - postMessage（跨文档通信）API：监听message事件
    - JSONP：只能使用 GET 请求
    - WebSocket：不受同源策略限制
    - CORS：W3C 标准，是跨域的最佳解决方案
    - Node中间件或Nginx反向代理，服务器向服务器发送请求不受同源策略限制，可绕过同源策略。

  https://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html

# 什么时候需要用到CORS？
  - 使用 XMLHttpReques、fetch 发送跨域请求
  - CSS 中通过@font-face 使用跨源字体
  - WebGL 贴图
  - 使用 drawImage 将 images/video 绘制到 canvas

# HTTP 中 Origin 请求头和 Referer 请求头的区别？
  - Origin 请求头指请求来自于哪个站点，在 CORS 和 POST 请求中携带
  - Referer 请求头是当前页面来源页的URL，服务端一般使用 Referer 请求头识别访问来源，
    可用于统计分析、日志记录、缓存优化。
    Referer 可能暴露用户的浏览历史，涉及到用户隐私问题。
    以下几种情况 Referer 请求头为空
    1. 来源页面采用协议为本地 file 或者 data URI 
    2. 从 https 页面跳转到 http页面
    3. 浏览器地址栏输入
    4. http重定向
  https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Origin
  https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Referer
  https://segmentfault.com/a/1190000024540592

# 常见Http请求头
  请看-----网络协议.emmx
# 移动端适配1px的问题
  请看-----移动端.emmx
# 介绍flex布局
  请看-----CSS.emmx
# css方式设置垂直居中
  请看-----css垂直居中
# 居中为什么用transform，而不是margin top/left
  请看-----CSS.emmx
  https://juejin.cn/post/6844903753783443463

# 使用过webpack里面哪些plugin和loader
  请看-----Webpack.emmx
# webpack里面的插件是怎么实现的
  请看-----Webpack.emmx
  项目webpack-loader

# dev-server是怎么跑起来
  请看-----Webpack.emmx
  dev-server是怎么跑起来

# 项目优化

# 抽取公共文件是怎么配置的
使用 optimization 配置抽取多入口项目公共文件

# 项目中如何处理安全问题

# 怎么实现this对象的深拷贝

# 表单可以跨域吗
  请看-----浏览器.emmx（form是否跨域）

# promise、async有什么区别














# 讲讲 requesAnimationFrame API

# 对async、await的理解，内部原理

# 深拷贝、浅拷贝原理和代码

# 数组扁平化

# 延时函数

# 防抖函数

# 节流函数

# 树数据扁平化

# 如何安全处理富文本，防止xss攻击？

# 有哪几种跨域的方式？

# 什么情况下会遇到跨域，怎么解决？

# js存储方式

# css居中的几种方式？

# js 常见的报错

# 数组中会改变原始值的API

# 字符串中会改变原始值的API

# Vue diff算法

# 微信小程序渲染过程，内核？

# JavaScirpt 执行机制

# Web 性能优化

# 如何处理大文件上传

# Web 安全的建议

# 长列表优化

# Pdf分页导出

# exports、module.exports和export、export default

# Vue原理

# 说说浏览器缓存
