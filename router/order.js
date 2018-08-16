const express=require('express');
const route=express.Router();
// module相当于一个单独作用域
route.get('/order/list',function(req,res,next){
    // res.json({code:200})
    // render第一个参数是视图的名称，如果是.ejs文件，必须省略后缀名，如果是.html,.jsp,.abc,.def等自定义的后缀名时。必须加后缀名。第二个参数是视图需要的数据<%= title %>

    // res.render('order.html')
    res.render('order',{
        title:"我是订单列表页",
        content:"<h2>我是标题2</h2>",
        person:{
            name:"张三",
            age:20,
            sex:true,
            fav:["读书","听音乐","逛街"]
        }
    });
    // public中的页面是静态的，render渲染是动态动作
})

// a标签默认发起get请求
module.exports=route;