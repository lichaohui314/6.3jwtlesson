## vue结合jwt
1. npm install iview --save
2. 请求的没完成之前有遮罩 请求完成之后隐藏
3. 每次都会传入一个url  发请求时我们用队列存储这个url 每次响应回来之后我们删除 url 一次 url不在有了表示所有请求结束了
