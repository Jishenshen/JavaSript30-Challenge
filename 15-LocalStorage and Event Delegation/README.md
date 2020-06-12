# Day15 Local Storage and Event Delegation

本项目是使网页模拟菜单的效果，在页面中添加新的菜品，而且在页面刷新之后也不清空。

现在的初始页面中，点击提交按钮（Add Item）时页面默认触发 submit 事件，并重新加载页面，这导致重新加载之后的页面中，已丢失刚提交的内容。我们需要做的是完成 JavaScript 及 css 部分的内容，以实现目标效果。

## CSS

### 1. SVG

1. it’s not `background-color`, it’s `fill`
