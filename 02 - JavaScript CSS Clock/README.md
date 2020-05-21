# 难点

想要实现 Clock 效果，大致思路和解决方案如下：

- 显示当前时间
- 通过时分秒对一圈 360 度，进行映射，确定每一个指针所需旋转的角度。
- 通过 CSS 的 transform：rotate(deg)，来实时的调整指针在键盘中的位置。

### css 难点

- 如何控制指针的转动，这里需要注意几个 css 的方法
  `transform-origin: 100%` 设置旋转元素的旋转原点，多数是拿来配合 transform：rotate（）用

- 如果 position : absolute ，如何又相对定位？

Answer: 就是相对父元素，的绝对定位。

当父元素的 position 设为 relative 时，其子元素的 absolute position 是按照父元素的相对位置来的

因此 用 absolute 定位时，要把其上一级的元素样式属性 position 设置为 relative。

### JS

- 在 Javascript 部分的代码相对简单，主要分别获取当前时间的时分秒，在通过转换到旋转的度数，通过设置各个指针的 CSStransform 属性，控制其旋转值。

但到目前为止,如果没有最后`setDate()`，当秒针指到 12 时，秒针的度数会经历一个骤变（450deg->90deg->6deg）;或者刷新一下，在这时指针会突然转一圈指到 90 度再回来，感觉很怪异，因此，只在页面第一次加载时 new 一次 Date 对象，此后每秒直接更新角度值

- 顺便记录一个用 CSS Animation 制作时钟的很棒的[教程](https://cssanimation.rocks/clocks/)
