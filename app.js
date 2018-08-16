const express=require('express');

const app=express();
const ejs=require('ejs');

// 第一个参数是视图模版(固定的，不能修改)，第二个参数是视图模版所在的位置
app.set('views','views')

// app.engine('html',require('ejs').renderFile)   //不加括号不是方法，仅绑定
app.set('view engine','ejs')

app.use(express.static('public'))

app.use(require('./router/order.js'))
// 挂载前缀
app.use("api",require('./router/product.js'))
 
// 需要设置视图模板引擎，让她去解析views文件中的.html文件
// npm install ejs --save 安装视图模板引擎
// 设置引擎
// app.engine('html',ejs.renderFile)   //不加括号不是方法，仅绑定
// app.engine('html',require('ejs').renderFile)
// app.engine('view engine','ejs')
app.listen(7000,function(){
    console.log("服务已启动，请访问7000端口")
})