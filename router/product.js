const express=require('express');
const route=express.Router();
// module相当于一个单独作用域

route.get('/product/list',function(req,res,next){
    res.render('product',{
        content:"我是产品列表页",
        products:[{
            id:"01",
            name:"铅笔",
            price:"1.00",
            amount:"5"}]
        
    })
})



module.exports=route;