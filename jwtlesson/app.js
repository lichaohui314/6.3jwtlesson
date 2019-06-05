let express = require("express");
let app = express(); //创建一个服务器
//中间件都是函数 中间件都是通过use调用
let cors = require("cors");
app.use(cors()); //跨域中间件
let bodyParse = require("body-parser");
app.use(bodyParse.json()); //解析数据的中间件 解析json数据
let jwt = require("jsonwebtoken");
//jwt通过一定规则进行加密解密
//在登录页面登录成功之后拿到token，访问其他页面的时候发送一个请求来验证用户是否登录 通过携带token的方式 如果token解密正确 说明用户已经登录了如果token解密错误说明用户没有登录/登录已经过期
//验证登录的接口 通过token来验证
//localhost:3000/validate
app.post("/validate", (req, res) => {
    let token = req.headers.authorization;
    //我们要对前端发过来的token进行验证 防止前端篡改 确保是服务端给前端的合法token
    //jwt.verify 验证函数 第一个参数token，第二个参数 解密的规则 需要和加密一样 第三个参数cb(err,decode)  err解密失败 decode解密的对象{user:lilei}
    jwt.verify(token, "abcd", function (err, decode) {
        //如果token不合法
        if (err) {
            res.json({
                msg: "用户未登录"
            });
        } else {
            //token合法 需要延长过期时间(重新在给前端发一个token)
            res.json({
                token: jwt.sign({ nickname: decode.nickname }, "abcd", {
                    expiresIn: "120s"
                }),
                nickname: decode.nickname
            });
        }
    });
});
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibGlsaSIsImlhdCI6MTU1OTUyNjEwNSwiZXhwIjoxNTU5NTI3OTA1fQ.k9koiQDzhb8BVYWW05REW-n0NsVplpX6V2tof57jhLg
//登录接口
// user pass
app.post("/login", (req, res) => {
    // console.log(req.body); { user: 'lili', pass: '12334' }
    let { user } = req.body;
    //假设登录成功 登录成功之后给前端返回一个加密的token
    //jwt.sign 加密函数 参数第一个 对象 你要加密的对象  第二个参数加密的规则 第三个配置 常用的expiresIn 过期时间
    res.json({
        token: jwt.sign({ nickname: "张三" }, "abcd", {
            expiresIn: "120s"
        }),
        nickname: "张三"
    });
});
app.listen(3000, () => {
    console.log("服务器端启动，端口是3000");
}); //监听服务器端口
