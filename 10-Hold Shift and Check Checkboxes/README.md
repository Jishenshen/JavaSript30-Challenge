# Day10 Hold Shift to Check Multiple checkboxes

## HTML & CSS

<b>布局问题：<b>整个页面并不是用 div.left 及 div.right 包裹，线条全部用了 border-bottom or border-left，为了让线条没有 margin，所以通过调节 p 的 padding 来调节每个 item 的边距，如果用 margin，那么分界线也会有 margin

<b>checkbox 的选中问题<b>：只要点击一个 checkbox,即当 checkbox 的 checked 状态变为 true 时，右边栏内容出现删除线。在这里，我们的解决方案是使用伪类选择器及相邻兄弟选择器('+')将每个 item 里的 checkbox 及 p 相连

```css
input:checked + p {
  background-color: #f9f9f9;
  text-decoration: line-through;
}
```

具体解析可看[这篇文章](https://css-tricks.com/almanac/selectors/c/checked/)

> 相邻兄弟选择器+：可选择紧接在另一元素后的元素，且二者有相同父元素。

## Javascript

- 思路：监听每一个 checkbox 的单击事件，并触发 checkHandle 函数
