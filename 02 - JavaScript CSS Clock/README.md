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
