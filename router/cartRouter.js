/* Created by lixin on 2018/3/12.*/
const myexpress=require('express');
const router = myexpress.Router();
const controller=require('./../controller/cartController.js');
//  购物车管理
router.post('/cart.do',controller.cart);//购物车查询

module.exports=router;