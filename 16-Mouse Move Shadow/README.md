# Day16 Mouse Move Shadow

第十六天主要是练习是一个较常用的效果：鼠标移动时，元素的字体阴影随着鼠标移动的方向发生改变，达到字体阴影随着鼠标一起走的效果。

#### 尺寸汇总

![窗口尺寸汇总图](https://pic002.cnblogs.com/images/2012/277239/2012092121330354.jpg)

注意:offsetWidth 的值总是比 clientWidth 的值大。
clientWidth 是对象看到的宽度（不含边线）
offsetWidth 是对象看到的宽度（含边线，如滚动条的占用的宽）

![图解事件坐标 screenX、clientX、pageX, offsetX 的区别](https://img-blog.csdnimg.cn/20181130130831353.jpg)

<b>this</b> = the thing you listened on.

<b>target</b>= is going to be the thing that it actually triggered on.
