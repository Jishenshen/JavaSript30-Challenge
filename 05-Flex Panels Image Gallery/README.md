# Day05 - Flex Panel Gallery

第五天的练习是能够使用弹性布局（flex 布局）创建一个简单的页面，包含基本的动画效果。点击某一图片，可以放大该图片，并且上下有文字滑出，再次点击该图片，回到初始的状态。

## CSS

- `.class >*` Child combinator，指改 class 下的所有后代，官方[文档](https://www.w3.org/TR/selectors/#child-combinators)
- `.panel > *:first-child`: 选中每一个 panel 下面的第一个后代
- `panel > *:nth-child(x)`: 选中每一个 panel 下面的第 x 个后代
- `lex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`,因此属性`<'flex-grow'>` 定义项目的放大比例，默认为 0，即如果存在剩余空间，也不放大。`flex-shrink`属性定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小。`flex-basis`属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为 auto，即项目的本来大小。`flex: 1 0 auto`

  > 非常详细及完整的 flex 用法中文[讲解](https://www.jianshu.com/p/4290522e1560)

- `.a.b` is one or more elements with both classes.
    <div class="a b">(target)</div>

  `.a .b` is one or more elements with class b with any parent element with class a
  <div class="a"><div class="b">(target)</div></div>

- transformY(a%): A percentage value refers to the height of the <b>reference box</b> defined by the transform-box property

## Javascript

- this.classList.toggle('open'); 类名的切换，如果有.open 类，就移除该类，反之亦然。

- transitionend 对每一个 div 监听 transitionend 事件，当.open 类触发的动画结束后会同时触发该事件，通过 event.propertyName 可以得到以上动画的名称，但是在 Safari 浏览器中，event.propertyName === flex，在 Chrome 和 Firefox 浏览器中，event.propertyName === flex-grow，因此可以通过.includes('flex')方法，只要属性名中包含‘flex’字符串，就继续执行。

- 纯 css 实现曲线运动：贝塞尔曲线(cubic-bezier)

- this = e.currentTarget

- 文字的移动动画:如果除去字体大小的变化，具体的动画细节其实是这样的：

图片展开：微微压缩一段距离 -> 展开图片 -> 文字向中心移动<br>
图片压缩：微微展开一段距离 -> 压缩图片 -> 文字向上下移动
