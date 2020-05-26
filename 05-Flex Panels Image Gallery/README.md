# Day05 - Flex Panel Gallery

第五天的练习是能够使用弹性布局（flex 布局）创建一个简单的页面，包含基本的动画效果。点击某一图片，可以放大该图片，并且上下有文字滑出，再次点击该图片，回到初始的状态。

## CSS

- `.class >*` Child combinator，指改 class 下的所有后代，官方[文档](https://www.w3.org/TR/selectors/#child-combinators)
- `.panel > *:first-child`: 选中每一个 panel 下面的第一个后代
- `panel > *:nth-child(x)`: 选中每一个 panel 下面的第 x 个后代
- `lex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`,因此属性`<'flex-grow'>` 定义项目的放大比例，默认为 0，即如果存在剩余空间，也不放大。`flex-shrink`属性定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小。`flex-basis`属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为 auto，即项目的本来大小。`flex: 1 0 auto`

## Javascript
