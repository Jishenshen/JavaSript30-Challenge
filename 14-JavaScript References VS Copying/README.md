# Day14 - JavaScript References VS Copying

第十四天我主要练习的是 JavaScript 的变量引用和变量复制。简单一句话总结就是：基本类型按值操作，而对象类型由引用操作。 （在 console 面板中调试运行）

## 按值操作(copy)

基本类型由值操作。以下类型在 JavaScript 中被视为基本类型：

`String`

`Number`

`Boolean`

`Null`

`Undefined`

这意味着如果我们将变量定义为基本类型，然后将另一个变量定义为之前定义的那个变量。 则第二个变量将复制第一个变量的当前值。对第一个变量的任何更改都不会影响第二个变量，反之亦然。

### 实例

```javascript
let name = "lux";
let name2 = name;
console.log(name, name2); //lux,lux

name = "luxname";
console.log(name, name2); //luxname,lux
```

## 通过引用操作(reference)

对象 Object 类型是按引用操作的，如果它不是基本类型中的一个，那么它就是对象，这里如果我们细究的话，JavaScript 中每一个东西都可以当做对象，甚至是基本的类型（不包括 null 和 undefined），但我们尽量不要钻这个牛角尖。

一些 JavaScript 中的对象：

`Object`

`Function`

`Array`

`Set`

`Map`

### 实例

假设我们声明一个变量并将其定义为一个对象，然后声明另一个变量并将其定义为第一个变量：

```javascript
const players = ["Wes", "Sarah", "Ryan", "Poppy"];
const playersCopy = players;
console.log(players, playersCopy); //["Wes", "Sarah", "Ryan", "Poppy"]
//["Wes", "Sarah", "Ryan", "Poppy"]
```

如果我们调用这两个变量中的任何一个，并更改其中的属性值，那么这两个变量都会相应的发生变化。

```javascript
playersCopy[3] = "Lux";
console.log(players, playersCopy); //["Wes", "Sarah", "Ryan", "Lux"]
//["Wes", "Sarah", "Ryan", "Lux"]
```

## 真正的 复制

- Array.prototype.slice()
  由于运行 slice 得到的结果是一个对原数组的浅拷贝，原数组不会被修改。所以如果修改这两个数组中任意 一个，另一个都不会受到影响。
- Array.prototype.concat()
  concat() 方法是用来合并数组的，它也不会更改原有的数组，而是返回一个新数组，所以可以将 players 数组与一个空数组合并，得到的结果就符合预期了。
- 扩展语法[...]
  ```javascript
  const playersCopy4 = [...players];
  playersCopy4[3] = "jeff";
  console.log(playersCopy4);
  ```
