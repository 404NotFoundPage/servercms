/**
 * Created by fengb on 2018/4/26.
 */
const myexpress=require('express');
const router = myexpress.Router();
const controller=require('./../controller/ContentController.js');
router.post("/Bursting.do",controller.Bursting);  //获取爆款推荐
router.post("/UPDATABursting.do",controller.UPDATABursting); //修改商品 6条限制
router.post("/AddBursting.do",controller.AddBursting); //添加爆款
router.post("/xiugaibaokuan.do",controller.xiugaibaokuan);//修改爆款

router.post("/ObtainGoods.do",controller.ObtainGoods); //获取不是爆款的所有商品


router.post("/NewProduct.do",controller.NewProduct); //获取新品
router.post("/UPdateNewProduct.do",controller.UPdateNewProduct); //获取新品
router.post("/Obtainshop.do",controller.Obtainshop); //获取所有商品
router.post("/queyruser.do",controller.queyruser); //获取所有用户id
router.post("/addprouser.do",controller.addprouser); //添加案列
router.post("/zhnagsan.do",controller.zhnagsan); //查询所有条数



router.post("/UserCase.do",controller.UserCase); //获取用户案列

router.post("/UpdataUserCase.do",controller.UpdataUserCase);//修改用户案例
module.exports=router;
