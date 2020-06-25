# Da20 Native Speech Detection

本次的挑战任务，是利用浏览器内置 Web speech API,将自己所说的话输出在页面上,仅 chrome 浏览器支持。
说明：由于只有 chrome 浏览器实现了该接口，而语音识别需要将捕捉到的信息发送至 google 服务器进行处理，故本文档只提供解决思路和参考代码。

### 思路

- 1.新建语音识别对象;
- 2.开启语音识别服务; `recognition.start()`
- 3.通过监听 result 事件，实时获取捕获到的语音信息;
- 4.通过监听 end 事件，当一次语音捕获结束后，重新开启该功能，实现持续的语音监听功能。

### 方法

[SpeechRecognition.end](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/end_event)

[SpeechRecognitionEvent.results](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionEvent/results)

[SpeechRecognitionResult.isFinal](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionResult/isFinal)

[SpeechRecognitionResult.transcript](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionAlternative/transcript)
