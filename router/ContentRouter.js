/**
 * Created by fengb on 2018/4/26.
 */
const myexpress=require('express');
const router = myexpress.Router();
const controller=require('./../controller/ContentController.js');
router.post("/Bursting.do",controller.Bursting);  //获取爆款推荐
router.post("/UPDATABursting.do",controller.UPDATABursting); //修改商品 6条限制
router.post("/AddBursting.do",controller.AddBursting); //添加爆款
router.post("/xiugaibaokuan.do",controller.xiugaibaokuan)
router.post("/ObtainGoods.do",controller.ObtainGoods); //获取所有商品
router.post("/NewProduct.do",controller.NewProduct); //获取新品
router.post("/UserCase.do",controller.UserCase); //获取用户案列
module.exports=router;
