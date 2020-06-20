# Day18 - Adding Up Times with Reduce

- 第十八天也是一组数组操作，目的是将一个元素是时长的数组，算出其中的总时长，为多少小时，分钟，秒。

- const [mins, secs] = timeCode.split(':').map(parseFloat);:这段代码的作用是将时间戳（“5:40”）先以：分开，得到['5','40']这个数组，但是使用.split(':')分开的两项分别都是字符串，然后使用`.map(parseFloat)`将这两个字符串转换为 float 类型
