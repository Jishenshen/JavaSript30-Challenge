# Day15 Local Storage and Event Delegation

本项目是使网页模拟菜单的效果，在页面中添加新的菜品，而且在页面刷新之后也不清空。

现在的初始页面中，点击提交按钮（Add Item）时页面默认触发 submit 事件，并重新加载页面，这导致重新加载之后的页面中，已丢失刚提交的内容。我们需要做的是完成 JavaScript 及 css 部分的内容，以实现目标效果。

#### 功能

- 做一个可以输入文字的框，点击 submit 之后，新增到上面打勾的选项
- 重新刷新页面时，选单不会清空

#### 画面

添加的项目前面，有 CheckBox 选中功能。

- 不打勾: 方块
- 打勾: "pork taco"

## CSS

### 1. SVG

1. it’s not `background-color`, it’s `fill`

2. ```css
   *,
   *:before,
   *:after {
     box-sizing: inherit;
   }
   ```

### 2. Javascript

1. Note that the submit event fires on the <form> element itself, and not on any <button> or <input type="submit"> inside it (只适用于表单元素)

2. 清空 form：this.reset();代表将表单重置，清空表单中的值，在我们进行了一次 submit 之后，如果不重置表单的话，表单中的值将不会消失，这将大大影响用户体验

```javascript
form.reset();
```

3. Local storage:

```javascript
var arr = [1, 2, 3];
localStorage.setItem("temp", arr);
//存入 参数： 1.调用的值 2.所要存入的数据
```

4. target 属性是获取触发事件对象的目标，也就是绑定事件的元素
