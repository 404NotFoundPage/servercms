/**
 * Created by fengb on 2018/4/24.
 */
const myexpress=require('express');
const router = myexpress.Router();
const controller=require('./../controller/orderContorller.js');
// 读取订单
router.post("/readTheOrder.do",controller.readTheOrder);   //读取订单
router.post("/readOneOrder.do",controller.readOneOrder)// 读取某条订单
router.post("/AmendTheOrder.do",controller.AmendTheOrder);   //修改订单状态
router.post("/totalNumber.do",controller.totalNumber);   //查询总条数


module.exports=router;
