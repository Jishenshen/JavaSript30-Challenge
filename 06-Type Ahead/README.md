# 项目效果：

在输入框中输入一个词，迅速匹配，找出词的城市名称或者州名，城市的来源是通过加载页面时从网络中异步获得的 JSON 数据。

初始文档中提供了 HTML 和 CSS，我们需要补全 JS 代码。这个挑战是 Ajax 的预热练习，在异步方面用到了一些目前还未被完全支持的新特性，但很好用。

# 难点

1. 每个搜索结果的样式
2. 显示搜索结果

## css

1. 如何实现奇偶数显示框的旋转：`rotateX`指绕着 x 轴旋转,并通过 perspective 改变

## javascript

- 在这个挑战中，主要是利用 .json()，以使用 JSON 对象来读取 Response 流中的数据，读取之后，Body 的 body.Uesd 属性值会变为已读。另外较为常用的方法还有：blob()、text()、arrayBuffer()、formData()。
- 用 `.then` 来执行操作
  ![fetch data](https://camo.githubusercontent.com/30c9c481782b47a6d07251ff9e5d3a1d13493b9b/68747470733a2f2f636c2e6c792f3134334e325231623354316f2f496d616765253230323031372d30312d30332532306174253230392e31352e3337253230414d2e706e67)
- <b>数组扩展语法<b>
  将数据储存到 cities 这个数组中时，如果直接 `push(data)`,此时 cities 的 length 仅为 1，因此正确的语法为 `push(...data)`,涉及到的知识点为[ES6 中的数组扩展语法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

- <b> 正则表达式<b>

  ```js
  g(global)->全局匹配
  i(ignoreCase)->忽略大小写匹配
  m(multiline)->换行匹配
  ```

- map & forEach: 本人试着在 displayResult 的函数里，用 forEach 遍历 place,但是无法用 join()，并且搜索结果为 undefined, 这是为什么呢？map 和 forEach 到底有什么区别呢？forEach()方法不会返回执行结果，而是 undefined。也就是说，forEach()会修改原来的数组。而 map()方法会得到一个新的数组并返回
