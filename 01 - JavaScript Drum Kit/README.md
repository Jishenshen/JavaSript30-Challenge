# 难点

### 1. 获取文档中有 "key-code" 属性的 <html> 元素：

```javascript
document.querySelector("a[target]");
```

因此，获取 audio 的 key-code 及 li 的 keycode 方法如下

```javascript
let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
let key = document.querySelector(`li[data-key]="${e.keyCode}"`);
```

### 2. css 属性的设置要点

- `transform: scale(1.1);--该属性在键盘被点击时将该元素缩放至原来的1.1倍。`

- `.key{border: .4rem solid black;} .playing{border-color: #ffc600;}--这两条属性在按键点击的时候改变边框颜色。`

  > `text-shadow: h-shadow v-shadow blur-radius color|none|initial|inherit;`

- `.key{text-shadow: 0 0 .5rem black;} .playing{box-shadow: 0 0 1rem #ffc600;}--这两条属性在按键点击的时候改变阴影的效果`

- `transition: all .07s ease;--定义以上动画在0.07秒内完成。`
