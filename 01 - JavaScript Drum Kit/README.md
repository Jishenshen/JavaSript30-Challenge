# 难点

想要实现 drum kit 效果，大致思路和解决方案如下：

- 检测到键盘上什么键被按下--监听 keydown 事件
- 在按键被按下的时候，播放音效--audio.play()
- 在按键被按下的同时，播放动画--Element.classList.add('className')
- 在动画结束后，移除动画，不然之后再点击不会有任何效果--Element.classList.remove('className')

## 1. Javascript

- ## 获取文档中有 "key-code" 属性的 <html> 元素：

```javascript
document.querySelector("a[target]");
```

因此，获取 audio 的 key-code 及 li 的 keycode 方法如下

```javascript
let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
let key = document.querySelector(`li[data-key]="${e.keyCode}"`);
```

- ## Array.from

> The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.

将所有的 each-item 都放在一个名为 keys 的 array 里

## 2. css 属性的设置要点

- `transform: scale(1.1)`;--该属性在键盘被点击时将该元素缩放至原来的 1.1 倍。

- `.key{border: .4rem solid black;} .playing{border-color: #ffc600;}` --这两条属性在按键点击的时候改变边框颜色。

  > `text-shadow: h-shadow v-shadow blur-radius color|none|initial|inherit;`

- `.each-item{text-shadow: 0 0 .5rem black;} .playing{box-shadow: 0 0 1rem #ffc600;}` --这两条属性在按键点击的时候改变阴影的效果

- `transition: all .07s ease;` --定义以上动画在 0.07 秒内完成。
