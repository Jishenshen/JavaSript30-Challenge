# 完成目標

希望你今天有出汗的心理準備, 我們不会做什麼漂亮的东西

沒有 CSS 沒有 DOM element, 就是 Javascript 基本的 Array 方法运用

包含 filter, map, sort, reduce 方法

在此提供了 inventors, people 阵列, 有一些題目, 每一題会指定一个 Array Method 解题

> 第六题: 需要进入[Category:Boulevards in Paris](https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris)，打开 console 进行解题

## Task List

1. 筛选出出生在 16 世纪（1500-1599 年）的发明家。

2. 列出发明家的名和姓的数组。

3. 根据发明家的出生日期，按照从大到小的顺序进行排序。

4. 所有的发明家一共活了多少岁。

5. 按照发明家的年龄大小排序

6. 列出巴黎所有名字中包含'de'的路名。在以下网站提供的信息来做。（https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris）

7. 按照字母表的顺序，将人们的姓氏进行排序。

8. 分别计算出包含每一个种类的个数。

# 难点

- Array.prototype.sort()
  comparing their sequences of UTF-16 code units values. 因此不能直接用 sort 来对数字进行排序

- 对人名的排序，需要先用`split`将，作用是根据给的内容将 string 拆分成 array

- Array.from(): 需要提一点，由 querySelectorAll() 获取到的是一个 NodeList ，它并非是 Array 类型的数据，所以并不具有 map 和 filter 这样的方法，所以如果要进行筛选操作则需要把它转化成 Array 类型，使用示例之中的 Array.from() 来转化即可
