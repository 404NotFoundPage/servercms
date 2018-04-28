/* Created by lixin on 2018/3/12.*/
const productRouter=require('./productRouter.js');//商品管理路由
const userRouter=require('./userRouter.js')//会员管理路由
const orderRouter=require('./orderRouter.js')//订单管理路由
const cartRouter=require('./cartRouter.js')//订单管理路由
module.exports=[productRouter,userRouter,orderRouter,cartRouter];