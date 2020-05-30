# 09 Dev Tools Domination

第九天的练习是主要是为了熟悉和掌握常见的非常有用的 Console 调试小技巧。

### 查看引发节点属性发生变化的 JavaScript，使用 attribute modification breakpoints 选项

### 格式化输出,console.log 支持的格式标志有:

1. %s 占位符
2. %d 或 %i 整数
3. %f 浮点数
4. %o%O object 对象
5. %c css 样式

- console.log()、console.info()、console.debug()的作用都是在浏览器控制台打印信息的。

使用最多的是 console.log()。console.info()和 console.debug()本质上与 console.log()没有区别。是 console.log()的另一个名字而以，可以理解为它们三个其实就是同一个，只不过名字不一样。

### viewing dom element: 1. console.log(p); .log 输出这个 DOM 的 HTML 标签。

2. console.dir(p); .dir 则会输出这个 DOM 元素的属性列表。
