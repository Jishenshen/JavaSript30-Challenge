# Day23 Speech Synthesis

第 23 天要做一个语音的记事本类似的场景，输入一段内容，选择不同的语言可以进行朗读。还可以选择不同的语速和语调。

## 思路

首先我们来明确一下这样的效果思路应该如何走

- 设置语言下拉框，并将所选择的语言设置为语音的语言
- 监听语调和语速的滑动条
- 可以修改 textarea 的内容
- 监听开始和暂停按钮

## css

1. 针对 button 点击会有移动的效果，此案例将 button 在 active 情况下的 top 值改变，但是要注意他需要是`position: relative`,如果是 display 的排布方式，无法正常使用

```css
button:active {
  top: 2px;
}
```

## JavaScript

- `SpeechSynthesis.getVoices()`：获取所有的语言列表，代表在当前语音对象上所有可用的语言；
- `SpeechSynthesis.cancel()`：结束，结束当前的语音状态，并将当前语音内容清空；
- `SpeechSynthesis.pause()`：暂停，暂停当前的语音状态，当不清空语音内容，可以继续播放；
- `SpeechSynthesis.speak()`：播放，将文字内容加入到播放序列中并开始播放语音；
- `SpeechSynthesis.resume()`：继续，当语音处于暂停状态的时候，继续播放该语音；
