# Day26 Stripe Follow Along Nav

## 总体思路
首先要分别监听菜单栏中各个菜单选项的<b>鼠标进入</b> && <b>鼠标移除</b>事件，当鼠标进入菜单选项中时显示下拉菜单，并显示白色背景；鼠标移除时使下拉菜单和白色背景消失

## css

- X Y & X > Y 之间的不同点是后者只选择直接子代

选择符#container > ul 将只选择 id 为 container 的 div 的直接子代 ul。它不匹配更深层的 li 的子代的 ul。

- `position:absolute`生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。当父元素没有相对定位或绝对定位时，元素相对html定位
<b>脱离文档流，不占据文档流空间</b>

元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。

- `position:relative`仍在文档流中，不影响其他元素布局

- `position:fixed`生成绝对定位的元素，相对于浏览器窗口进行定位。

元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。

- 1. .example .pp 中间用空格隔开，表示后代选择器，选择的是.example 以内的.pp
- 2. .example.pp 中间没有空格隔开，选择的是同时具有 example 和 pp 的元素

## Javascript

```javascript
setTimeout(()=>{
    this.classList.contains('trigger-acitve') && this.classList.add('trigger-enter-active')
},150)
```
在这里我们设置了150ms的延迟之后添加trigger-enter-active类，那么可能会发生一下情况：当用户以非常快的速度在各个选项之间切换时，可能会导致还没到150ms鼠标就已经移出该选项了，导致意想不到的错误。因此在这里多加了一个判断：150ms后只有当鼠标还悬停在这个选项之中的时候，我们才添加trigger-enter-active类

