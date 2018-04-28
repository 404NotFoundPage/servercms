/* Created by Administrator on 2018/3/12.*/
const myexpress =require('express');
const bodyparser=require('body-parser');
const cookieparser=require('cookie-parser');
const mysession=require('express-session');//引用express-session
const router=require('./router/router.js');
const Orderrouter=require('./router/orderRouter.js');  //订单页面路由
const ContentRouter=require('./router/ContentRouter.js');  //订单页面路由
const myapp=myexpress();

//配置session
myapp.use(mysession({
    name:"testapp",//name值得是cookie的name，默认的name是connect的id
    secret:"1234",
    cookie:{maxAge:800000},//单位：毫秒；设置session与相对应的cookie的失效时间
    rolling:true,//更新session-cookie失效时间，默认值为false
    resave:true //重新保存，每次请求，重新重置时间
}));

//cors 跨域
myapp.all('*',function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,EDLETE,OPTIONS");
    res.header("X-Powered-By","3.2.1");
    res.header("Content-Type","application/json;charset=utf-8");
    next();
})
myapp.use(cookieparser());
myapp.use(bodyparser.urlencoded({extended:false}));
myapp.use(router);  //
myapp.use(Orderrouter);  // 订单使用路由
myapp.use(ContentRouter);  // 内容使用路由

myapp.use(myexpress.static(__dirname+'/public'));

myapp.listen('9999',function(){
    console.log('9999服务启动');
});
