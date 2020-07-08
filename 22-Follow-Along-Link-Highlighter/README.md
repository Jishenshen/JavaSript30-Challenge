# Day22 - Follow Along Links

第 22 天的练习是一个动画练习，当鼠标移动到锚点处，会有一个白色的色块移动到当前锚点所在的位置。

## css

1. 初始化问题：
   ```css
   *,
   *:before,
   *:after {
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box;
   }
   ```
   是让所有的元素都使用 border-box ，并且包括 伪类 before, after 。并不是特殊的定义它们俩。before,after 默认的 display 是 inline， 但难免有人会把它变成 block 来用，这时候统一 box-sizing 会好操作一些。

## JavaScript

通过观察 HTML 代码结构，可以发现需要显示白色动画背景的都是 a 标签，因此首先获取到能够触发事件的 DOM 元素。
当处于动画时查看开发者工具，可以发现这个白色色块儿是一个相对于文档绝对定位的<span>，当我们的鼠标移动到<a>标签的时候，它的 top 和 left 随鼠标移动的位置的变化而动态变化，再加上我们对 CSS 的 highlight 类设置了 transition: all 0.2s;属性，因此会有动画的效果。

介绍一个比较新的 API，[object.getBoundingClientRect()](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect)，这个方法返回元素的大小及其相对于视口的位置。返回值是一个 DOMRect 对象,该对象包含了一组用于描述边框的只读属性——left、top、right 和 bottom，单位为像素。除了 width 和 height 外的属性都是相对于视口的左上角位置而言的。具体可以下图所示的边界： getboundclient
