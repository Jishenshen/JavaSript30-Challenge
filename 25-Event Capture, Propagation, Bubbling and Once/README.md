# Day25 - Event Capture, Propagation, Bubbling and Once

第 25 天的训练是学习 DOM 的事件机制，主要包括事件捕获，事件冒泡，单次执行事件。

> 线上 DEMO 由于是事件机制的学习，表面上并无实际效果，可以打开开发者工具 console 面板进行调试查看。

## JavaScript

EventTarget.addEventListener('eventName',callback,option)：元素的事件注册方法，接收三个参数，第一个参数为事件的名称（点击 click、双击 dbclick、改变 change 等），第二个参数是该事件的回调函数，也称为监听器，第三个参数为事件注册的选项对象，通常会包含两个配置项（是否事件捕获 capture 以及单次执行 once 事件，它们两个的默认值都是 false）。

> capture 默认为 false，当设置为 true 时，即事件在捕获阶段即执行
