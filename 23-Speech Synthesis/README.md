# Day23 Speech Synthesis

第 23 天要做一个语音的记事本类似的场景，输入一段内容，选择不同的语言可以进行朗读。还可以选择不同的语速和语调。

## css

1. 针对 button 点击会有移动的效果，此案例将 button 在 active 情况下的 top 值改变，但是要注意他需要是`position: relative`,如果是 display 的排布方式，无法正常使用

```css
button:active {
  top: 2px;
}
```

## JavaScript
