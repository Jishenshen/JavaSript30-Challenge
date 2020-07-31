# Day26 Stripe Follow Along Nav

## css

- X Y & X > Y 之间的不同点是后者只选择直接子代

选择符#container > ul 将只选择 id 为 container 的 div 的直接子代 ul。它不匹配更深层的 li 的子代的 ul。

- `position:absolute`生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。

元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。

- `position:fixed`生成绝对定位的元素，相对于浏览器窗口进行定位。

元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。

- 1. .example .pp 中间用空格隔开，表示后代选择器，选择的是.example 以内的.pp
- 2. .example.pp 中间没有空格隔开，选择的是同时具有 example 和 pp 的元素
