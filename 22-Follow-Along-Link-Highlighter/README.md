# Day22 - Follow Along Links

第 22 天的练习是一个动画练习，当鼠标移动到锚点处，会有一个白色的色块移动到当前锚点所在的位置。

### css

1. 初始化问题：
   ```css
   *,
   *:before,
   *:after {
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box;
   }
   ```
   是让所有的元素都使用 border-box ，并且包括 伪类 before, after 。并不是特殊的定义它们俩。before,after 默认的 display 是 inline， 但难免有人会把它变成 block 来用，这时候统一 box-sizing 会好操作一些。
